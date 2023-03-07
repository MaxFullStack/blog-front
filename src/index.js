import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BlogContextProvider } from './contexts/BlogContext';
import '../src/styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </React.StrictMode>
);