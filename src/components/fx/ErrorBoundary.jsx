import { Component } from "react";

// Aísla un fallo de render (p. ej. un lienzo WebGL que no arranca en un móvil)
// para que no desmonte toda la página y la deje en negro.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error(error, info?.componentStack);
  }

  render() {
    const { error } = this.state;
    const { fallback = null, children } = this.props;
    if (!error) return children;
    return typeof fallback === "function" ? fallback(error) : fallback;
  }
}

export default ErrorBoundary;
