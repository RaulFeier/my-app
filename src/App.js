import logo from './aleph-ghosts.png';
import './App.css';
import Footer from './eep/Footer';
import Chart_Temperatura from './chart-temperatura/Chart';
import Chart_Umiditate from './chart-umiditate/Chart';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h>Weather Station</h>
      <Footer />
      <Chart_Temperatura />
    </div>
  );
}

export default App;
