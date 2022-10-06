import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

function MovieList() {
    const [movies, setMovies] = useState([])


    useEffect(()=> {
       fetch("https://moviefy-server-app.herokuapp.com/movies")
       .then(res => res.json())
       .then(data => setMovies(data))
    }, [])


  return (
    <div className='movie-cards'>
       {
        movies.map(movie => <MovieCard movie={movie}/> )
       }
    </div>
  )
}

export default MovieList