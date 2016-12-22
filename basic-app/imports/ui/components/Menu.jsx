import React, {Component} from 'react';
import MenuItem from './MenuItem.jsx';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }
  
  getMenuItems() { 
    return [
      {href: "/", label: "Home"},
      {href: "/about", label: "About"},
      {href: "/contact", label: "Contact"}
    ];
  }

  renderMenuItems() {
    return this.getMenuItems().map((item, key) => (
      <MenuItem href={item.href} label={item.label} key={key} />
    ));
  }

  render() {
    return (
      <nav>
        <ul>
          {this.renderMenuItems()}
        </ul>
      </nav>
    );
  }
}