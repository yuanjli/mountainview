import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px", background: "lightblue" }}>
        <header className="App-header">
         
        </header>

        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
