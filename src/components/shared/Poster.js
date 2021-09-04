import * as S from './PosterStyled';

export default function Poster({size, img}){
    return (
        <S.Poster size={size}>
            <img src={img}/>
        </S.Poster>
    );
}