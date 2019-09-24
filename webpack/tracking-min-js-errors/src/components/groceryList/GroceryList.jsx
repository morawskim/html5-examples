import React, { Component } from 'react';
import ListItem from '../listItem/ListItem';
import {connect} from 'react-redux';
import NewShoppingListItem from '../newShoppingListItem/NewShoppingListItem';
import ErrorBoundary from '../errorBoundary/errorBoundary';

class GroceryList extends Component {
  render() {
    return (
      <>
        <h1>Shopping list</h1>
        <ErrorBoundary>
            <NewShoppingListItem />
            <ul>
                {this.props.shoppingList.map((item, i) => <ListItem key={i} quantity="1">{item}</ListItem>)}
            </ul>
        </ErrorBoundary>
      </>
    );
  }
}

const mapStateToProps = state => {
    return {shoppingList: state.shoppingList};
};
export default connect(mapStateToProps)(GroceryList);
