import React from 'react';
import styled, {css} from 'styled-components';

const StyledCircle = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    color: ${props => props.theme.colors._darkPrimary};
    background: ${props => props.theme.colors._accent};
    border-radius: 50%;
    padding: 0.2rem;

    position: absolute;
    margin: 25px 0px 0px 132px;
`;

const Circle = ({primary, margin, children}) => {
    return (
        <>
            <StyledCircle>{children}</StyledCircle>
        </>
    )
}

export default Circle;