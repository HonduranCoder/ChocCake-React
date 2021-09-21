import React, { Component } from 'react';

export default class Ingredients extends Component {
  render() {
    return (
      <ol>
        <ul>
          {this.props.measure} {this.props.state} of {this.props.items};
        </ul>
      </ol>
    );
  }
}
  