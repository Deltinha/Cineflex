import styled from "styled-components";

const Screen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    
    & > div {
        width: 190px;
        height: 50px;
        display: inline-block;
        border: 1px solid rgba(0,0,0,.5);
        transform: perspective(100px) rotateX(-40deg);
        background: #C3CFD9;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: #E8833A;
    }
`

export {Screen}