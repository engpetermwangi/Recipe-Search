import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const APP_KEY = "7e59a9b7c7391586be83698129538ea9";
const APP_ID = "73e0142c";

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipe.value;
    const from = Math.floor(Math.random() * 98);
    const to = from + 6;
    const url = `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${from.toString()}&to=${to.toString()}`;
    await fetch(url)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ recipes: responseData.hits });
      });
  };

  render() {
    return (
      <div>
        <header>
          <Title />
        </header>
        <main className="container center">
          <Form getRecipe={this.getRecipe} />
          <Recipes recipes={this.state.recipes} />
        </main>
      </div>
    );
  }
}

export default App;
