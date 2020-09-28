import React from 'react';
import styled from 'styled-components';

// import Button from './components/Button';
import Header from './components/Header';

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
            {/* <Button primary margin='5rem'>Primary button</Button>
            <Button>Seconday button</Button> */}
        </MainWrapper>
    )
}

export default App;