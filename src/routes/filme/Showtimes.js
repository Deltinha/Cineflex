import { Link } from 'react-router-dom';
import { OrangeButton } from '../../components/shared/OrangeButton';
import * as S from './showtimesStyled.js';

export default function Showtimes({showtimes}){
    return (
        <S.Showtimes>
            {
                showtimes.map((showtime, index)=>(
                     <Link to={`/sessao/${showtime.id}`} key={index}>
                        <OrangeButton 
                        size='small'>{showtime.name}</OrangeButton>
                     </Link>
                ))
            } 
        </S.Showtimes>
    );
}