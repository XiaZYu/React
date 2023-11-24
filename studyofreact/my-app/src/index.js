import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import App from './App';
import Home from './componrnts/Home'
import Login from './componrnts/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>

);