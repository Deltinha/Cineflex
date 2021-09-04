import FilmList from "./FilmList";
import SubHeader from "../../components/shared/SubHeader";
import './Home.css';

export default function Home(){
    return (
        <section className='home'>
            <SubHeader>Selecione o filme</SubHeader>

            <FilmList />
        </section>
    );
}