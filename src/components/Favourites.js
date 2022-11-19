import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import "../App.css"
function Favourites() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://moviefy-server-app.herokuapp.com/movies")
    .then(res => res.json())
    .then(data => setMovies(data))
  }, [])


  const favouriteMovies = movies.filter(movie => movie.likes > 2)

  function handleClick(movieLikes, movieId) {
    movieLikes = movieLikes + 1
    fetch(`https://moviefy-server-app.herokuapp.com/movies/${movieId}`, {
      method : "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        {likes: movieLikes}
      )
    })
  }

  return (
    <div className='movie-cards'>
      {
        favouriteMovies.map(movie => <MovieCard movie={movie} handleClick={handleClick}/>)
      }
    </div>
  )
}

export default Favourites