import React, { Component } from 'react';
import brand from '../assets/padrecicero.png'
class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
          <div className="navinfo">
            <div className="container-navinfo">
              <span>(86) 99500-5246 / (86) 99571-3097 - padrecicerometalurgica@hotmail.com</span>
              <span>
              Siga a metalurgicapadrecicero
              <a href="#"><i className="ion-social-facebook"></i></a> 
              <a href="#"><i className="ion-social-instagram"></i></a>
              </span>
            </div>
          </div>
          <div className="subNavbar">
            <div className="container-subNavbar">
              <div className="brand">
              <img className="brand" src={brand} alt="Padre Cicero"/>
              </div>
              <ul className="menu">
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
              <div className="menu-mobile">

              </div>
            </div>
          </div>
        </nav>
    );
  }
}

export default Navbar;