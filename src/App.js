import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
//function App() it can also be written as const App()=>{}

function App() {
  const[mode,setMode]=useState("light");
  const toggleMode=()=>{
    if(mode=="light"){
      setMode("dark");
      document.body.style.backgroundColor="black";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
      <div>
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <TextForm Heading="Enter the text you want to Analyze"/>
      </div>
    </>
  );
}
export default App;
