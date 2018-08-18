import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getRecipe, updateRecipe } from '../API';
import RecipeForm from './RecipeForm';

class EditRecipe extends Component {
  state = {
    isLoading: true,
    recipe: {},
    isEditing: true
  };
  componentDidMount(){
    const { id } = this.props.match.params;
    getRecipe(id)
      .then(recipe => {
        this.setState({
          recipe,
          isLoading: false
        });
      });
  }
  updateRecipe = (recipe) => {
    updateRecipe(recipe.id, recipe)
      .then (() => {
        this.props.history.push(`/recipes/${recipe.id}`);
      });
  };

  render() {
    return this.state.isLoading ?
    <h2>....</h2> :
    <RecipeForm onFormSubmitted={this.updateRecipe} recipe={this.state.recipe} />
  }
}

export default withRouter(EditRecipe);