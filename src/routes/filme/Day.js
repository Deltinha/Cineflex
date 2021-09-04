import {Date} from './Date.js';
import Showtimes from './Showtimes';

export default function Day({dayData, setSelectedSessionID}){
    return (
        <div>
            <Date>{`${dayData.weekday} - ${dayData.date}`}</Date>

            <Showtimes
            showtimes={dayData.showtimes}
            setSelectedSessionID={setSelectedSessionID}/>  
        </div>
    );
}