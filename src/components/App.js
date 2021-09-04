import './reset.css'
import * as S from'./AppStyled.js'
import Header from './Header'
import Home from '../routes/home/Home';
import Film from '../routes/filme/Film';


export default function App(){
  return (
    <S.App>
      <Header />

      {/* <Home /> */}

      <Film />

      
    </S.App>
  );
}