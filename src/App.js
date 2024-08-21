import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";
import Read from "./components/Read";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App(){
  let a= 20;
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/navbar" element={<Navbar />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/update" element={<Update />}></Route>
      <Route path="/read" element={<Read />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;


/*
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"; 
import About from "./components/About";
import React,{ useState } from "react";
import Alert from "./components/Alerts";
function App(){
  const [mode,setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success")
      document.title = 'TextUtils - Dark Mode';
      /*setInterval(()=>{
        document.title='TextUtils is Amazing Mode';
      },2000);
      setInterval(()=>{
        document.title='Install TextUtils Now';
      },1500);
      
      
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
      document.title = 'TextUtils - Light Mode';
    }
  }

  
  return(
    <>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className='container my-3'>
      <TextForm showAlert={showAlert} heading='Enter the text to analyse below' mode={mode}/>
      <About />

      </div>
      
    </>
  );
}
export default App;
*/