import '../../src/reset.css';
import * as S from'./AppStyled.js'
import Header from './Navbar'
import Home from '../routes/home/Home';
import Film from '../routes/filme/Film';



import { useState, useEffect } from "react";
import axios from "axios";



export default function App(){

  const axiosCineflexAPI = axios.create({
    baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/'
});


    const [filmList,setFilmList] = useState([]);
    const [selectedFilmID,setSelectedFilmID] = useState(0);

    useEffect(()=>{
        const promise = axiosCineflexAPI.get('/movies');

        promise.then((res)=>{setFilmList(res.data);
        });
    },[]);

  return (
    <S.App>
      <Header />

      <Home 
      filmList={filmList}
      setSelectedFilmID={setSelectedFilmID}/>

      {/* <Film /> */}

      
    </S.App>
  );
}