import React, { StrictMode, type ReactNode, type ErrorInfo } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Safeguard against browser extensions (Google Translate, Grammarly, auto-translators, etc.)
// mutating DOM text nodes or elements directly, which causes React reconciliation to crash with:
// "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node."
if (typeof window !== 'undefined' && typeof Node === 'function' && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    if (child && child.parentNode !== this) {
      if (console && typeof console.warn === 'function') {
        console.warn('DOM safeguard: Prevented removeChild on non-child node:', child);
      }
      return child;
    }
    return originalRemoveChild.call(this, child) as T;
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (console && typeof console.warn === 'function') {
        console.warn('DOM safeguard: Prevented insertBefore on non-child reference node:', referenceNode);
      }
      return newNode;
    }
    return originalInsertBefore.call(this, newNode, referenceNode) as T;
  };
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class GlobalErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Deliverable Engine runtime error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const isDomMutationError =
        this.state.error?.message?.includes('removeChild') ||
        this.state.error?.message?.includes('not a child of this node') ||
        this.state.error?.message?.includes('insertBefore');

      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          backgroundColor: '#0B101B',
          color: '#f8fafc',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '560px',
            backgroundColor: '#161F30',
            border: '1px solid #2A364F',
            borderRadius: '16px',
            padding: '32px'
          }}>
            <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc', marginBottom: '12px' }}>
              Deliverable Engine
            </h1>
            <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px', lineHeight: 1.6 }}>
              {isDomMutationError
                ? "Une extension de traduction automatique (comme Google Traduction) a modifié le contenu de la page. Cliquez ci-dessous pour recharger."
                : "Une erreur inattendue est survenue lors du chargement de l'application."}
            </p>
            {this.state.error && (
              <pre style={{
                textAlign: 'left',
                padding: '12px',
                borderRadius: '8px',
                backgroundColor: '#0B101B',
                color: '#f87171',
                fontSize: '12px',
                overflowX: 'auto',
                marginBottom: '20px'
              }}>
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '10px 24px',
                backgroundColor: '#B8935A',
                color: '#0B101B',
                border: 'none',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

let hasMounted = false;
function mountApp() {
  if (hasMounted) return;
  const rootElement = document.getElementById('root');
  if (!rootElement) return;

  hasMounted = true;
  createRoot(rootElement).render(
    <StrictMode>
      <GlobalErrorBoundary>
        <App />
      </GlobalErrorBoundary>
    </StrictMode>,
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}

