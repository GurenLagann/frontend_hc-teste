import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import procedureForm from './pages/procedureForm'

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/procedureForm" component={procedureForm} />
      </Switch>
    </BrowserRouter>
  );
}
