import React, { Component } from 'react';
import Header from  './components/Header';
import Servicos from './components/Servicos'
import About from './components/About'
import Project from './components/Project'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Main from './style/main.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Servicos />
        <About />
        <Project />
        <Contacts />
        <Footer />
      </div>
    );
  }
}

export default App;
