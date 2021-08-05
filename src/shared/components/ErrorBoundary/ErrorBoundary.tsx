import React, { Component, ReactNode } from 'react';

import {
  ErrorBoundaryProps as Props,
  ErrorBoundaryState as State,
} from './ErrorBoundary.types';

export class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <span>Sorry, something went wrong...</span> : children;
  }
}
