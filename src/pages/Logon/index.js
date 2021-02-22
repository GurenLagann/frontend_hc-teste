import React from 'react';
import {ExitToApp} from '@material-ui/icons';

import './styles.css';

export default function Logon() {
  return(
    <div className="logon-container">
      <section className="form">
        <h1>Faça o seu login</h1>
        <form>
          <input placeholder="Login"/>
          <input placeholder="Senha"/>

          <button type="submit" className="button">Entrar</button>

          <a href="/register">
            <ExitToApp  style={{ fontSize: 20 }}/>
            Esqueci Minha Senha
          </a>
        </form>
      </section>
    </div>    
  );
}