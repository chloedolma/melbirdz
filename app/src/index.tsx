import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { RandomBirdContextProvider } from './contexts';
import { ErrorBoundary } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary>
    <React.StrictMode>
      <RandomBirdContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RandomBirdContextProvider>
    </React.StrictMode>
  </ErrorBoundary>
);
