import { useState } from 'react';
import * as S from './SeatStyled';

export default function Seat({seat, reservationDetails}){
    
    const [isSeatSelected, setIsSeatSelected] = useState(false);

    function setReservedSeat (id, name){
        if (reservationDetails.seats.some(reservedSeat => reservedSeat.id === id)) {
          reservationDetails.seats = reservationDetails.seats.filter((reservedSeat)=>(reservedSeat.id!==id));
        }

        else {
          reservationDetails.seats.push({id, name});
        }
    }

    function sortReservedSeats(){
        reservationDetails.seats.sort((a,b)=>(
            a.id > b.id
        ))
    }
    
    function selectSeat(){
        if (seat.isAvailable) {
            setIsSeatSelected(!isSeatSelected);
            setReservedSeat(seat.id, seat.name);
            sortReservedSeats();
        }
        else {
            alert('Esse assento não está disponível.')
        }
    }

    return (
        <S.Seat
        onClick={()=>{
            selectSeat();

            }}
        isSeatSelected={isSeatSelected}
        isAvailable={seat.isAvailable}
        >{seat.name}</S.Seat>
    );
}