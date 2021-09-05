import Day from "./Day";
import * as S from './DaysAndSessionsStyled';



export default function DaysAndSessions({days}){
    if (typeof(days) !== 'undefined') {
        return (     
            <S.DaysAndSessions>
                {
                    days.map((day, index) =>(
                        <Day 
                        key={index} 
                        dayData={day}/>))
                }
            </S.DaysAndSessions>
        )
    }
    return (
        <>
        </>
    )
}
