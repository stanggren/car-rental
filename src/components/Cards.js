import React, { useState } from "react";
import styled, { css } from "styled-components";

import person from "../assets/person.jpg";
import truck from "../assets/truck.jpg";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0 5rem 0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 31.5rem;
  height: 20rem;
  margin: 3rem 1rem 1rem 1rem;
  padding: 2rem;

  border-radius: 1.7rem;
  background: ${(props) => props.theme.colors._card};

  div:nth-child(1) {
    align-content: flex-start;
  }

  div:nth-child(2) {
    align-content: flex-end;
  }

  ${({ media }) =>
    media &&
    css`
      background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
        url("${truck}");
      background-repeat: no-repeat;
      background-size: cover;

      div {
        padding-top: 8.5rem;
      }

      h3 {
        width: 28rem;
        font-size: ${(props) => props.theme.fonts.size._mediumHeadline};
        font-weight: 400;
        color: ${(props) => props.theme.colors._light};
      }

      button {
        background: none;
        outline: none;
        border: none;
      }
      button:hover {
        cursor: pointer;
      }

      svg,
      button {
        width: 3rem;
        height: 3rem;
      }

      p {
        font-family: "Roboto", sans-serif;
        font-size: ${(props) => props.theme.fonts.size._small};
        font-weight: 300;
        color: ${(props) => props.theme.colors._light};

        padding-left: 1rem;
      }
    `}
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;

  h3 {
    font-family: "Roboto", sans-serif;
    font-size: ${(props) => props.theme.fonts.size._mediumHeadline};
    font-weight: 400;
    color: ${(props) => props.theme.colors._darkPrimary};
  }

  .button-container button {
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 0.4rem;
    margin-top: 1rem;
    margin-left: 0.2rem;

    border: 2px solid ${(props) => props.theme.colors._border};
    border-radius: 0.5rem;
    font-size: 14px;
    font-weight: 500;
    background: ${(props) => props.theme.colors._background};
    color: ${(props) => props.theme.colors._darkGray};
  }

  .button-container button:focus {
    outline: none;
  }

  .button-container button:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors._blue};
    color: ${(props) => props.theme.colors._light};
    border: 2px solid ${(props) => props.theme.colors._blue};
  }

  .button-container button:nth-child(1) {
    margin-left: 0rem;
  }

  img {
    align-items: flex-end;
    height: 5rem;
    width: 5rem;
    object-fit: cover;
    margin-left: 7rem;
    border-radius: 100%;
    border: 2px solid ${(props) => props.theme.colors._border};
  }

  .active {
    border: 2px solid ${(props) => props.theme.colors._darkPrimary}!important;
    border-radius: 0.5rem;
    color: ${(props) => props.theme.colors._darkPrimary}!important;
  }

  .active:hover {
    border: 2px solid ${(props) => props.theme.colors._darkPrimary}!important;
    background: ${(props) => props.theme.colors._light}!important;
    color: ${(props) => props.theme.colors._darkPrimary}!important;
    cursor: context-menu !important;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  p {
    font-size: ${(props) => props.theme.fonts.size._small};
    color: ${(props) => props.theme.colors._darkGray};
    margin-left: 3.5rem;
  }

  .reg-container {
    margin-top: 1rem;
  }

  .reg-container svg {
    margin-top: 1rem;
    margin-right: 0.5rem;
  }

  .input input {
    width: 3.5rem;
    height: 4.5rem;
    margin-left: 0.5rem;
    padding: 1rem;
    border-style: none;
    border-radius: 0.5rem;
    font-size: ${(props) => props.theme.fonts.size._mediumHeadline};
    text-transform: uppercase;
  }

  .input input:nth-child(4) {
    margin-left: 1.2rem;
  }

  .input input:focus {
    outline: none;
  }
`;

const Cards = ({ media, children }) => {
  const [active, setActive] = useState("service");
  const [reg1, setReg1] = useState(null);
  const [reg2, setReg2] = useState(null);
  const [reg3, setReg3] = useState(null);
  const [reg4, setReg4] = useState(null);
  const [reg5, setReg5] = useState(null);
  const [reg6, setReg6] = useState(null);

  return (
    <>
      <CardContainer>
        <Card>
          <TopContainer>
            <div>
              <h3>Boka verkstad</h3>
              <div className="button-container flex-row">
                <button
                  onClick={() => setActive("service")}
                  className={active === "service" ? "active" : ""}
                >
                  Service
                </button>
                <button
                  onClick={() => setActive("wheel")}
                  className={active === "wheel" ? "active" : ""}
                >
                  Hjulskfite
                </button>
                <button
                  onClick={() => setActive("windshield")}
                  className={active === "windshield" ? "active" : ""}
                >
                  Byta vindruta
                </button>
              </div>
            </div>
            <img src={person} alt="A person" />
          </TopContainer>
          <BottomContainer>
            <p>Fyll i regnummer</p>
            <div className="reg-container flex-row">
              <svg
                width="42"
                height="59"
                viewBox="0 0 42 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="36"
                  height="54"
                  rx="6"
                  fill="#1366B9"
                />
                <path
                  d="M20.6719 43.9297C19.3854 43.5599 18.4479 43.1068 17.8594 42.5703C17.276 42.0286 16.9844 41.362 16.9844 40.5703C16.9844 39.6745 17.3411 38.9349 18.0547 38.3516C18.7734 37.763 19.7057 37.4688 20.8516 37.4688C21.6328 37.4688 22.3281 37.6198 22.9375 37.9219C23.5521 38.224 24.026 38.6406 24.3594 39.1719C24.6979 39.7031 24.8672 40.2839 24.8672 40.9141H23.3594C23.3594 40.2266 23.1406 39.6875 22.7031 39.2969C22.2656 38.901 21.6484 38.7031 20.8516 38.7031C20.112 38.7031 19.5339 38.8672 19.1172 39.1953C18.7057 39.5182 18.5 39.9688 18.5 40.5469C18.5 41.0104 18.6953 41.4036 19.0859 41.7266C19.4818 42.0443 20.151 42.3359 21.0938 42.6016C22.0417 42.8672 22.7812 43.1615 23.3125 43.4844C23.849 43.8021 24.2448 44.1745 24.5 44.6016C24.7604 45.0286 24.8906 45.5312 24.8906 46.1094C24.8906 47.0312 24.5312 47.7708 23.8125 48.3281C23.0938 48.8802 22.1328 49.1562 20.9297 49.1562C20.1484 49.1562 19.4193 49.0078 18.7422 48.7109C18.0651 48.4089 17.5417 47.9974 17.1719 47.4766C16.8073 46.9557 16.625 46.3646 16.625 45.7031H18.1328C18.1328 46.3906 18.3854 46.9349 18.8906 47.3359C19.401 47.7318 20.0807 47.9297 20.9297 47.9297C21.7214 47.9297 22.3281 47.7682 22.75 47.4453C23.1719 47.1224 23.3828 46.6823 23.3828 46.125C23.3828 45.5677 23.1875 45.138 22.7969 44.8359C22.4062 44.5286 21.6979 44.2266 20.6719 43.9297Z"
                  fill="white"
                />
                <path
                  d="M21.2942 11.7181H22.4492L21.5252 12.4111L21.8822 13.5241L20.9582 12.8311L20.0342 13.5241L20.3912 12.4111L19.4462 11.7181H20.6012L20.9582 10.6471L21.2942 11.7181Z"
                  fill="#FFEB00"
                />
                <path
                  d="M21.3361 29.5472H22.4911L21.5671 30.2612L21.9241 31.3532L21.0001 30.6812L20.0761 31.3532L20.4331 30.2612L19.5091 29.5472H20.6641L21.0001 28.4762L21.3361 29.5472Z"
                  fill="#FFEB00"
                />
                <path
                  d="M25.7671 28.371H26.9221L25.9771 29.064L26.3341 30.177L25.4101 29.505L24.4861 30.177L24.8641 29.064L23.9191 28.371H25.0741L25.4101 27.3L25.7671 28.371Z"
                  fill="#FFEB00"
                />
                <path
                  d="M25.7671 12.894H26.9221L25.9771 13.587L26.3341 14.7L25.4101 14.007L24.4861 14.7L24.8641 13.587L23.9191 12.894H25.0741L25.4101 11.823L25.7671 12.894Z"
                  fill="#FFEB00"
                />
                <path
                  d="M29.043 16.1701H30.198L29.253 16.8631L29.631 17.9761L28.707 17.3041L27.762 17.9761L28.14 16.8631L27.195 16.1701H28.35L28.707 15.0991L29.043 16.1701Z"
                  fill="#FFEB00"
                />
                <path
                  d="M29.043 25.1372H30.198L29.253 25.8302L29.631 26.9432L28.707 26.2712L27.762 26.9432L28.14 25.8302L27.195 25.1372H28.35L28.707 24.0662L29.043 25.1372Z"
                  fill="#FFEB00"
                />
                <path
                  d="M30.2611 20.5802H31.4161L30.4921 21.2942L30.8491 22.3862L29.9251 21.7142L29.0011 22.3862L29.3581 21.2942L28.4341 20.5802H29.5681L29.9251 19.5092L30.2611 20.5802Z"
                  fill="#FFEB00"
                />
                <path
                  d="M16.7791 12.894H17.9341L17.0101 13.608L17.3671 14.7L16.4431 14.028L15.5191 14.7L15.8971 13.608L14.9521 12.894H16.1071L16.4431 11.823L16.7791 12.894Z"
                  fill="#FFEB00"
                />
                <path
                  d="M13.608 16.1911H14.763L13.818 16.8841L14.196 17.9761L13.272 17.3041L12.327 17.9761L12.705 16.8841L11.76 16.1911H12.915L13.272 15.0991L13.608 16.1911Z"
                  fill="#FFEB00"
                />
                <path
                  d="M12.4111 20.601H13.5661L12.6421 21.294L12.9991 22.407L12.0751 21.714L11.1511 22.407L11.5081 21.294L10.5841 20.601H11.7391L12.0751 19.53L12.4111 20.601Z"
                  fill="#FFEB00"
                />
                <path
                  d="M13.608 25.1582H14.763L13.818 25.8512L14.196 26.9642L13.272 26.2712L12.327 26.9642L12.705 25.8512L11.76 25.1582H12.915L13.272 24.0662L13.608 25.1582Z"
                  fill="#FFEB00"
                />
                <path
                  d="M16.8421 28.392H17.9971L17.0521 29.085L17.4301 30.1981L16.4851 29.5051L15.5611 30.1981L15.9391 29.085L14.9941 28.392H16.1491L16.4851 27.3L16.8421 28.392Z"
                  fill="#FFEB00"
                />
              </svg>
              <div className="input flex-row">
                <input
                  maxLength="1"
                  defaultValue="A"
                  onChange={(e) => setReg1(e.target.value)}
                />
                <input
                  maxLength="1"
                  onChange={(e) => setReg2(e.target.value)}
                />
                <input
                  maxLength="1"
                  onChange={(e) => setReg3(e.target.value)}
                />
                <input
                  maxLength="1"
                  onChange={(e) => setReg4(e.target.value)}
                />
                <input
                  maxLength="1"
                  onChange={(e) => setReg5(e.target.value)}
                />
                <input
                  maxLength="1"
                  onChange={(e) => setReg6(e.target.value)}
                />
              </div>
            </div>
          </BottomContainer>
        </Card>
        <Card media={"media"}>
          <h3>
            Följ med på vår roadtrip
            <br /> och filmserie genom Västsverige.
          </h3>
          <div className="flex-row center-item">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                style={{ fill: "#000000" }}
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#ffffff">
                    <path d="M86,14.33333c-39.49552,0 -71.66667,32.17115 -71.66667,71.66667c0,39.49552 32.17115,71.66667 71.66667,71.66667c39.49552,0 71.66667,-32.17115 71.66667,-71.66667c0,-39.49552 -32.17115,-71.66667 -71.66667,-71.66667zM86,28.66667c31.74921,0 57.33333,25.58412 57.33333,57.33333c0,31.74921 -25.58412,57.33333 -57.33333,57.33333c-31.74921,0 -57.33333,-25.58412 -57.33333,-57.33333c0,-31.74921 25.58412,-57.33333 57.33333,-57.33333zM71.66667,61.16862v49.66276l43,-24.83138z"></path>
                  </g>
                </g>
              </svg>
            </button>
            <p>Avsnitt 2 - Dingle</p>
          </div>
        </Card>
      </CardContainer>
    </>
  );
};

export default Cards;
