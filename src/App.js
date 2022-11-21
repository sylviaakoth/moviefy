import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar  from "./components/NavBar.js";
import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList.js";
import Favourites from "./components/Favourites.js";
import Search from "./components/Search.js";
import Home from './components/Home';


function App() {
  return (
    <div className="app">
     <NavBar />
     <Routes>
        <Route path='/home' index element={<Home/>}/>
        <Route path="/movies" element={<MovieList />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/search" element={<Search />} />
    </Routes>
     <Outlet />
    </div>
  );
}

export default App;
