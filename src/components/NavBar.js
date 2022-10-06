import React from 'react'
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <nav>
     <Link className="links" to="/">Home</Link>
     <Link className="links" to="/movies">Movies</Link>
     <Link className="links" to="/favourites">Favourites</Link>
     <Link className="links" to="/search">Search</Link>

    </nav>
  )
}

export default NavBar