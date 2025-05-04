import React from 'react';

// Using any type to bypass strict TypeScript errors
class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }
  
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error
    };
  }
  
  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }
  
  resetErrorBoundary = () => {
    this.setState({
      hasError: false,
      error: null
    });
    
    if (this.props.onReset) {
      this.props.onReset();
    }
  };
  
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black p-4">
          <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-900/30 p-3 rounded-full">
                  <span className="text-red-500 text-3xl">⚠️</span>
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-2 text-center">Something went wrong</h2>
              
              <div className="mb-6">
                <p className="text-gray-300 text-center">
                  {this.state.error?.message || "An unexpected error occurred"}
                </p>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={this.resetErrorBoundary}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return this.props.children;
  }
}

export default ErrorBoundary; 