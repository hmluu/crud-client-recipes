import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import NotFound from './components/NotFound';

import Recipes from './containers/Recipes';
import ViewRecipe from './containers/ViewRecipe';
import CreateRecipe from './containers/CreateRecipe';
import EditRecipe from './containers/EditRecipe';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <main className="container">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/recipes/create' component={CreateRecipe} />
        <Route path='/recipes/:id/edit' component={EditRecipe} />
        <Route path='/recipes/:id' component={ViewRecipe} />
        <Route path="*" component={NotFound} />
      </Switch>
      {/* <Landing/> */}
      </main>
      </div>
    );
  }
}

export default App;
