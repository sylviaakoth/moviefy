import React from 'react'
import "../App.css"

function MovieCard({movie, handleClick}) {
  return (
    <div className="movie-card" key={movie.id}>
    <img src={movie.image} alt={movie.genre}/>
     <h1>{movie.title}</h1>
     <p>{movie.likes} likes <button onClick={(e) => handleClick(movie.likes, movie.id)}>LIKE</button></p>
    </div>

  )
}

export default MovieCard