import React from 'react';
import ReactDOM from 'react-dom/client';
import '@ui5/webcomponents/dist/Button.js';

// This is just a placeholder for webpack
// The actual app is rendered by Next.js
const root = document.getElementById('root');
if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <div>UI5 React Components</div>
        </React.StrictMode>
    );
} 