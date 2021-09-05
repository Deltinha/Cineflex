import * as S from './ScreenStyled';

export default function Screen({children:screenText}){
    return (
        <S.Screen>
            <div>{screenText}</div>
        </S.Screen>
    );
}