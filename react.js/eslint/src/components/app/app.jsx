import React, { Component } from 'react';

export default class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }

    decrement() {
        this.setState({count: this.state.count - 1});
    }
  render() {
    return (
        <>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <h1>Count: {this.state.count}</h1>
        </>
    );
  }
}
