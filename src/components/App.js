import '../../src/reset.css';
import * as S from'./AppStyled.js'
import Header from './Navbar'
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