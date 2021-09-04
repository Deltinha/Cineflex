import {Date} from './Date.js';
import Sessions from './Sessions';

export default function Day(){
    const dateText = 'Quinta-feira - 24/06/2021';

    return (
        <div>
            <Date>{dateText}</Date>

            <Sessions />  
        </div>
    );
}