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
    <div>
       {
        movies.map(movie => <MovieCard/> )
       }
    </div>
  )
}

export default MovieList