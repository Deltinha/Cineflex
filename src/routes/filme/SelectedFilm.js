import Poster from '../../components/shared/Poster';
import './SelectedFilm.css';

export default function SelectedFilm(){
    return(
        <footer className='selected-film'>
            <Poster size='small'/>
        </footer>
    );
}