import './Poster.css';

export default function Poster({size}){
    return (
        <div className={`poster poster__size_${size}`}>
            <img src='https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg' />
        </div>
    );
}