import React from 'react'
import '../App.css'

function MovieCard({poster,title,rating, category}) {
  return (
    <div className='movie-card'>
       <img src={poster} alt={title} /> 
       <h3>{title} </h3>
       <p> ⭐{rating} | {category} </p>
    </div>
  ); 
};

export default MovieCard;