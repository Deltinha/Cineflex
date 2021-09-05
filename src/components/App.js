import '../../src/reset.css';
import * as S from'./AppStyled.js'
import Navbar from './Navbar'
import Home from '../routes/home/Home';
import Film from '../routes/filme/Film';
import Session from '../routes/sessao/Session';

import { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';





export default function App(){

    //const [selectedFilmTitle,setSelectedFilmTitle] = useState();
    //const [selectedShowtime, setSelectedShowtime] = useState();


    //console.log(selectedShowtime)

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
            <Session />
          </Route>
        </Switch>
      </BrowserRouter>
    </S.App>
  );
}