import { Link } from "react-router-dom";
import { OrangeButton } from "../../components/shared/OrangeButton";
import { SectionHeader } from "../../components/shared/SectionHeader";
import ReservationInfo from "./ReservationInfo";
import * as S from './SuccessStyled';

export default function Success({reservationDetails}){
    return (
        <S.Success>
            <SectionHeader
            fontWeight='bold'
            fontColor='eucalyptus-green'>
                Pedido feito com sucesso!
            </SectionHeader>

            <ReservationInfo 
            reservationDetails={reservationDetails}/>

            <Link to='/'>
                <OrangeButton>Voltar para Home</OrangeButton>
            </Link>
        </S.Success>
    );
}