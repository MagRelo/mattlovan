import React from 'react';
import { createRoot } from 'react-dom/client';

// CSS
import './css/index.css';
import './css/skew.css';
import './css/App.css';

// Fonts
import './fonts/Roboto/roboto.css';

import App from './App';

const container = document.getElementById('root');
if (!container) {
  console.error('Root element not found');
  throw new Error('Root element not found');
}

try {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Error rendering app:', error);
}

