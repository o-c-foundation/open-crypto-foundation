import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by boundary:', error);
    console.error('Component stack:', errorInfo.componentStack);
  }

  resetError = (): void => {
    this.setState({ hasError: false, error: null });
  }

  // Check if the error is specifically the auth destructuring error
  isAuthError(): boolean {
    return this.state.error?.message?.includes("Cannot destructure property 'auth'") || false;
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // For auth-specific error, attempt recovery and show minimal error
      if (this.isAuthError()) {
        return (
          <div className="min-h-screen bg-dark flex items-center justify-center">
            <div className="bg-dark-card border border-primary/20 rounded-lg p-6 max-w-xl mx-auto text-center">
              <h2 className="text-xl font-semibold text-white mb-4">Connection Issue</h2>
              <p className="text-light-muted mb-4">
                There was an issue connecting to the wallet services. Please try refreshing the page.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light transition-colors mr-3"
                >
                  Refresh Page
                </button>
                <button
                  onClick={this.resetError}
                  className="px-4 py-2 bg-dark-light/30 text-white rounded-md hover:bg-dark-light/50 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        );
      }

      // For other errors, show a generic error UI
      return (
        <div className="min-h-screen bg-dark flex items-center justify-center">
          <div className="bg-dark-card border border-red-500/30 rounded-lg p-6 max-w-xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-4">Something went wrong</h2>
            <div className="bg-red-900/20 border border-red-900/30 rounded p-4 mb-4 text-red-400 text-sm overflow-auto">
              {this.state.error?.toString()}
            </div>
            <p className="text-light-muted mb-6">
              Try refreshing the page or going back to the home page.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-light transition-colors"
              >
                Refresh Page
              </button>
              <a
                href="/"
                className="px-4 py-2 bg-dark-light/30 text-white rounded-md hover:bg-dark-light/50 transition-colors"
              >
                Go to Home Page
              </a>
              <button
                onClick={this.resetError}
                className="px-4 py-2 bg-dark-light/30 text-white rounded-md hover:bg-dark-light/50 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 