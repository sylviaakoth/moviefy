import React from 'react'
import "../App.css"

function MovieCard({movie, handleClick}) {
  // console.log(movie)

  return (
    <div className="movie-card" key={movie.id}>
    <img src={movie.image} alt={movie.genre}/>
     <h1>{movie.title}</h1>
     {
     movie.likes
     }
     <p> likes <button onClick={ ()=> handleClick(movie)}>LIKE</button></p>
    </div>

  )
}

export default MovieCard