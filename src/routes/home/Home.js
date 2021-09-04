import FilmList from "./FilmList";
import { SectionHeader } from "../../components/shared/SectionHeader";
import './Home.css';

export default function Home(){
    return (
        <section className='home'>
            <SectionHeader>Selecione o filme</SectionHeader>

            <FilmList />
        </section>
    );
}