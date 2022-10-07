import React from 'react'
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
        <nav className='nav'>
         <Link className="nav-links" to="/">Home</Link>
         <Link className="nav-links" to="/movies">Movies</Link>
         <Link className="nav-links" to="/favourites">Favourites</Link>
         <Link className="nav-links" to="/search">Search</Link>
        </nav>
  )
}

export default NavBar