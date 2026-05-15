import React from 'react';
import './App.css'; // Import the CSS styling the App component 
import MainLayout from './layout/MainLayout'; // Import MainLayout component for consistent layout

function App() {
  return (
    <MainLayout>
      <div className="App">
        <header className="App-header"></header>

        {/* Flashing Oval */}
        <div className="flashing-oval">Mobile Office</div>

        <h1 className="main-title">Stanley Bail Bonds LLC</h1>
        <div className="container">
          <div className="tagline">Locked up? We can get you out!</div>
        </div>
        <div className="info-box">
          <p>Open 24/7... Including weekends and holidays</p>
          <p>Operating in SC, NC, FL, TN, CT, LA, MS</p>
          <p>(843)-240-9240</p>
        <a href="mailto:Stanleybailbondsllc@gmail.com">Stanleybailbondsllc@gmail.com</a><br />
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
