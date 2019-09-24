import React, {Component} from 'react';
import ErrorStackParser from 'error-stack-parser';

// @link https://pl.reactjs.org/docs/error-boundaries.html

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
      console.error({error, errorInfo});
      console.error(ErrorStackParser.parse(error));
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
