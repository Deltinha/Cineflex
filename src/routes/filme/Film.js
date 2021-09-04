import { SectionHeader } from '../../components/shared/SectionHeader';
import DaysAndSessions from "./DaysAndSessions";
import SelectedFilmFooter from '../../components/shared/SelectedFilmFooter';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { axiosCineflexAPI } from '../../CineflexAPI';


export default function Film({selectedFilm}){
    const [filmSessions, setFilmSessions] = useState({});
console.log(filmSessions)
     useEffect((()=>{
          const promise = axiosCineflexAPI.get(`/movies/${selectedFilm}/showtimes`);
         
          promise.then((res)=>{setFilmSessions(res.data)});
    }),[])
    
    return (
        <>
            <section>
                <SectionHeader>Selecione o horário</SectionHeader>

                <DaysAndSessions />

            </section>
            
            {/* <SelectedFilmFooter /> */}
        </>
    );
}