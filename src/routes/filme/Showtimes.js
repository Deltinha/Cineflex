import { Link } from 'react-router-dom';
import { OrangeButton } from '../../components/shared/OrangeButton';
import * as S from './showtimesStyled.js';

export default function Showtimes({showtimes, setSelectedSessionID}){
    return (
        <S.Showtimes>
            {
                showtimes.map((showtime)=>(
                     <Link to='/'>
                        <OrangeButton 
                        onClick={()=>setSelectedSessionID(showtime.id)}
                        size='small'>{showtime.name}</OrangeButton>
                     </Link>
                ))
            } 
        </S.Showtimes>
    );
}