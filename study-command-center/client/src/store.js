const KEY='study-command-center-v2';
const LEGACY='study-command-center';

const defaults={
  tasks:{}, progress:[], mistakes:[], mocks:[], syllabus:{}, updates:[], settings:{theme:'dark',weeklyGoal:35}, locked:false
};

function notifySync(){
  if(typeof window !== 'undefined'){
    window.dispatchEvent(new CustomEvent('study-store-sync'));
  }
}

function read(){
  try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')};}catch{return {...defaults};}
}
function write(state){localStorage.setItem(KEY,JSON.stringify(state));notifySync();return state;}
export function getState(){return read();}
export function updateState(patch){return write({...read(),...patch});}
export function subscribeStore(listener){
  if(typeof window === 'undefined')return ()=>{};
  const onStorage=e=>{if(e.key===KEY || !e.key)listener(read());};
  const onSync=()=>listener(read());
  window.addEventListener('storage',onStorage);
  window.addEventListener('study-store-sync',onSync);
  return ()=>{window.removeEventListener('storage',onStorage);window.removeEventListener('study-store-sync',onSync);};
}
export function getTasks(date, generator){
 const s=read(); const generated=generator(date); const saved=s.tasks[date]||{};
 return generated.map(t=>({...t,...saved[t.id]}));
}
export function toggleTask(date,id,completed){const s=read();s.tasks={...s.tasks,[date]:{...(s.tasks[date]||{}),[id]:{...(s.tasks[date]?.[id]||{}),completed}}};write(s);}
export function logProgress(item){const s=read();s.progress=[...s.progress,{...item,id:crypto.randomUUID?.()||Date.now().toString(),createdAt:new Date().toISOString()}];write(s);}
export function addMistake(item){const s=read();s.mistakes=[{...item,id:crypto.randomUUID?.()||Date.now().toString(),createdAt:new Date().toISOString()},...s.mistakes];write(s);}
export function addMock(item){const s=read();s.mocks=[{...item,id:crypto.randomUUID?.()||Date.now().toString(),createdAt:new Date().toISOString()},...s.mocks];write(s);}
export function deleteItem(type,id){const s=read();s[type]=(s[type]||[]).filter(x=>x.id!==id);write(s);}
export function setSyllabus(key,value){const s=read();s.syllabus={...s.syllabus,[key]:value};write(s);}
export function exportData(){return JSON.stringify({...read(),exportedAt:new Date().toISOString()},null,2);}
export function importData(text){const parsed=JSON.parse(text);if(!parsed || typeof parsed!=='object')throw new Error('Invalid backup');write({...defaults,...parsed});}
export function resetAll(){localStorage.removeItem(KEY);localStorage.removeItem(LEGACY);notifySync();}
export function getTodayMinutes(){return read().progress.reduce((sum,x)=>sum+(Number(x.minutes)||0),0);}
export function getTotalMinutes(){return read().progress.reduce((sum,x)=>sum+(Number(x.minutes)||0),0);}
export function getMinutesForDate(date){return read().progress.filter(x=>x.date===date).reduce((sum,x)=>sum+(Number(x.minutes)||0),0);}
export function getCompletedCount(){return Object.values(read().tasks).reduce((sum,day)=>sum+Object.values(day||{}).filter(x=>x.completed).length,0);}
