import React,{useState} from 'react';
import './App.css';

function App() {
let butarr=["c","/","*","-","7","8","9","+","4","5","6","1","2","3","=","0","."]
let[calculate,setCalculate]= useState("")
function result(){
try{
setCalculate(eval(calculate))
}
catch(err){
  setCalculate("ERROR")
}
}
function clear(){
setCalculate("")
}
function handlecal(e){
setCalculate(calculate + e.target.innerText)
}
  return (
    <>
    
    <input type='text' value={calculate}></input>
    <div className='grid'> 
      {butarr.map((item,index)=>{
      return(
        <button onClick={item==="=" ? result:item==="c"? clear:handlecal } className={`item-${index}`}>{item}</button>
      )
     })}</div>
    


    </>

  );
}

export default App;
