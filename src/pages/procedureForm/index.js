import React from 'react';

import './styles.css';

export default function procedureForm(){
  return(
    <div className="form-container">
      <div className="content">
        <form action="submit">
          <h1>Procedimento</h1>

          <fieldset>
            <legend>
              <h2>Dados do Paciente</h2>
            </legend>
            <div className="field">
              <label for="name" >Nome</label>
              <input name="name"/>
            </div>
            <div className="field-group">
              <div className="field">
                <label for="internship">Estágio</label>
                <select name="internship">
                  <option value="">Selecione</option>
                  <option value="">Pronto Socorro</option>
                  <option value="">PS3</option>
                  <option value="">PS5</option>
                  <option value="">Cirurgia Geral</option>
                </select>
              </div>
              <div className="field">
                <label for="local">Local</label>
                <select name="local">
                  <option value="">Selecione</option>
                  <option value="">Hospital das Clinicas</option>
                  <option value="">Hospital Universitário</option>
                  <option value="">Ambulatório</option>
                  <option value="">Técnica Cirurgia e Anatomia</option>
                  <option value="">Hostial Barueri</option>
                  <option value="">ICESP</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label for="procedureDate">Data do Procedimento</label>
              <input type="date" name="procedureDate" />
            </div>     
            <div className="field">
              <label for="rghc">Identificação do Paciente</label>
              <input name="rghc"/>
              <label>RGHC ou Indentificação Generica em caso do animal ou cadaver</label>
            </div>            
          </fieldset>

          <fieldset>
            <legend>
              <h2>Dados do Procedimento</h2>
            </legend>
            <div className="field-group">
              <div className="field">
                <label for="procedure">Escolha o Procedimento</label>
                <select name="procedure">
                  <option value="">Selecione</option>
                  <option value="">Eletivo</option>
                  <option value="">Emergência</option>
                </select>
              </div>
              <div className="field">
                <label for="emergencia">Escolha o tipo de Emergência</label>
                <select name="emrgencia">
                  <option value="">Selecione</option>
                  <option value="">Traumática</option>
                  <option value="">Não Traumática</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label for="treatment">Tipo de Tratamento</label>
                <select name="treatment">
                  <option value="">Selecione</option>
                  <option value="">Conservador</option>
                  <option value="">Cirúrgico</option>
                </select>
            </div>        
            
            <div className="field">
              <label htmlFor="cid10">CID 10</label>
              <input name="cid10"/>
            </div>
            <div className="field">
              <label htmlFor="procedure">Procedimento</label>
              <input name="procedureDate"/>
              <label>Tabla TUSS</label>
            </div>
            <div className="field">
              <label for="position">Posição na Sala Cirurgica</label>
                <select name="position">
                  <option value="">Selecione</option>
                  <option value="">Cirurgião</option>
                  <option value="">1º Assistente</option>
                  <option value="">2º Assistente</option>
                  <option value="">Instrumentação</option>
                  <option value="">Observador</option>
                </select>                  
            </div>
          </fieldset>
          
          <button type="submit" >Enviar</button>
          
        </form>
      </div>
    </div>
  )
}