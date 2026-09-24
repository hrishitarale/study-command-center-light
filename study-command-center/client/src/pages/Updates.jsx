import React,{useMemo,useState} from 'react';
import {updates} from '../data';

export default function Updates(){
  const [filter,setFilter]=useState('All');
  const items=useMemo(()=>{
    const source=updates();
    return filter==='All'?source:source.filter(item=>item.exam===filter);
  },[filter]);

  return (
    <div className="page">
      <div className="page-title">
        <div>
          <div className="eyebrow">OFFICIAL ANNOUNCEMENTS</div>
          <h1>Exam updates</h1>
          <p>Recent date confirmations, hall ticket notices, and official schedule changes in one place.</p>
        </div>
        <div className="seg">
          {['All','RRB','SSC'].map(item=><button key={item} className={filter===item?'selected':''} onClick={()=>setFilter(item)}>{item}</button>)}
        </div>
      </div>

      <div className="updates-list">
        {items.map(item=>(
          <article className="update-panel" key={item.id}>
            <div className="update-header">
              <span className="tag">{item.exam}</span>
              <span className="chip">{item.type}</span>
              <span className="update-date">{new Date(`${item.date}T00:00:00`).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <a className="resource-link" href={item.link} target="_blank" rel="noreferrer">Official source ↗</a>
          </article>
        ))}
      </div>
    </div>
  );
}
