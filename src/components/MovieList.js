import React, { useEffect, useState } from 'react'

function MovieList() {
    const [movies, setMovies] = useState([])


    useEffect(()=> {
       fetch("https://moviefy-server-app.herokuapp.com/movies")
       .then(res => res.json())
       .then(data => setMovies(data))
    }, [])
  return (
    <div>MovieList</div>
  )
}

export default MovieList