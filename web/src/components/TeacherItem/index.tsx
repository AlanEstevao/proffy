import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
      <img 
        src="https://avatars0.githubusercontent.com/u/22716824?s=460&u=7c85cc1f475848e59d978aeb7cfebe356835c590&v=4" 
        alt="Alan Estevão"
      />
      <div>
      <strong>Alan Estevão</strong>
      <span>Geografia</span>
      </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        <br />
        Duis pellentesque, lectus id tristique dignissim, dolor 
        enim efficitur nunc, at varius.
        Duis pellentesque, lectus id tristique dignissim, dolor 
        enim efficitur nunc, at varius.
        <br />
        <br />
        
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;