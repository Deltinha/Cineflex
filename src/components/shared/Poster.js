import * as S from './PosterStyled';


export default function Poster({filmTitle, img, size}){
     return (
          
          <S.Poster size={size}>
              <img src={img} alt={`Poster do filme ${filmTitle}`}/>
          </S.Poster>

     );
}