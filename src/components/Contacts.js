import React, { Component } from 'react';
class Contacts extends Component {
  render() {
    return (
        <section className="Contacts" id="contacts">
          <div className="section-title">
            <h2>venha falar conosco</h2>
            <span>Faça agora um orçamento conosco, assim descobriremos quais obras a Metalúrgica Padre Cícero fará para você</span>
          </div>  
          <div className="container-contact">
            <div className="plus-contacts">
              <h3>Entrar em contato é muito facil!</h3>
              <p>Avenida Petrônio Portela, n° 431 Bairro Centro - Angical - Piauí - Brasil.</p>

              <ul>
                <li><strong>Edvaldo:  </strong><a href='tel:+5586995005246'>+55 86 99500-5246</a></li>
                <li><strong>Rafael:  </strong><a href='tel:+5586995713097'>+55 86 99571-3097</a></li>
                <li><strong>Email:  </strong><a href="mailto:padrecicerometalurgica@hotmail.com">padrecicerometalurgica@hotmail.com</a></li>
              </ul>


            </div> 
            <div className="form-contacts">
              <form action="" className="box-form">
                <input type="text" className="inputText" placeholder='Nome e sobrenome'/>
                <input type="text" className="inputText" placeholder='Telefone'/>
                <input type="text" className="inputText" placeholder='Assunto'/>                
                <textarea placeholder='...'></textarea>
                <button className="btnForm">Enviar</button>
              </form>
            </div>
          </div>
        </section>
    );
  }
}

export default Contacts;