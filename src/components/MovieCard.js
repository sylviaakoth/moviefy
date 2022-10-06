import React from 'react'

function MovieCard({movie, handleClick}) {
  return (
    <div className="movie-card" key={movie.id}>
     <h1>{movie.title}</h1>
     <img src={movie.image} alt={movie.genre}/>
     <p>{movie.likes} likes <button onClick={(e) => handleClick(movie.likes, movie.id)}>LIKE</button></p>
    </div>

  )
}

export default MovieCard