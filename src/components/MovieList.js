import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "../App.css";
import { useReducer } from 'react'

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [refresh, newRefresh] = useState(0)


  const initialState = {
    likes: ""
  }
  const reducer = (state, action)=>{
    switch(action.type){
      case "INCREMENT":
        return {...state, likes:  action.payload + 1};
        case "NEWSTATE":
          return {...state, likes:  action.payload};
        
        default:
      return state;
    }
  }
  const [mylikes, dispatch] = useReducer(reducer, initialState)

  function handleClick(movie) {
    fetch(`https://moviefy-server-app.herokuapp.com/movies/${movie.id}`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: "NEWSTATE",
        payload: data.likes
      })
    })
    dispatch({
      type: "INCREMENT",
      payload: movie.likes
    })
    console.log(movie);
    console.log(mylikes)

    fetch(`https://moviefy-server-app.herokuapp.com/movies/${movie.id}`, {
      method : "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
       {likes : mylikes.likes}
      )
    })
    newRefresh(refresh+1)
  }
  useEffect(() => {
    fetch("https://moviefy-server-app.herokuapp.com/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);


  return (
    <div className="movie-cards">
      {movies ? (
        movies.map((movie) => (
          <MovieCard movie={movie} handleClick={handleClick} key={movie.id} />
        ))
      ) : (
        <p>Loading!</p>
      )}
    </div>
  );
}

export default MovieList;
