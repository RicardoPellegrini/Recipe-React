import React from 'react'
import './Recipe.css'

function Recipe({title, calories, image, ingredients}){
    return(
        <div className="recipe-data">
            <h1>{title.toUpperCase()}</h1>
            <img src={image} alt={title}/>
            <p>Ingredients:</p>
            <ul>
                {ingredients.map(ingredient => <li key={ingredient.calories}>{ingredient.text}</li>)}
            </ul>
            <p>Total of calories: {Math.round(calories)} cal</p>
        </div>
    )
}

export default Recipe