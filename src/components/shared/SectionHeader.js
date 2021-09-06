import styled from "styled-components";

const SectionHeader = styled.h1`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;    

    font-size: 24px;
    font-weight: 400;
    /* color: #293845; */
    color: ${
        ({fontColor})=>{
            if (fontColor === 'eucalyptus-green') {
                return '#247A6B';
            }
            return '#293845';
        }
    };

    font-weight: ${
        ({fontWeight})=>{
            if (fontWeight === 'bold') {
                return '700';
            }
            return '400';
        }
    };

`;

export {SectionHeader};