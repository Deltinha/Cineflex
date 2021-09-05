import { SectionHeader } from "../../components/shared/SectionHeader";

import * as S from './SeatStyled';
import Screen from "./Screen";

export default function Session(){
    return (
        <>
        <section>
            <SectionHeader>Selecione os assentos</SectionHeader>
            <Screen />
            <ul className='seats'>
                <S.Seat />
            </ul>
        </section>
        </>
    );
}