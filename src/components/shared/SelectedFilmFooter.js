import Poster from './Poster';
import * as S from './SelectedFilmFooterStyled.js';

function InfoSelected({filmTitle, weekday, time}){

    const isSessionSelected = Boolean(time);

    return (
        <div className='selected-options'>
            <span>{filmTitle}</span>
            {isSessionSelected ? <span>{`${weekday} - ${time}`}</span> : ''}
        </div>
    );
}

export default function SelectedFilmFooter({filmTitle, img, weekday, time}){
    return(
        <S.SelectedFilmFooter>
            <Poster 
            size='small'
            img={img}/>

            <InfoSelected
            filmTitle={filmTitle}
            weekday={weekday}
            time={time} />
        </S.SelectedFilmFooter>
    );
}