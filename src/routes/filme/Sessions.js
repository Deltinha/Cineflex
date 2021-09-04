import { OrangeButton } from '../../components/shared/OrangeButton';
import * as S from './SessionsStyled.js';

export default function Sessions(){
    const sessionTime = '15:00';
    
    return (
        <S.Sessions>
            <OrangeButton size='small'>{sessionTime}</OrangeButton>
            <OrangeButton size='small'>{sessionTime}</OrangeButton>
            <OrangeButton size='small'>{sessionTime}</OrangeButton>
            <OrangeButton size='small'>{sessionTime}</OrangeButton>
            <OrangeButton size='small'>{sessionTime}</OrangeButton>
            <OrangeButton size='small'>{sessionTime}</OrangeButton>
            <OrangeButton size='small'>{sessionTime}</OrangeButton>
            <OrangeButton size='small'>{sessionTime}</OrangeButton>
            <OrangeButton size='small'>{sessionTime}</OrangeButton>
        </S.Sessions>
    );
}