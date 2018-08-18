import React, { Component } from 'react';
import Recipe from '../components/Recipe';
import { getRecipe } from '../API';

class ViewRecipe extends Component {
  state = {
    isLoading: true,
    recipe: {}
  };

  componentDidMount(){
    const { id } = this.props.match.params;
    getRecipe(id)
      .then(recipe => {
        setTimeout(() => {
          this.setState({
            recipe,
            isLoading: false
          });
        }, 600);
      });
  }
  render() {
    return this.state.isLoading ?
      <h2>....loaaadddingggg</h2> :
      <Recipe recipe={this.state.recipe} showRecipe={true} showEdit={true}/>
  }
}

export default ViewRecipe;