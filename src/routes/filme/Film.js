import { SectionHeader } from '../../components/shared/SectionHeader';
import DaysAndSessions from "./DaysAndSessions";
import SelectedFilmFooter from '../../components/shared/SelectedFilmFooter';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { axiosCineflexAPI } from '../../CineflexAPI';
import { useParams } from 'react-router';

export default function Film(){
    const selectedFilmID = useParams().filmID;
    const [filmSessions, setFilmSessions] = useState([]);
    
    useEffect((()=>{
        
        const promise = axiosCineflexAPI.get(`/movies/${selectedFilmID}/showtimes`);
         
        promise.then((res)=>{
            setFilmSessions(res.data)
        });
    }),[]);

    return (
        <>
            <section>
                <SectionHeader>Selecione o horário</SectionHeader>

                <DaysAndSessions 
                days={filmSessions.days}/>

            </section>
            
            <SelectedFilmFooter 
            filmTitle={filmSessions.title}
            img={filmSessions.posterURL}/>
        </>
    );
}