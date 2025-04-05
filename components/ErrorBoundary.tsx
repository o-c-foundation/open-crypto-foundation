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
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 text-white">
          <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 max-w-2xl w-full">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <div className="bg-black/30 p-4 rounded mb-4 overflow-auto">
              <pre className="text-red-400 text-sm whitespace-pre-wrap break-words">
                {this.state.error?.toString()}
              </pre>
            </div>
            <p className="mb-4">
              Try refreshing the page or going back to the home page.
            </p>
            <button 
              onClick={() => window.location.href = '/'} 
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
            >
              Go to Home Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 