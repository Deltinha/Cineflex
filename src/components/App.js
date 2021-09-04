import './reset.css'
import './App.css'
import Header from './Header'
import Home from '../routes/home/Home';
import Film from '../routes/filme/Film';


export default function App(){
  return (
    <>
      <Header />

      <Home />

      <Film />

      
    </>
  );
}