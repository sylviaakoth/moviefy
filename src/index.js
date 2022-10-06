import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieList from "./components/MovieList.js";
//import Home from "./components/Home.js";
import Favourites from "./components/Favourites.js";
import Search from "./components/Search.js";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes> 
    <Route path="/" element={<App/>}>
      <Route path="/movies" element={<MovieList/>}/> 
     <Route path="/favourites" element={<Favourites/>}/>
     <Route path="/search" element={<Search/>}/>
    </Route>


   </Routes>



  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
