import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Featured from './components/featured';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px", background: "lightblue" }}>
        <Header />
        <Featured />
        <Footer />
      </div>
    );
  }
}

export default App;
