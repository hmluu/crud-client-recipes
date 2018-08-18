import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RecipeForm from './RecipeForm';
import { createRecipe } from '../API';

class CreateRecipe extends Component {
  state = {
    recipe: {
      title: '',
      number_of_ingredients: 0,
      instructions: '',
      url: ''
    },
    creating: false
  };

  CreateRecipe = (recipe) => {
    this.setState({
      creating: true
    });
    recipe.number_of_ingredients = Number(recipe.number_of_ingredients);
    createRecipe(recipe)
    .then(result => {
      this.props.history.push(`/recipes/${result.id}`);
    })
  }

  render() {
    return (
      <div>
        <h1>Create A Recipe</h1>
        <RecipeForm onFormSubmitted={this.CreateRecipe} recipe={ this.state.recipe}/>
        </div>
    )
  }
}

export default withRouter(CreateRecipe);