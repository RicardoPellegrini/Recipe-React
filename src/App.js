import React, { useEffect, useState } from 'react';
import Recipe from '../src/components/Recipe/Recipe'

import './App.css';

function App() {

  const api = {
    id: '3fc5b97b',
    key: '9dd134bb7b4208189e1af3bb27f9eb6f'
  }

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  },[query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${api.id}&app_key=${api.key}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <header>
        <form className="search-form" onSubmit={getSearch}>
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </header>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
