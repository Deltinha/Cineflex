import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosCineflexAPI } from "../../CineflexAPI";
import { OrangeButton } from "../../components/shared/OrangeButton";
import * as S from './MakeReservationsFormStyled';

function ReserveButton({updateReservationDetails}){
    return (
        <Link to='/sucesso' >
            <OrangeButton onClick={updateReservationDetails}>Reservar assento(s)</OrangeButton>
        </Link> 
    );
}

export default function MakeReservationsForm({reservationDetails}){
    const [buyerName, setBuyerName] = useState('');
    const [buyerCPF, setBuyerCPF] = useState('');

    function sendReservationRequest(){
        const reservedSeats = [];

        reservationDetails.seats.forEach(seat => {
            reservedSeats.push(seat.id);
        });
        
        const promise = axiosCineflexAPI.post('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many',
            {
                ids: reservedSeats,
                name: reservationDetails.buyerName,
                cpf: reservationDetails.cpf
            });
    }
    
    function updateReservationDetails(){
        reservationDetails.buyerName = buyerName;
        reservationDetails.cpf = buyerCPF;
        
        sendReservationRequest();
    }

    return (        
        <S.MakeReservationsForm>
        <form>
            <label htmlFor="buyer-name">Nome do comprador:</label>
            
            <input 
            onChange={(e)=>(setBuyerName(e.target.value))}
            type='text' 
            id='buyer-name' 
            name='buyer-name'
            value={buyerName} 
            placeholder='Digite seu nome...'/>
            
            <label htmlFor="buyer-cpf">CPF do comprador:</label>
            
            <input 
            onChange={(e)=>(setBuyerCPF(e.target.value))}
            type="text" 
            id="buyer-cpf" 
            name="buyer-cpf" 
            value={buyerCPF}  
            placeholder="Digite seu CPF" />
        </form>

        <ReserveButton updateReservationDetails={updateReservationDetails}/>

        </S.MakeReservationsForm>
    );
}