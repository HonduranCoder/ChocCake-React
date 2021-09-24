import React, { Component } from 'react';
import ButtonList from './ButtonList.js';

export default class Header extends Component {
  render(){
    return (
      <>
        <h1 className = 'header'> Chocolate Pizza</h1>
        <ButtonList />
        
      </>
    );
  }
}
