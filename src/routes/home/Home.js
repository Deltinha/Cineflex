import FilmList from "./FilmList";
import { SectionHeader } from "../../components/shared/SectionHeader";
import * as S from './HomeStyled'
import { axiosCineflexAPI } from '../../CineflexAPI';
import { useState, useEffect } from "react";

export default function Home(){
    const [filmList,setFilmList] = useState([]);

    useEffect(()=>{
        const promise = axiosCineflexAPI.get('/movies');

        promise.then((res)=>{setFilmList(res.data);
        });
    },[]);
    
    return (
        <S.Home>
            <SectionHeader>Selecione o filme</SectionHeader>

            <FilmList
            filmList={filmList}/>
        </S.Home>
    );
}