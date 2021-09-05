import * as S from './SeatLegendStyled';
import { Seat } from './SeatStyled';

export default function SeatLegend (){
    return (
        <S.SeatLegend>
            <div>
                <Seat 
                isSeatSelected={true}/>
                <span>Selecionado</span>
            </div>
            <div>
                <Seat />
                <span>Disponível</span>
            </div>
            <div>
                <Seat 
                isAvailable={false}/>
                <span>Indisponível</span>
            </div>
        </S.SeatLegend>
    );
}