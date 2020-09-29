import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import CarList from './components/CarList';
import Cards from './components/Cards';

const MainWrapper = styled.section`
    /* width: 100%; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`; 

function App() {
    return (
        <MainWrapper>
            <Header />
            <CarList/>
            <Cards />
        </MainWrapper>
    )
}

export default App;