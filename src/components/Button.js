import React from 'react';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`

    color: ${props => props.theme.colors.main};
    margin: ${({margin}) => margin || '2rem'};

    ${({primary}) => 
        primary && 
        css`
            background-color: red;
        `}

    &:hover {
        background-color: green;        
    }
`;

const Button = ({primary, margin, children}) => {
    return (
        <>
            <StyledButton margin={margin} primary={primary}>{children}</StyledButton>
        </>
    )
}

export default Button;