import styled from "styled-components";

const Screen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    
    & > div {
        width: 190px;
        height: 180px;
        display: inline-block;
        border: 1px solid rgba(0,0,0,.5);
        transform: perspective(600px) rotateX(100deg);
        background: #C3CFD9;
    }
`

export {Screen}