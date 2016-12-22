import React, { Component } from 'react';
 
export default class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <li><a href={this.props.href}>{this.props.label}</a></li>
    );
  }
}