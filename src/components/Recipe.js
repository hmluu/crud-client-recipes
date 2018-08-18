import React from 'react';
import { Link } from 'react-router-dom';
const Recipe = ({recipe, showRecipe}) => (
  <div key={recipe.title} className="eachRecipe">
    <div className="eachCard">
      <h5 className="card-title">{recipe.title}</h5>
      <a href={recipe.url}>Origional Recipe</a>
      <p className="card-text"># of ingredients: {recipe.number_of_ingredients}</p>
      {
        showRecipe ?
        <p className="card-text">{recipe.instructions}</p> :
        ''
      }
      {
        showRecipe ?
        <Link to={`/recipes/${recipe.id}/edit`} href="#" className="btn btn-primary btn-sm btn-outline-warning">Edit Recipe</Link> :
        <Link to={`/recipes/${recipe.id}`} href="#" className="btn btn-primary btn-sm btn-outline-success">View Recipe</Link>
      }
    </div>
  </div>

);

export default Recipe;

