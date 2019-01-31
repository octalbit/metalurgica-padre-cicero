import React, { Component } from 'react';
import portas from '../assets/portas.png'
import portoes from '../assets/portoes.png'
import telhado from '../assets/telhados.png'
class Servicos extends Component {
  render() {
    return (
        <section className="Sevices" id="services">
          <div className="section-title">
            <h2>nossos serviços</h2>
            <span>A Metalúrgica Padre Cícero tem os mais variados serviços em estruturas metalicas</span>
          </div>  
          <div className="container-services">
            <article className="box-services">
              <div className="item-service">
                <img src={portas} />
                <h3>portas e janelas</h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                </p>
              </div>
              <div className="item-service">
                <img src={portoes} />
                <h3>portões e grades</h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                </p>
              </div>
              <div className="item-service">
                <img src={telhado} />
                <h3>coberturas metalicas</h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                </p>
              </div>
            </article>
          </div>
        </section>
    );
  }
}

export default Servicos;