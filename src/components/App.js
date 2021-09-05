import '../../src/reset.css';
import * as S from'./AppStyled.js'
import Navbar from './Navbar'
import Home from '../routes/home/Home';
import Film from '../routes/filme/Film';
import Session from '../routes/sessao/Session';

import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';





export default function App(){

    const [selectedFilmID,setSelectedFilmID] = useState({});
    const [selectedSessionID, setSelectedSessionID] = useState(0);

  return (
    <S.App>
      <BrowserRouter>
        <Navbar />
        
        <Switch>
          <Route path='/' exact>
            <Home 
            setSelectedFilmID={setSelectedFilmID}/>
          </Route>
          <Route path='/filme/:idFilme' exact>
            <Film
            selectedFilmID={29}
            setSelectedSessionID={setSelectedSessionID}
            />
          </Route>
          <Route path='/sessao/:idSessao' exact>
            <Session />
          </Route>
        </Switch>
      </BrowserRouter>
    </S.App>
  );
}