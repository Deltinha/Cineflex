import styled from "styled-components";

const SelectedFilmFooter = styled.footer`
    position: fixed;
    z-index: 5;
    background-color: #DFE6ED;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 117px;
    border-top: 1px #9EADBA solid;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    

    .selected-options {
        margin-left 14px;
        display: flex;
        flex-direction: column;
        height: 89px;
        justify-content: space-evenly;
        font-weight: 400;
        font-size: 26px;
        color: #293845;
    }
`;

export {SelectedFilmFooter}