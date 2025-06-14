import React from 'react'
import MovieCard from './MovieCard'
import '../App.css'

function MovieList({movies}) {
  return (
    <div className='movie-list-container'>
    <div className='movie-list'>  
    {movies.map((movie) => (
        <MovieCard 
         key={movie.id} 
         {...movie}
        />
      ))}
</div>
    </div>
  );
};

export default MovieList