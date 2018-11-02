import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         Hello world! 
        </header>

        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
