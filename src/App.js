import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import CarList from './components/CarList'

const MainWrapper = styled.section`
    /* width: 100%; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`; 

const App = () => {
    return (
        <MainWrapper>
            <Header />
            <CarList/>
        </MainWrapper>
    )
}

export default App;