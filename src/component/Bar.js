import React, { Component } from 'react';

export default class Bar extends Component {
  render() {
    const ratio = 70;
    return (
      <div className="bar-wrapper">
        <p className="name">{this.props.content.name}</p>
        <p 
          className="bar"
          style={{width: ratio * this.props.content.value + 'px'}}>
            {this.props.content.value}
        </p>
      </div>
    )
  }
}