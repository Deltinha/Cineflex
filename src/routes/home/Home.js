import FilmList from "./FilmList";
import { SectionHeader } from "../../components/shared/SectionHeader";
import './Home.css';
import { axiosCineflexAPI } from '../../CineflexAPI';
import { useState, useEffect } from "react";

export default function Home({setSelectedFilmID}){
    const [filmList,setFilmList] = useState([]);

    useEffect(()=>{
        const promise = axiosCineflexAPI.get('/movies');

        promise.then((res)=>{setFilmList(res.data);
        });
    },[]);
    
    return (
        <section className='home'>
            <SectionHeader>Selecione o filme</SectionHeader>

            <FilmList
            filmList={filmList}
            setSelectedFilmID={setSelectedFilmID}/>
        </section>
    );
}