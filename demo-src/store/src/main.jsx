import './app.css';
import './globals';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

document.title = 'Pusat Kain Kafan - Demo Toko';
createRoot(document.getElementById('app')).render(<App />);
