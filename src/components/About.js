import React, { Component } from 'react';
import AboutImg1 from '../assets/019-welder-8.png'
import AboutImg2 from '../assets/007-welder-17.png'
import AboutImg3 from '../assets/005-welder-19.png'
class About extends Component {
  render() {
    return (
        <section className="About" id="about">
          <div className="section-title section-title-2">
            <h2>sobre nossa empresa</h2>
            <span>Conheça agora um pouco da nossa historia e do nosso comprometimento com você</span>
          </div>  
          <div className="container-about">
            <div className="box-icone-about">
              <img src={AboutImg3} />
              <img src={AboutImg1} />
              <img src={AboutImg2} />
            </div>
            <div className="box-text">
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <article className="box-subAbout">
            <div className="container-subAbout">
                <div className="item-subAbout">
                  <h3>Missão</h3>
                  <p>
                  Prestar serviços metalúrgicos destinados a atender às necessidades de nossos clientes com a melhor qualidade.
                  </p>
                </div>
                <div className="item-subAbout">
                  <h3>Visão</h3>
                  <p>
                  Ser uma empresa líder no que faz, reconhecidamente sólido e confiável, garantindo a satisfação dos clientes.
                  </p>
                </div>
                <div className="item-subAbout">
                  <h3>Valores</h3>
                  <p>
                  Nossos principais valores são compromisso, ética, dedicação, confiabilidade e inovação
                  </p>
                </div>
              </div>
            </article>
        </section>
    );
  }
}

export default About;