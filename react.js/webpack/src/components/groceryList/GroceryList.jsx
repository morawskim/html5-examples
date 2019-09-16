import React, { Component } from 'react';
import ListItem from '../listItem/ListItem';

export default class GroceryList extends Component {
  render() {
    return (
      <ul>
        <ListItem quantity="1">Chleb</ListItem>
        <ListItem quantity="3">Pomidory</ListItem>
        <ListItem quantity="2">Mleka</ListItem>
        <ListItem quantity="4">Jajka</ListItem>
      </ul>
    );
  }
}
