import React, { useEffect, useRef, useState } from 'react';

const HOUR = 60 * 60 * 1000;
const LAST_CAPTURE_KEY = 'study-command-center-camera-last-capture';

function topicAt(tasks, now) {
  const minutes = now.getHours() * 60 + now.getMinutes();
  const sorted = [...tasks].sort((a, b) => a.time.localeCompare(b.time));
  let current = sorted[0];
  for (const task of sorted) {
    const [hour, minute] = task.time.split(':').map(Number);
    if (hour * 60 + minute <= minutes) current = task;
    else break;
  }
  return current?.topic || 'No study topic scheduled';
}

export default function HourlyCamera({ tasks }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const captureRef = useRef(null);
  const tasksRef = useRef(tasks);
  tasksRef.current = tasks;
  const [enabled, setEnabled] = useState(false);
  const [status, setStatus] = useState('Camera is off. Start it to enable hourly captures.');
  const [photos, setPhotos] = useState([]);

  useEffect(() => () => {
    clearInterval(captureRef.current);
    streamRef.current?.getTracks().forEach(track => track.stop());
  }, []);

  const capture = () => {
    const video = videoRef.current;
    if (!video || video.readyState < 2 || !video.videoWidth) return false;
    const now = new Date();
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const fontSize = Math.max(18, Math.round(canvas.width * 0.027));
    const lines = [`${now.toLocaleString()}`, `Studying: ${topicAt(tasksRef.current, now)}`];
    ctx.font = `600 ${fontSize}px system-ui, sans-serif`;
    const lineHeight = fontSize * 1.55;
    const boxHeight = lineHeight * lines.length + fontSize;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.68)';
    ctx.fillRect(0, canvas.height - boxHeight, canvas.width, boxHeight);
    ctx.fillStyle = '#fff';
    lines.forEach((line, index) => ctx.fillText(line, fontSize, canvas.height - boxHeight + fontSize + lineHeight * index, canvas.width - fontSize * 2));
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpeg', 0.9);
    link.download = `study-capture-${now.toISOString().replace(/[:.]/g, '-')}.jpg`;
    link.click();
    localStorage.setItem(LAST_CAPTURE_KEY, now.toISOString());
    setPhotos(items => [{ url: link.href, time: now.toLocaleString(), topic: lines[1].replace('Studying: ', '') }, ...items].slice(0, 6));
    setStatus(`Last photo saved at ${now.toLocaleTimeString()}. Next automatic photo in 1 hour.`);
    return true;
  };

  const start = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus('Camera access requires HTTPS or localhost in a supported browser.');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      streamRef.current = stream;
      setEnabled(true);
      setStatus('Camera is on. It will keep capturing in the background while this tab stays open. First photo in 1 hour.');
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      captureRef.current = setInterval(capture, HOUR);
    } catch {
      setStatus('Camera permission was denied or no camera is available. Allow camera access and try again.');
    }
  };

  const stop = () => {
    clearInterval(captureRef.current);
    captureRef.current = null;
    streamRef.current?.getTracks().forEach(track => track.stop());
    streamRef.current = null;
    setEnabled(false);
    setStatus('Camera is off.');
  };

  return (
    <section className="panel camera-panel">
      <div className="section-head"><div><h3>Hourly study photos</h3><p>Photos download to this device with the time and current plan topic on the image.</p></div></div>
      <p className="camera-status" role="status">{status}</p>
      <video ref={videoRef} className="camera-preview" autoPlay muted playsInline style={{ display: enabled ? 'block' : 'none' }} />
      <div className="inline camera-actions">
        {enabled ? <><button className="primary" onClick={capture}>Capture now</button><button className="ghost" onClick={stop}>Stop camera</button></> : <button className="primary" onClick={start}>Enable hourly photos</button>}
      </div>
      {photos.length > 0 && <div className="photo-grid">{photos.map((photo, index) => <a key={`${photo.time}-${index}`} href={photo.url} download={`study-photo-${index + 1}.jpg`}><img src={photo.url} alt={`Study photo at ${photo.time}: ${photo.topic}`} /><small>{photo.time}<br />{photo.topic}</small></a>)}</div>}
    </section>
  );
}
