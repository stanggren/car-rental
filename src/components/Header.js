import React from 'react';
import styled, {css} from 'styled-components';

import hero from '../assets/hero.png';
import Button from '../components/Button';
import Circle from '../components/Circle';

const HeaderContainer = styled.div`
    background-image: url("${hero}");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;

`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 9rem;

    h1 {
        font-family: 'Roboto Slab', serif;
        font-size: ${props => props.theme.fonts.size._headline};
        font-weight: 200;
        line-height: ${props => props.theme.fonts.lineHeight._headline};
        color: ${props => props.theme.colors._darkPrimary};
    }
    .header-buttons {
        display: flex;
        flex-direction: row;
    }
    
    .header-bottom{
        display: flex;
        flex-direction: column;
        margin: 350px 0px 0px 700px;
        width: 21.5rem;

        border-left: 1px solid ${props => props.theme.colors._light}
    }

    .header-bottom h2 {
        font-family: 'Roboto', sans-serif;
        font-size: ${props => props.theme.fonts.size._mediumHeadline};
        font-weight: 300;
        color: ${props => props.theme.colors._light};
        margin: 0.5rem 0 0.5rem 3rem;

    }
`;

const Header = ({primary, margin, children}) => {
    return (
        <>
            <HeaderContainer>
                <HeaderContent>
                    <h1>Vi finns i din närhet</h1>
                    <div className="header-buttons">
                        <div>
                            <Circle>34</Circle>
                            <Button>Bilar i lager</Button>
                        </div>
                        <Button primary>Boka verkstad</Button>
                    </div>
                    <div className="header-bottom">
                        <h2>Spetsa din roadtrip med nya sommardäck</h2>
                        <Button transparent>Köp däck</Button>
                    </div>
                </HeaderContent>
            </HeaderContainer>
        </>
    )
}

export default Header;