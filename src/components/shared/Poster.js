import * as S from './PosterStyle';

export default function Poster(props){
    return (
        <S.Poster size={props.size}>
            <img src='https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg' alt='Poster do filme'/>
        </S.Poster>
    );
}