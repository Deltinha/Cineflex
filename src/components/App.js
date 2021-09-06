import '../../src/reset.css';
import * as S from'./AppStyled.js'
import Navbar from './Navbar'
import Home from '../routes/home/Home';
import Film from '../routes/filme/Film';
import Session from '../routes/sessao/Session';

import { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Success from '../routes/sucesso/Success';





export default function App(){

    const reservationDetails = {
      title: '',
	    date: '',
	    time: '',
	    buyerName: '',
	    cpf: '',
	    seats: []
    }

  return (
    <S.App>
      <BrowserRouter>
        <Navbar />
        
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/filme/:filmID' exact>
            <Film />
          </Route>

          <Route path='/sessao/:sessionID' exact>
            <Session 
            reservationDetails={reservationDetails}/>
          </Route>

          <Route path='/sucesso' exact>
            <Success
            reservationDetails={reservationDetails} />
          </Route>
        </Switch>
      </BrowserRouter>
    </S.App>
  );
}