import * as S from './FilmListStyled';
import Poster from '../../components/shared/Poster';

export default function FilmList({filmList, setSelectedFilmID}){
    return (
        <S.FilmList>
            {filmList.map((film)=><Poster key={film.id} img={film.posterURL}/>)}   
        </S.FilmList>
    );
}