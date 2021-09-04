import FilmList from "./FilmList";
import { SectionHeader } from "../../components/shared/SectionHeader";
import './Home.css';

export default function Home({filmList, setSelectedFilmID}){
    return (
        <section className='home'>
            <SectionHeader>Selecione o filme</SectionHeader>

            <FilmList
            filmList={filmList}
            setSelectedFilmID={setSelectedFilmID}/>
        </section>
    );
}