import React from 'react';
import styled, {css} from 'styled-components';

import SVGIcon from "./SVGIcon";

// import hero from '../assets/hero.png';
// import Button from '../components/Button';
// import Circle from '../components/Circle';

const carTypes = ['Personbilar', 'Transportbilar', 'Elbilar', 'Hybridbilar', 'Begagnat', 'Nya bilar'];
const carBrands = ['Volvo', 'Renault', 'Dacia', 'Ford', 'Mazda', 'Volvo'];

const CarsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10rem;
`;
const Header = styled.h2`
    font-family: 'Roboto Slab', serif;
    font-size: ${props => props.theme.fonts.size._headline};
    font-weight: 200;
    line-height: ${props => props.theme.fonts.lineHeight._headline};
    color: ${props => props.theme.colors._darkPrimary};
    padding-bottom: 4rem;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;
    .types{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .types div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 1rem;
        margin: 1rem;;
        border: 1px solid green;
        width: 9rem;
        height: 11rem;
    }
    .svg-icon{
        
    }
    .brands{

    }
`;





const CarList = () => {
    return (
        <>
            <CarsContainer>
                <Header>Hitta din nästa drömbil</Header>
                <ListContainer>
                    <div className="types">
                            <div>
                                <SVGIcon name="van" className="svg-icon" />
                                <p>{carTypes[0]}</p>
                            </div>
                            <div>
                                <SVGIcon name="pickup" className="svg-icon" />
                                <p>{carTypes[1]}</p>
                            </div>
                            <div>
                                <SVGIcon name="electric" className="svg-icon" />
                                <p>{carTypes[2]}</p>
                            </div>
                            <div>
                                <SVGIcon name="hybrid" className="svg-icon" />
                                <p>{carTypes[3]}</p>
                            </div>
                            <div>
                                <SVGIcon name="van" className="svg-icon" />
                                <p>{carTypes[4]}</p>
                            </div>
                            <div>
                                <SVGIcon name="pickup" className="svg-icon" />
                                <p>{carTypes[5]}</p>
                            </div>
                    </div>
                    <div className="brands">

                    </div>
                </ListContainer>
            </CarsContainer>
        </>
    )
}

export default CarList;