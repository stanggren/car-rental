import React from 'react';
import styled from 'styled-components';

import Button from './components/Button';

const MainWrapper = styled.section`
    width: 100%100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`; 

const App = () => {
    return (
        <MainWrapper>
            <Button primary margin='5rem'>Primary button</Button>
            <Button>Seconday button</Button>
        </MainWrapper>
    )
}

export default App;