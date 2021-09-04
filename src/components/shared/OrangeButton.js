import styled from "styled-components";

const OrangeButton = styled.button`
    background-color: #E8833A;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;    
        font-size: 18px;
        font-weight: 400;
        color: white;
        height: 43px;

        width: ${({size})=>{
            if (size === 'small') {
                return '82px';
            }
            return '225px';
        }};
`

export {OrangeButton};