import React, { Component } from 'react';

import Menu from '../components/Menu.jsx';

export default class MainLayout extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return ( 
      <div className="container">
        <header>
          <Menu />
        </header>
        <main>
          {this.props.content}
        </main>
      </div>
    );
  }
}