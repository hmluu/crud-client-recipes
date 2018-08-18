import React, { Component } from 'react';
import Recipe from '../components/Recipe';
import { getAllRecipes } from '../API';

class Recipes extends Component {
  state = {
    isLoading: true,
    recipes: []
  };
  componentDidMount(){
    getAllRecipes()
      .then(recipes => {
        setTimeout(() => {
          this.setState({
            recipes,
            isLoading: false
          });
        }, 600)
      });
  }
  render(){
    return(
      <div>
        { this.state.isLoading ? 
          <h2>......</h2> : 
          <div className="recipe">
            {this.state.recipes.map(recipe => (
              <Recipe key={recipe.id} recipe={recipe} cols="col-4" />
              ))
            }
          </div>   
        }
      </div>
    );
  }
}

export default Recipes;