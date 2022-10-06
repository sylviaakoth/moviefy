import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'


function Search() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState([])

    useEffect(() => {
      fetch("https://moviefy-server-app.herokuapp.com/movies")
      .then(res => res.json())
      .then(data => setMovies(data))
    }, [])

  function handleSearch(e) {
    setSearch(e.target.value.toLowerCase())
  }

  const newMovies = movies.filter(movie => {
    if (search === "") {
      return movie
    } else {
      return movie.title.toLowerCase().includes(search)
    }
  })

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
    <div>
      <input type="text" onChange={handleSearch}/>
      <div className='movie-cards'>
        {
          newMovies.map(movie => <MovieCard movie={movie} handleClick={handleClick}/>)
        }
      </div>
    </div>
  )
}

export default Search