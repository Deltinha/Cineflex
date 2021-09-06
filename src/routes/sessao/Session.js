import { SectionHeader } from "../../components/shared/SectionHeader";

import Screen from "./Screen";
import SeatSelection from "./SeatSelection";
import SeatLegend from "./SeatLegend";
import MakeReservationsForm from "./MakeReservationsForm";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import { axiosCineflexAPI } from "../../CineflexAPI";
import SelectedFilmFooter from "../../components/shared/SelectedFilmFooter";

function updateReservationDetails(reservationDetails, title, date, time){
    reservationDetails.title = title;
    reservationDetails.date = date;
    reservationDetails.time = time;
    return reservationDetails;
}

export default function Session({reservationDetails}){
    const selectedSessionID = useParams().sessionID;

    const [seatsData, setSeatsData] = useState([]);

    useEffect((()=>{
        const promise = axiosCineflexAPI.get(`/showtimes/${selectedSessionID}/seats`);

        promise.then((res)=>{
            setSeatsData(res.data);
        });
    }),[]);
    if (typeof(seatsData.movie) !== 'undefined') {

        reservationDetails = updateReservationDetails(reservationDetails, seatsData.movie.title, seatsData.day.date, seatsData.name);
        
        return (
            <>
            <section>
                <SectionHeader>Selecione os assentos</SectionHeader>
                <Screen>TELA</Screen>

                <SeatSelection
                seats={seatsData.seats}
                reservationDetails={reservationDetails}
                />

                <SeatLegend />
                <MakeReservationsForm
                reservationDetails={reservationDetails}/>
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