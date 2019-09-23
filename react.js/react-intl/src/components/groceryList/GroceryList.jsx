import React, { Component } from 'react';
import ListItem from '../listItem/ListItem';
import {connect} from 'react-redux';
import NewShoppingListItem from '../newShoppingListItem/NewShoppingListItem';
import {FormattedMessage, FormattedDate} from 'react-intl';

class GroceryList extends Component {
  render() {
    return (
      <>
        <h1>
            <FormattedMessage id="app.title" />
            {', '}
            <FormattedDate
                value={new Date()}
                year="numeric"
                month="long"
                day="2-digit"
            />
        </h1>
        <NewShoppingListItem />
        <ul>
            {this.props.shoppingList.map((item, i) => <ListItem key={i} quantity="1">{item}</ListItem>)}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
    return {shoppingList: state.shoppingList};
};
export default connect(mapStateToProps)(GroceryList);
