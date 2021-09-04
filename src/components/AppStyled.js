import styled from "styled-components";

const App = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

    font-family: 'Roboto';


    & > section {
        margin-top: 67px;
        margin-bottom: calc(118px + 30px);
    }
`;

export {App};