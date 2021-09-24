import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';

export default class IngredientList extends Component {
  render() {
    return (
      <ol className = "listuno">
        {
          this.props.ingredients.map(ingredient =>
            <IngredientItem 
              measure = {ingredient.amount}
              state = {ingredient.utensils}
              items = {ingredient.items}
            />)
        }
      </ol>
    );
  }
}
  
