import React from "react";
import styled from "styled-components";

import hero from "../assets/hero.png";
import Button from "../components/Button";
import Circle from "../components/Circle";
import "../theme/styles.css";

const HeaderContainer = styled.div`

  background-image: url("${hero}");
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 9rem;

  h1 {
    font-family: ${(props) => props.theme.fonts.family._robotoSlab};
    font-size: ${(props) => props.theme.fonts.size._headline};
    font-weight: 200;
    line-height: ${(props) => props.theme.fonts.lineHeight._headline};
    color: ${(props) => props.theme.colors._darkPrimary};
  }
  .circle-text {
    margin-top: 0.2rem;
  }
  .header-bottom {
    margin: 350px 0px 40px 700px;
    width: 21.5rem;
    border-left: 1px solid ${(props) => props.theme.colors._light};
  }
  .header-bottom h2 {
    font-size: ${(props) => props.theme.fonts.size._mediumHeadline};
    font-weight: 300;
    color: ${(props) => props.theme.colors._light};
    margin: 0.5rem 0 0.5rem 3rem;
  }
`;

const Header = ({ primary, margin, children }) => {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <h1>Vi finns i din närhet</h1>
          <div className="flex-row">
            <div>
              <Circle>
                <p className="circle-text">34</p>
              </Circle>
              <Button>Bilar i lager</Button>
            </div>
            <Button primary>Boka verkstad</Button>
          </div>
          <div className="header-bottom flex-column">
            <h2>Spetsa din roadtrip med nya sommardäck</h2>
            <Button transparent>Köp däck</Button>
          </div>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};

export default Header;
