import styled from "styled-components";

const Seat = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    /* background-color: #C3CFD9;
    border: 1px solid #808F9D; */

    border-style: solid;
    border-width: 1px;

    background-color: ${
        ({isSeatSelected, isAvailable}) => {
            if (isAvailable === false){
                return '#FBE192'
            }
            if (isSeatSelected) {
                return '#8DD7CF';
            }
            return '#C3CFD9';
            }
    };

    border-color: ${
        ({isSeatSelected, isAvailable}) => {
            if (isAvailable === false){
                return '#F7C52B'
            }
            if (isSeatSelected) {
                return '#1AAE9E';
            }
            return '#7B8B99';
            }
    };;

    
`

export {Seat};