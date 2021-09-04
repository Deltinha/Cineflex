import '../../src/reset.css';
import * as S from'./AppStyled.js'
import Navbar from './Navbar'
import Home from '../routes/home/Home';
import Film from '../routes/filme/Film';

import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { axiosCineflexAPI } from '../CineflexAPI';


export default function App(){


    const [filmList,setFilmList] = useState([]);
    const [selectedFilm,setSelectedFilm] = useState({});

    useEffect(()=>{
        const promise = axiosCineflexAPI.get('/movies');

        promise.then((res)=>{setFilmList(res.data);
        });
    },[]);

  return (
    <S.App>
      <BrowserRouter>
        <Navbar />
        
        <Switch>
          <Route path='/' exact>
            <Home 
            filmList={filmList}
            setSelectedFilm={setSelectedFilm}/>
          </Route>
          <Route path='/filme/:idFilme' exact>
            <Film
            selectedFilm={selectedFilm}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </S.App>
  );
}