
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from "./pages/LandingPage";

// Components
import Header from "./components/header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

if ('serviceWorker' in navigator) {
  // Wait for the 'load' event to not block other work
  window.addEventListener('load', async () => {
    // Try to register the service worker.
    try {
      // Capture the registration for later use, if needed
      let reg;

      // Use ES Module version of our Service Worker in development
      if (import.meta.env?.DEV) {
        reg = await navigator.serviceWorker.register('/service-worker.js', {
          type: 'module',
        });
      } else {
        // In production, use the normal service worker registration
        reg = await navigator.serviceWorker.register('/service-worker.js');
      }

      console.log('Service worker registered! 😎', reg);
    } catch (err) {
      console.log('😥 Service worker registration failed: ', err);
    }
  });
}

export default App;

