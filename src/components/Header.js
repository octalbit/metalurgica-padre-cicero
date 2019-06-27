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
            <h1>metalúrgica padre cícero</h1>
            <span>Qualidade e Pontualidade</span>
            <a href="#contacts" className="btnOrcamento">Solicitar Orçamento</a> 
            <div className="box-btn-slide">
              <a href="#" className="btnOne"><img src={ArrowUp} /></a>
              <a href="#services" className="btnTwo"><img src={ArrowDown} /></a>
            </div>      
          </section>
        </header>
    );
  }
}

export default Header;