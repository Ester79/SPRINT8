import React from 'react';
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './pages/login.page';
import StarShipsPage from './pages/starships.page';
import DetailStarShipsPage from './pages/detailStarShip.page';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/home.page';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/starships' element={<StarShipsPage />} />
        <Route path='/details' element={<DetailStarShipsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
