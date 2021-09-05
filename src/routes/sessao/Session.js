import { SectionHeader } from "../../components/shared/SectionHeader";

import Screen from "./Screen";
import SeatSelection from "./SeatSelection";
import SeatLegend from "./SeatLegend";
import MakeReservationsForm from "./MakeReservationsForm";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import { axiosCineflexAPI } from "../../CineflexAPI";
import SelectedFilmFooter from "../../components/shared/SelectedFilmFooter";

export default function Session(){
    const selectedSessionID = useParams().sessionID;

    const [seatsData, setseatsData] = useState([]);

    useEffect((()=>{
        const promise = axiosCineflexAPI.get(`/showtimes/${selectedSessionID}/seats`);

        promise.then((res)=>{
            setseatsData(res.data);
        });
    }),[]);

    //console.log(seatsData)
    
    if (typeof(seatsData.movie) !== 'undefined') {
        return (
            <>
            <section>
                <SectionHeader>Selecione os assentos</SectionHeader>
                <Screen>TELA</Screen>

                <SeatSelection
                seats={seatsData.seats}/>

                <SeatLegend />
                <MakeReservationsForm />
            </section>
    
            <SelectedFilmFooter
            filmTitle={seatsData.movie.title}
            img={seatsData.movie.posterURL}
            weekday={seatsData.day.weekday}
            time={seatsData.name}/>
            </>
        );    
    }
    return (
        <>
        </>
    );
    
    
}