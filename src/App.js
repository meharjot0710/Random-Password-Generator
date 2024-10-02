import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'react-notifications/lib/notifications.css';
import 'react-toastify/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
import { UC,LC,SC,NC } from './data/passchar'

function App() {
  let [uppercase,setuppercaase]=useState(false);
  let [lowercase,setlowercaase]=useState(false);
  let [number,setnumber]=useState(false);
  let [specialc,setspecialc]=useState(false);
  let [passlength,setpasslength]=useState(10)
  let [pass,setpass]=useState('')
  let createpass=()=>{
    let charset='';
    let finalpass='';
    if( uppercase || lowercase || number || specialc ){
      if(uppercase) charset+=UC;
      if(lowercase) charset+=LC;
      if(number) charset+=NC;
      if(specialc) charset+=SC;
      for(let i=0;i<passlength;i++){
        finalpass+=charset.charAt(Math.floor(Math.random()*charset.length));
      }
      setpass(finalpass);
      toast.success('Password Generated Successfully')
    }
    else{
      setpass('')
      toast.error('No field selected')
    }
  }
  let copypass=()=>{
    navigator.clipboard.writeText(pass)
  }
  return (
    <div className="App">
      <ToastContainer/>
      <div className='container'>
        <h1>Password Generator</h1>
        <div className='passbox'>
          <input type='text' readOnly value={pass}/>
          <Button onClick={copypass}>Copy</Button>
        </div>
        <div className='passlength'>
          <label>Password Length</label>
          <input type='number' value={passlength} min={5} onChange={(e)=>setpasslength(e.target.value)}/>
        </div>
        <div className='passlength'>
          <label>Include Uppercase letters</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setuppercaase(!uppercase)}/>
        </div>
        <div className='passlength'>
          <label>Include Lowercase letters</label>
          <input type='checkbox' checked={lowercase} onChange={()=>setlowercaase(!lowercase)}/>
        </div>
        <div className='passlength'>
          <label>Include Numbers</label>
          <input type='checkbox' checked={number} onChange={()=>setnumber(!number)}/>
        </div>
        <div className='passlength'>
          <label>Include Special Characters</label>
          <input type='checkbox' checked={specialc} onChange={()=>setspecialc(!specialc)}/>
        </div>
        <Button className='btnn' onClick={createpass}>Genterate</Button>
      </div>
    </div>
  );
}

export default App;
