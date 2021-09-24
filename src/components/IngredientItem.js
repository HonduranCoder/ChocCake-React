import React, { Component } from 'react';

export default class IngredientItem extends Component {
  render() {
    return (
      <li>
        <p>{this.props.measure} {this.props.state} of {this.props.items}</p>      
      </li>
    );
  }
}
