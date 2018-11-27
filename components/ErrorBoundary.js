import React, {Component} from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true }, () => {
      alert(error.message);      
    });
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}


export default ErrorBoundary;