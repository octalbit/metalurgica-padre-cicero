import React, { Component } from 'react';
import Navbar from './Navbar';
import ArrowUp from '../assets/arrow_carrot-up.png'
import ArrowDown from '../assets/arrow_carrot-down.png'
class Header extends Component {
  render() {
    return (
        <header className="wrapper">
          <Navbar />
          <section className="hero-box">
            <h1>a melhor metalúrgica 
              do medio parnaiba</h1>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <a href="#contacts" className="btnOrcamento">Solicitar Orçamento</a> 
            <div className="box-btn-slide">
              <a href="#" className="btnOne"><img src={ArrowUp} /></a>
              <a href="#" className="btnTwo"><img src={ArrowDown} /></a>
            </div>      
          </section>
        </header>
    );
  }
}

export default Header;