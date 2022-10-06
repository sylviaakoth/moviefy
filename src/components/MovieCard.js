import React from 'react'

function MovieCard() {
  return (
    <div className="movie-card" key={movie.id}>
     <h1>{movie.title}</h1>
     <img src={movie.image}/>
     <p>`${movie.likes} likes`</p>
    </div>

  )
}

export default MovieCard