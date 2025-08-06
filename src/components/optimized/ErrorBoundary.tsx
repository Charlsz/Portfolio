import React, { Component, ErrorInfo, ReactNode } from 'react';
import Button from './Button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

// Error Boundary component following Material Design principles
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-full p-4 mb-6">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Something went wrong
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
          </p>

          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left max-w-2xl">
              <summary className="cursor-pointer font-medium text-gray-900 dark:text-white mb-2">
                Error Details (Development)
              </summary>
              <pre className="text-sm text-red-600 dark:text-red-400 whitespace-pre-wrap">
                {this.state.error.message}
                {'\n'}
                {this.state.error.stack}
              </pre>
            </details>
          )}

          <div className="flex gap-4">
            <Button
              variant="filled"
              color="primary"
              icon={RefreshCw}
              onClick={this.handleRetry}
            >
              Try Again
            </Button>
            
            <Button
              variant="outlined"
              color="surface"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;