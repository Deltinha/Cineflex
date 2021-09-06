import styled from "styled-components";

const ReservationInfo = styled.div`
    margin-left: 28px;
    margin-right: 28px;
    margin-bottom: 60px;
    color: #293845;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 30px;

    }

    h2 {
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 5px;
    }

    span {
        font-weight: 400;
        font-size: 22px;
    }
`;

const FilmAndSession = styled.div`
`;

export {ReservationInfo};