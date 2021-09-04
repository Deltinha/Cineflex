import FilmList from "./FilmList";
import { SectionHeader } from "../../components/shared/SectionHeader";
import './Home.css';

export default function Home({filmList, setSelectedFilm}){
    return (
        <section className='home'>
            <SectionHeader>Selecione o filme</SectionHeader>

            <FilmList
            filmList={filmList}
            setSelectedFilm={setSelectedFilm}/>
        </section>
    );
}