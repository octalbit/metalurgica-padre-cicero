import React, { Component } from 'react';
import project1 from '../assets/img.png'
import project2 from '../assets/img2.png'
import project3 from '../assets/img3.png'
import project4 from '../assets/img4.png'
import tes from '../assets/tes.png'
class Project extends Component {
  render() {
    return (
        <section className="Projects" id="projects">
          <div className="section-title">
            <h2>Conheça nossos projetos</h2>
            <span>Confira abaixo os projetos realizados com as peças de metal fabricadas pela Metalúrgica Padre Cícero</span>
          </div>  
          <div className="container-projects">
            <ul className="menu-projects">
              <li><a href="#">ver Todos</a></li>
              <li><a href="#">portas e portões</a></li>
              <li><a href="#">coberturas metálicas</a></li>
              <li><a href="#">coberturas ecológicas</a></li>
            </ul>
            <div className="main-project">
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project1} />
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project1} />
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project1} />
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project1} />
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project1} />
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project1} />
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project1} />
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
              <div className="boxProject">
                <div className="imgBox">
                  <img className="imgItem" src={project1} />
                </div>
                <div className="imgContent">
                  <h4>Lorem Ipsun</h4>
                </div>
              </div>
            </div>
            <blockquote className="assessments">
              <span><img src={tes}/></span>
              <p>
              Realmente uma das melhores Metalúrgicas do médio Parnaíba, além do material que é de ótima qualidade, o atendimento é rápido e eficaz. Gostei muito! 
              </p>
              <cite>Rafael Souza</cite>
            </blockquote>
          </div>
        </section>
    );
  }
}

export default Project;