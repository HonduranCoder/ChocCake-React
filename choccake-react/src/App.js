import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Recipe from './components/Recipe.js'; 
import Image from './components/ImageSection.js';
import ingredients from './data.js';
import IngredientsList from './components/IngredientList.js';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <Image />
          <Recipe />
        </div>
        {
          ingredients.map(ingredient =>
            <IngredientsList 
              measure = {ingredient.amount}
              state = {ingredient.utensils}
              item = {ingredient.items}
            />)
        }
        <Footer />
      </>
    );
  }
}