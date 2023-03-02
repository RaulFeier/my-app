import logo from '../aleph-ghosts.png';
import './App.css';
import Footer from '../eep/Footer';
import Chart_Temperatura from '../charts/chart-temperatura/Chart';
import Chart_Umiditate from '../charts/chart-umiditate/Chart_umi';
import Chart_viteza_vant from '../charts/chart-viteza_vant/Chart_viteza_vant';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Weather Station</h1>
      <Chart_Temperatura />
      <Chart_Umiditate />
      <Chart_viteza_vant />
      <Footer />
    </div>
  );
}

export default App;
