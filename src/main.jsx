import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Signup from './components/signup/Signup.jsx';
import Login from './components/login/Login.jsx';
import Home from './components/home/Home.jsx';




{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/signup' element={<Signup/>} />
  <Route path='/login' element={<Login/>} />
</Routes>
</BrowserRouter> */}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
