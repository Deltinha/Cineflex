import { useState } from 'react';
import * as S from './SeatStyled';

export default function Seat({name, isAvailable}){
    
    const [isSeatSelected, setIsSeatSelected] = useState(false);


    function selectSeat(){
        
        if (isAvailable) {
            setIsSeatSelected(!isSeatSelected);
        }
        else {
            alert('Esse assento não está disponível.')
        }
    }

    return (
        <S.Seat
        onClick={()=>selectSeat()}
        isSeatSelected={isSeatSelected}
        isAvailable={isAvailable}>{name}</S.Seat>
    );
}