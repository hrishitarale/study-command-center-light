import React, { useRef, useState } from 'react';
import {
  exportData,
  importData,
  logProgress,
  resetAll,
} from '../store';

export default function Settings() {
  const [minutes, setMinutes] = useState('');
  const fileRef = useRef(null);

  const save = () => {
    if (!minutes) return;

    logProgress({
      date: new Date().toISOString().slice(0, 10),
      minutes: Number(minutes),
      exam: 'Both',
      subject: 'Study session',
      note: 'Manual log',
    });
    setMinutes('');
    alert('Study time logged.');
  };

  const download = () => {
    const blob = new Blob([exportData()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `study-command-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const restore = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        importData(reader.result);
        alert('Backup restored. Reloading...');
        location.reload();
      } catch {
        alert('That backup file is not valid.');
      }
    };
    reader.readAsText(file);
  };

  const reset = () => {
    if (confirm('Delete all local study data from this browser?')) {
      resetAll();
      location.reload();
    }
  };

  return (
    <div className="page">
      <div className="page-title">
        <div>
          <div className="eyebrow">PERSONAL SETTINGS</div>
          <h1>System controls</h1>
          <p>Everything here is local to this browser unless you export/import a backup.</p>
        </div>
      </div>

      <div className="settings-grid">
        <section className="panel">
          <h3>Log study time</h3>
          <p>Add time spent outside the generated task blocks.</p>
          <div className="inline">
            <input
              type="number"
              min="1"
              value={minutes}
              onChange={(event) => setMinutes(event.target.value)}
              placeholder="Minutes"
            />
            <button className="primary" onClick={save}>Log</button>
          </div>
        </section>

        <section className="panel">
          <h3>Current schedule</h3>
          <p><b>10:30 AM–1:00 PM</b> morning study</p>
          <p><b>7:30 PM–1:00 AM</b> night study</p>
          <p>Topic rotation changes by day; exam dates are shown from the app&apos;s study data.</p>
        </section>

        <section className="panel">
          <h3>Sync between devices</h3>
          <p>Local storage is browser-specific. To share your study data between desktop and mobile, export a JSON backup and import it on the other device.</p>
          <div className="inline">
            <button className="primary" onClick={download}>Export JSON</button>
            <button className="ghost" onClick={() => fileRef.current?.click()}>Import JSON</button>
            <input
              ref={fileRef}
              className="ghost-file"
              type="file"
              accept="application/json"
              onChange={restore}
            />
          </div>
        </section>

        <section className="panel">
          <h3>Reset</h3>
          <p>This removes all local data from this browser.</p>
          <button className="danger-button" onClick={reset}>Delete local data</button>
        </section>
      </div>
    </div>
  );
}
