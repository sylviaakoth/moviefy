import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import NavBar  from "./components/NavBar.js";

function App() {
  return (
    <div className="app">
     <NavBar />
     <Outlet />
    </div>
  );
}

export default App;
