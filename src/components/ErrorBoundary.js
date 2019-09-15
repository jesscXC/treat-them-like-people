import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constuctor() {
    super();
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error has occurred! :(</h1>;
    }
  }
}

export default ErrorBoundary;
