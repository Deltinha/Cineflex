import * as S from './SeatsLegendStyled';
import { Seat } from './SeatStyled';

export default function SeatsLegend (){
    return (
        <S.SeatsLegend>
            <div>
                <Seat />
                <span>Selecionado</span>
            </div>
            <div>
                <Seat />
                <span>Disponível</span>
            </div>
            <div>
                <Seat />
                <span>Indisponível</span>
            </div>
        </S.SeatsLegend>
    );
}