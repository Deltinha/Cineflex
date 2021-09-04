import styled from "styled-components";

const Poster = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        
        width: ${({size}) => {
            if (size === 'small') {
                return '64px';
            }
            else {
                return '145px';
            }
        }};

        height: ${({size}) => {
            if (size === 'small') {
                return '89px';
            }
            else {
                return '209px';
            }
        }};

        box-shadow:  ${({size}) => {
            if (size === 'small') {
                return '0px 2px 4px 0px rgba(0, 0, 0, 1)';
            }
            else {
                return '0px 2px 4px 2px rgba(0, 0, 0, 1)';
            }
        }};
    
    img {
        object-fit: cover;
        width: ${({size}) => {
            if (size === 'small') {
                return '48px';
            }
            else {
                return '129px';
            };
        }};
        

        height: ${({size}) => {
            if (size === 'small') {
                return '72px';
            }
            else {
                return '193px';
            }
        }};
    }
`

export {Poster}