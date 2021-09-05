import styled from "styled-components";

const SeatLegend = styled.div`
    
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    gap: 43px;

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

export {SeatLegend};