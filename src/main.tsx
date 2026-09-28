/*
  main.tsx — Application entry point
  -----------------------------------
  This is the very first file that runs.
  It mounts the React app into the <div id="root"> in index.html.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';   // global styles (CSS variables, reset, typography)

// React 18 way to render the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  // StrictMode helps catch common mistakes during development
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
