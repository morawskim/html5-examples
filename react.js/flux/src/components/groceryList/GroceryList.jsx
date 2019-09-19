import React, { Component } from 'react';
import ListItem from '../listItem/ListItem';

export default class GroceryList extends Component {
  render() {
      const list = this.props.list.map((item, i) => <ListItem key={i} quantity={item.quantity}>{item.item}</ListItem>);
    return (
      <ul>
          {list}
      </ul>
    );
  }
}
