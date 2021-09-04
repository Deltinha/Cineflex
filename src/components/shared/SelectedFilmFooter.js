import Poster from './Poster';
import * as S from './SelectedFilmFooterStyled.js';

export default function SelectedFilmFooter(){
    return(
        <S.SelectedFilmFooter className='selected-film'>
            <Poster size='small'/>
        </S.SelectedFilmFooter>
    );
}