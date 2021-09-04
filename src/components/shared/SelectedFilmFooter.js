import Poster from './Poster';
import * as S from './SelectedFilmFooterStyled.js';

function SelectedOptions(){
    let selectedSessionTime = 'Quinta-Feira - 15:00';

    return (
        <div className='selected-options'>
            <span>Enola Holmes</span>
            {selectedSessionTime ? <span>Quinta-Feira - 15:00</span> : ''}
        </div>
    );
}

export default function SelectedFilmFooter(){
    return(
        <S.SelectedFilmFooter>
            <Poster size='small'/>

            <SelectedOptions/>
        </S.SelectedFilmFooter>
    );
}