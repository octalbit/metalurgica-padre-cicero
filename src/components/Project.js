import React, { Component } from 'react';
import project1 from '../assets/img.jpg'
import project2 from '../assets/img2.png'
import project3 from '../assets/img3.png'
import project4 from '../assets/img4.png'
import project5 from '../assets/img4.jpg';
import project6 from '../assets/img6.jpg';
import project7 from '../assets/img5.jpg';
import project8 from '../assets/img8.jpeg';
import project9 from '../assets/img9.jpeg';
import project10 from '../assets/img10.jpeg';
import project11 from '../assets/img11.jpeg';
import project12 from '../assets/img12.jpeg';

import tes from '../assets/tes.png'
class Project extends Component {
  render() {
    return (
        <section className="Projects" id="projects">
          <div className="section-title">
            <h2>Conheça nossos projetos</h2>
            <span>Confira abaixo os projetos que a Metalúrgica Padre Cícero faz</span>
          </div>  
          <div className="container-projects">
            <ul className="menu-projects">
              <li><p href="#">ver Todos</p></li>
              <li><p href="#">portas e portões</p></li>
              <li><p href="#">coberturas metálicas</p></li>
              <li><p href="#">coberturas ecológicas</p></li>
            </ul>
            <div className="main-project">
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project1} alt='1'/>
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project2} alt='2'/>
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project3} alt='3'/>
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project5} alt='4'/>
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project6} alt='5'/>
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project4} alt='6'/>
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project7} alt='7'/>
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project8} alt='8'/>
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project9} alt='9'/>
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project10} alt='10'/>
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project11} alt='11'/>
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project12} alt='1'/>
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
            </div>
            <blockquote className="assessments">
              <span><img src={tes} alt=''/></span>
              <p>
              Realmente uma das melhores Metalúrgicas do Médio Parnaíba, além do material que é de ótima qualidade, o atendimento é rápido e eficaz. Gostei muito! 
              </p>
              <cite>Rafael Souza</cite>
            </blockquote>
          </div>
        </section>
    );
  }
}

export default Project;