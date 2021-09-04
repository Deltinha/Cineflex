import * as S from './FilmListStyled';
import Poster from '../../components/shared/Poster';

export default function FilmList({filmList, setSelectedFilmID}){
    return (
        <S.FilmList>
            {filmList.map((film, index)=><Poster
            onClick={()=>setSelectedFilmID(film.id)}
            key={index}
            film={film}
            />)}   
        </S.FilmList>
    );
}