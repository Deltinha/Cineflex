import './Sessions.css';

function Session ({sessionTime}){
    return (
        <button className='orange-button'>
            <span>{sessionTime}</span>
        </button>
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