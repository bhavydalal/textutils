
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode , setMode] = useState('light');  
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  } 


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark'); 
      document.body.style.backgroundColor = '#3A3B3C'
      showAlert("dark mode has been enabled" , "success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled" , "success");
      document.title = "TextUtils - Light Mode";

    }
    }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtilss" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className='container my-3'>
      <Routes>
          <Route exact path="/" element={
             <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra Spaces" mode={mode}/>}/>             
           
          <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
