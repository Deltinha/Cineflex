import * as S from './ReservationInfoStyled';

function FilmAndSession({film, date, time}){
    return (
        <div>
            <h2>Filme e sessão</h2> 
            <span>{film}</span>
            <span>{date} {time}</span>
        </div>
    );
}

function TicketsList({seatsArray}){
    return (
        <div>
            <h2>Ingressos</h2> 
            {seatsArray.map((seat, index)=>(
                <span key={index}>Assento {seat.name}</span>
            ))}
        </div>
    );
}

function BuyerInfo({buyerName, cpf}){
    return (
        <div>
            <h2>Comprador</h2> 
            <span>Nome: {buyerName}</span>
            <span>CPF: {cpf}</span>
        </div>
    );
}

export default function ReservationInfo({reservationDetails}){
    return (
        <S.ReservationInfo>
            <FilmAndSession 
            film={reservationDetails.film}
            date={reservationDetails.date}
            time={reservationDetails.time}/>

            <TicketsList
            seatsArray={reservationDetails.seats} />

            <BuyerInfo
            buyerName={reservationDetails.buyerName}
            cpf={reservationDetails.cpf}/>
        </S.ReservationInfo>
        
    );
}