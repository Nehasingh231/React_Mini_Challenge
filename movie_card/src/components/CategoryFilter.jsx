import React from 'react'
import '../App.css'

function CategoryFilter({onCategorychange, selectedCategory}) {
const category =[ 'All', 'Romantic', 'Action', 'Sci-Fi', 'Drama'];

  return (
    <div className='category-filter'>
       {category.map((category) => (
        <button
         key={category}
         onClick={() => onCategorychange(category)}
         className = {category === selectedCategory ? "active" : ""}
         >
         {category}
        </button>
       ))}
    </div>
  );
}

export default CategoryFilter