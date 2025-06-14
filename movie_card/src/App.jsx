import { useState } from 'react'
import moviesData from './data/data';
import MovieList from './components/MovieList'
import './App.css'
import CategoryFilter from './components/CategoryFilter';

function App() {
 const [selectedCategory, setselectedCategory] = useState('All');

 const handleCtaegoryChange = (category) => {
  setselectedCategory(category);
 };
 
 const filteredMovies = selectedCategory === 'All'
  ? moviesData : moviesData.filter((movie) => movie.category === selectedCategory);

  return (
    <div>
     <h1>Movie Card</h1>
     <CategoryFilter 
      selectedCategory = {selectedCategory}
      onCategorychange ={handleCtaegoryChange}
     />
     <MovieList movies = {filteredMovies} />
    </div>
  )
}

export default App;
