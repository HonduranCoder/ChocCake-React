import React, { Component } from 'react';

export default class Header extends Component {
  render(){
    return (
      <>
        <h1 className = 'header'> Chocolate Pizza</h1>
        < img className = 'image' src = "fb-icon.png" alt ='Facebook'/> 
        < img className = 'image' src = "twit-icon.png" alt ='Twitter' /> 
        < img className = 'image' src = "gp-icon.png" alt ='Google'/> 
        < img className = 'image' src = "insta-icon.png" alt ='Instagram'/> 
        < img className = 'image' src = "flic-icon.png" alt ='Flick'/> 
        < img className = 'image' src = "pint-icon.png" alt ='Pinterest'/> 
        < img className = 'image' src = "rss-icon.png" alt ='RSS'/> 
        < img className = 'image' src = "mail-icon.png" alt ='Mail'/> 
        
      </>
    );
  }
}