import React from 'react';
import ReactDOM from 'react-dom';
import { useFormki } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const validationSchema = yup.object({
});

const WithMaterialUI = () => {
  const formik = useFormki({});

  return(
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="nome"
          nome="nome"
          label="Nome "
          onChange={formik.handleSubmit}
        />
        <div id="radio-group">Estagio</div>
        <div role="group" aria-labelledby="radio-group">
          <label>
          < Field type="radio" name="esatgio" value="One" />
            PS
          </label>
          <label>
          < Field type="radio" name="esatgio" value="Two" />
            PS3
          </label>
          <label>
          < Field type="radio" name="esatgio" value="Three" />
            PS5
          </label>
          <label>
          < Field type="radio" name="esatgio" value="Four" />
            Cirurgia Geral
          </label>          
        </div>
        <div id="radio-group">Locais</div>
        <div role="group" aria-labelledby="radio-group">
          <label>
          < Field type="radio" name="locais" value="One" />
            HC
          </label>
          <label>
          < Field type="radio" name="locais" value="Two" />
            HU
          </label>
          <label>
          < Field type="radio" name="locais" value="Three" />
            Ambulatório
          </label>
          <label>
          < Field type="radio" name="locais" value="Four" />
            Técnica Cirúrgica e Anatomia
          </label>
          <label>
          < Field type="radio" name="locais" value="Five" />
            ICESP
          </label>  
          <label>
          < Field type="radio" name="locais" value="Six" />
            Hospital Barueri
          </label>            
        </div>
        <TextField
          fullWidth
          id="data"
          nome="data"
          label="Data do Procedimento"
          onChange={formik.handleSubmit}
        /> 
        <TextField
          fullWidth
          id="código"
          nome="código"
          label="RGHC"
          onChange={formik.handleSubmit}
        /> 
        <div id="checkbox-group">Escolha:</div>
        <div role="group" aria-labelledby="checkbox-group">
          <label>
            <Field type="checkbox" name="Escolha" value="One" />
            Procedimento Eletivo
          </label>
          <label>
            <Field type="checkbox" name="Escolha" value="Two" />
            Procedimento de Emergência
          </label>
        </div>
        <div id="checkbox-group">Tratamento:</div>
        <div role="group" aria-labelledby="checkbox-group">
          <label>
            <Field type="checkbox" name="Tratamento" value="One" />
            Conservador
          </label>
          <label>
            <Field type="checkbox" name="Tratamento" value="Two" />
            Cirurgico
          </label>
        </div>
        <TextField
          fullWidth
          id="cid10"
          nome="cid10"
          label="CID10: "
          onChange={formik.handleSubmit}
        /> 
        <TextField
          fullWidth
          id="procedimento"
          nome="procedimento"
          label="Procedimento(TUSS)"
          onChange={formik.handleSubmit}
        />
        <div id="checkbox-group">Cirurgia:</div>
        <div role="group" aria-labelledby="checkbox-group">
          <label>
            <Field type="checkbox" name="Cirurgia" value="One" />
            Convencional
          </label>
          <label>
            <Field type="checkbox" name="Cirurgia" value="Two" />
            Laparoscópica
          </label>
        </div>
        <div id="checkbox-group">Posição:</div>
        <div role="group" aria-labelledby="checkbox-group">
          <label>
            <Field type="checkbox" name="posicao" value="One" />
            Cirurgião
          </label>
          <label>
            <Field type="checkbox" name="posicao" value="Two" />
            1º Assistente
          </label>
          <label>
            <Field type="checkbox" name="posicao" value="Three" />
            2º Assistente
          </label>
          <label>
            <Field type="checkbox" name="posicao" value="Four" />
            Instrumentador
          </label>
          <label>
            <Field type="checkbox" name="posicao" value="Five" />
            Camera
          </label>
          <label>
            <Field type="checkbox" name="posicao" value="Six" />
            Observador
          </label>
        </div>     
      </form>
    </div>
  )
}
