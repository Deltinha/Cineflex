import * as S from './FilmListStyled';
import Poster from '../../components/shared/Poster';

export default function FilmList({filmList, setSelectedFilm}){
    return (
        <S.FilmList>
            {filmList.map((film, index)=><Poster
            key={index}
            film={film}
            setSelectedFilm={setSelectedFilm}
            />)}   
        </S.FilmList>
    );
}