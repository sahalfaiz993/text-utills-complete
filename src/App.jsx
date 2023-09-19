
import { useState } from 'react';
import './App.css';
import Navbar from './compents/Navbar';
import TextForm from './compents/TextForm';
import propTypes from 'prop-types';
import Alerts from './compents/Alerts';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from "./compents/About";
import Color from "./compents/Color";


function App() {
  const [mode,setmode]=useState('dark')
  const [alert, setalert] = useState(null)

  const showalert=(message,type)=>{
setalert({
  msg:message,
  type:type,
})
setTimeout(() => {
  setalert(null)
}, 3000);

  }
  
    const sahalmode=()=>{
      if(mode==='dark'){
document.body.style.backgroundColor='lightblue'
setmode('light')
showalert("Darkmode is  has been  Enable",'Success');
      }else{
        setmode('dark')
        document.body.style.backgroundColor='white'
        showalert("Lightmode is has been  Enable",'success');
      }
  }

  return (
<BrowserRouter>
    <>
      <Navbar title='Sahalfaiz'  home='About' color="color"   mode={mode}  sahalmode={sahalmode}/>
  <Alerts alert={alert}/>
    <Routes>
   
      <Route path='/'  element={<TextForm hea='Enter Your Text'  showalert={showalert}   />}/>
     
  <Route path='About'  element={   <About/>}/>
      <Route path='Color'  element={   <Color/> }/>
    
      </Routes>
    </>
    </BrowserRouter>
      )
    }
  Navbar.propTypes ={
    title:propTypes.string.isRequired,
    about:propTypes.string.isRequired
  }
  Navbar.defaultProps ={
    title:'please put',
    about:'pleaseput',

  };

export default App;
