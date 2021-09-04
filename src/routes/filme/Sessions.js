import { OrangeButton } from '../../components/shared/OrangeButton';
import './Sessions.css';

function Session ({sessionTime}){
    return (
        <OrangeButton>{sessionTime}</OrangeButton>
    );
}

export default function Sessions(){
    const sessionTime = '15:00';
    
    return (
        <div className='days-and-sessions__sessions'>
            <Session sessionTime={sessionTime}/>
            <Session sessionTime={sessionTime}/>
            <Session sessionTime={sessionTime}/>
            <Session sessionTime={sessionTime}/>
            <Session sessionTime={sessionTime}/>
            <Session sessionTime={sessionTime}/>
            <Session sessionTime={sessionTime}/>
            <Session sessionTime={sessionTime}/>
            <Session sessionTime={sessionTime}/>
        </div>
    );
}