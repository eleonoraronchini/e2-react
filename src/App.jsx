import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav.jsx';
import MyFooter from './components/MyFooter.jsx';
import MyTitle from './components/MyTitle.jsx';
import MyAlert from './components/MyAlerts.jsx';

function App() {

  return (
    <>
     <MyNav/>
     <MyTitle/>
     <MyAlert/>
     <MyFooter/>
    </>
  )
}

export default App
