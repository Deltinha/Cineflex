import styled from "styled-components";

const MakeReservationsForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    font-weight: 400;

    & > form {
        display: flex;
        flex-direction: column;
        margin-bottom: 47px;
    }

    & form input {
       width:327px;
       height: 51px;
       box-sizing: border-box;
       border-radius: 3px;
       border: 1px solid #D5D5D5;
       margin-bottom: 10px;
       padding-left: 18px;
       padding-right: 18px;
       font-size: 18px;
       font-weight: 400;

       &::placeholder {
            color: #AFAFAF;
            font-size: 18px;
            font-weight: 400;
            font-style: italic;
       }
    }

    & form label {
        color: #293845;
        margin-bottom: 3px;
        
    }
`;

export {MakeReservationsForm};