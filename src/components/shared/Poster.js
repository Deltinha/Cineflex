import * as S from './PosterStyled';
import { Link } from 'react-router-dom';

export default function Poster({film, setSelectedFilm, size}){
     return (
          <Link to={`/filme/${film.id}`}>
          <S.Poster onClick={()=>setSelectedFilm(film.id)} size={size}>
              <img src={film.posterURL} alt={`Poster do filme ${film.title}`}/>
          </S.Poster>
          </Link>
     );
}