import React, { Component } from 'react';

class RecipeForm extends Component {
  state = {
    recipe: {
      title: '',
      number_of_ingredients: 0,
      instructions: '',
      url: ''
    }
  };

  componentDidMount() {
    this.setState({
      recipe: {
        ...this.props.recipe
      }
    });
  }
  valueChanged = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      recipe: {
        ...prevState.recipe,
        [name]: value
      }
    }));
  };

  validRecipe = () => {
    const { recipe } = this.state;
    console.log(recipe);
    
    const hasTitle = recipe.title.trim() !== '';
    const hasIngredients = !isNaN(recipe.number_of_ingredients) && Number(recipe.number_of_ingredients) >= 3;
    const hasUrl = recipe.url.trim() !== '';
    const hasInstructions = recipe.instructions.trim() !== '';
    return hasTitle && hasIngredients && hasUrl && hasInstructions;
  }
  
  formSubmitted = (event) => {
    console.log('we are here');
    
    event.preventDefault();
    if(this.validRecipe()) {
      console.log("isValid");
      
      this.props.onFormSubmitted(this.state.recipe);
    }
  };
  render() {
    const { recipe } = this.state;
    return (
      <form onSubmit={this.formSubmitted}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input onChange={this.valueChanged} value={recipe.title} type="text" name="title" className="form-control" id="recipeTitle" aria-describedby="title" placeholder="add a title" required/>
      </div>
      <div className="form-group">
        <label htmlFor="ingredients">Number of Ingredients </label>
        <input onChange={this.valueChanged} value={recipe.number_of_ingredients} step="1" min="3" type="number" name="number_of_ingredients" className="form-control" id="ingredients" placeholder="enter a number" required />
      </div>
      <div className="form-group">
        <label htmlFor="url">URL of Origional Recipe</label>
        <input onChange={this.valueChanged} value={recipe.url} type="text" name="url" className="form-control" id="url" placeholder="https://www.foodnetwork.com/recipes/pork-dumplings-2042427" required />
      </div>
      <div className="form-group">
        <label htmlFor="instruction">Instructions </label>
        <textarea onChange={this.valueChanged} value={recipe.instructions} type="text" name="instructions" className="form-control" id="instructions" placeholder="add instructions" required />
      </div>
      
      <button type="submit" className="btn btn-primary btn-sm btn-outline-success">Submit</button>
    </form>
    )
  }
}
  

export default RecipeForm;