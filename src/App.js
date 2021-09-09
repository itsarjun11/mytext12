import './App.css';
import About from './componants/About';
import Navbar from './componants/Navbar';
import Textform from './componants/TextForm'
import React, { useState } from 'react'
import Alert from './componants/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";





function App() {

  const [mode, setMode] = useState('light');    //whether dark mode is enaable or not//
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);


  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-light');

  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
  
  if (mode === 'light') {
    setMode('dark')
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode is enabled", "success")
    // document.title ="TextUtils - Dark "
  }
  else {
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode is enabled", "success")
    // document.title ="TextUtils - Light"

  }
  }
  

  return (

    <>
      <Router>
        <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">

          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <Textform showAlert={showAlert} heading="Analyze for upperCase/lowerCase" mode={mode} />
            </Route>
          </Switch>
          {/* <Textform showAlert= {showAlert}   heading="Analyze for upperCase/lowerCase" mode={mode}/> */}

        </div>
      </Router>
    </>

  );
}

export default App;
