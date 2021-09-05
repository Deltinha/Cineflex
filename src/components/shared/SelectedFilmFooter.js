import Poster from './Poster';
import * as S from './SelectedFilmFooterStyled.js';

function InfoSelected({filmTitle}){
    let selectedSessionTime = 'Quinta-Feira - 15:00';

    return (
        <div className='selected-options'>
            <span>{filmTitle}</span>
            {selectedSessionTime ? <span>Quinta-Feira - 15:00</span> : ''}
        </div>
    );
}

export default function SelectedFilmFooter({filmTitle, img}){
    return(
        <S.SelectedFilmFooter>
            <Poster 
            size='small'
            img={img}/>

            <InfoSelected
            filmTitle={filmTitle}/>
        </S.SelectedFilmFooter>
    );
}