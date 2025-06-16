import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello, Hoodad!</h1>
    <p>Welcome to the Hoodad app.</p>
    <button onClick={() => alert('Button clicked!')}>Click Me!</button>
  </React.StrictMode>
);