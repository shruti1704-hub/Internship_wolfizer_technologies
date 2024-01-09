// import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// get reference to the div with Id root
const el=document.getElementById('root');

// tell react to take control of that element
const root=ReactDOM.createRoot(el);

// show component on screen
root.render(<App />);

