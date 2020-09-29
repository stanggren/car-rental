import React from 'react';
import styled, {css} from 'styled-components';

const StyledCircle = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    color: ${props => props.theme.colors._darkPrimary};
    background: ${props => props.theme.colors._accent};
    border-radius: 50%;
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    margin: 25px 0px 0px 148px;
    text-align: center;

    ${({primary}) => 
        primary && 
        css`
        margin: 25px 0px 0px 158px;
    `}
`;

const Circle = ({primary, children}) => {
    return (
        <>
            <StyledCircle primary={primary}>{children}</StyledCircle>
        </>
    )
}

export default Circle;