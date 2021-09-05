import * as S from './SeatSelectionStyled';
import Seat from './Seat';

function SeatsRow({seats}){
    return (
        <S.SeatsRow>
            {seats.map((seat, index)=>(
                <Seat
                key={index}
                name={seat.name}
                isAvailable={seat.isAvailable}/>
            ))}
        </S.SeatsRow>
    );
}

function splitArray(array, chunkSize){
    let newArray = [];
    while (array.length) {
        newArray.push(array.splice(0,chunkSize));
    }

    return newArray;

}

export default function SeatSelection({seats}){
    
    let seatsRowArray = splitArray(seats, 10);

    return (
        <S.SeatSelection>
            
            {
                seatsRowArray.map((row, index) => (
                    <SeatsRow
                    key={index}
                    seats={row}/>
                ))
            }
        </S.SeatSelection>
    );
}