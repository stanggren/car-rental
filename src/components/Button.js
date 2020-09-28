import React from 'react';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: ${props => props.theme.colors._darkPrimary};
    background: none;
    padding: 0.8rem;
    border-radius: 0.5rem;
    border: 2px solid #E7E9EA;
    outline: inherit;
    margin: 2rem 0.5rem 2rem 0rem;


    ${({primary}) => 
        primary && 
        css`
            background-color: ${props => props.theme.colors._darkPrimary};
            color: ${props => props.theme.colors._light};

            border: none;
        `}

    &:hover {
        opacity: 0.5;       
    }
`;

const Button = ({primary, margin, children}) => {
    return (
        <>
            <StyledButton primary={primary}>{children}</StyledButton>
        </>
    )
}

export default Button;