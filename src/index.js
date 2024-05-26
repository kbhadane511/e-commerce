import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { ShopContextProvider } from './Context/ShopContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ShopContextProvider>
      <App />
      </ShopContextProvider>
      
    </React.StrictMode>
);
