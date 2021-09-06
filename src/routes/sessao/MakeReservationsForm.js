import { Link } from "react-router-dom";
import { OrangeButton } from "../../components/shared/OrangeButton";
import * as S from './MakeReservationsFormStyled';

export default function MakeReservationsForm(){
    return (
        <S.MakeReservationsForm>
        <form>
            <label htmlFor="buyer-name">Nome do comprador:</label>
            <input type='text' id='buyer-name' name='buyer-name' placeholder='Digite seu nome...'/>
            <label htmlFor="buyer-cpf">CPF do comprador:</label>
            <input type="text" id="buyer-cpf" name="buyer-cpf" placeholder="Digite seu CPF" />
        </form>
        
        <Link to='/sucesso'>
            <OrangeButton>Reservar assento(s)</OrangeButton>
        </Link>
        </S.MakeReservationsForm>
    );
}