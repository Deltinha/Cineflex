import './Day.css';
import Sessions from './Sessions';

function Date( {dateText} ) {
    return (
        <span className='days-and-sessions__date'>{dateText}</span>
    );
}

export default function Day(){
    const dateText = 'Quinta-feira - 24/06/2021';

    return (
        <div>
            <Date dateText={dateText} />

            <Sessions />  
        </div>
    );
}