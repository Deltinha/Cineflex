import styled from "styled-components";

const SeatsLegend = styled.div`
    
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 40px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        
    }

    div span {
        font-weight: 400;
        font-size: 13px;
        color: #4E5A65;
    }
`;

export {SeatsLegend};