import React, { useState } from "react";
import styled from "styled-components";

import SVGIcon from "./SVGIcon";
import Button from "./Button";
import Circle from "../components/Circle";
import "../theme/styles.css";

const list = [
  {
    id: "1",
    type: "Personbilar",
    active: "1",
    brand: "Volvo",
    svg_name: "van",
  },
  {
    id: "2",
    type: "Transportbilar",
    active: "2",
    brand: "Renault",
    svg_name: "pickup",
  },
  {
    id: "3",
    type: "Elbilar",
    active: "3",
    brand: "Dacia",
    svg_name: "electric",
  },
  {
    id: "4",
    type: "Hybridbilar",
    active: "4",
    brand: "Ford",
    svg_name: "hybrid",
  },
  { id: "5", type: "Begagnat", active: "5", brand: "Mazda", svg_name: "van" },
  {
    id: "6",
    type: "Nya bilar",
    active: "6",
    brand: "Volvo",
    svg_name: "pickup",
  },
];

const passengerCar = ["21", "15", "5", "16", "5", "31"];
const transportCar = ["18", "40", "31", "21", "27", "2"];
const electricCar = ["13", "9", "10", "27", "12", "15"];
const hybridCar = ["18", "21", "41", "31", "19", "7"];
const usedCar = ["20", "13", "2", "18", "14", "21"];
const newCar = ["9", "45", "13", "21", "2", "35"];

const CarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  .circle-text {
    margin-top: 0.2rem;
  }
  .bottom-border {
    width: 65rem;
    border-bottom: 2px solid ${(props) => props.theme.colors._border};
  }
  a {
    margin-bottom: 1rem;
    font-family: "Roboto", serif;
    font-size: ${(props) => props.theme.fonts.size._small};
    color: ${(props) => props.theme.colors._darkPrimary};
    text-decoration: none;
  }
  a:hover {
    color: ${(props) => props.theme.colors._blue};
  }
`;
const Header = styled.h2`
  font-family: "Roboto Slab", serif;
  font-size: ${(props) => props.theme.fonts.size._headline};
  font-weight: 200;
  line-height: ${(props) => props.theme.fonts.lineHeight._headline};
  color: ${(props) => props.theme.colors._darkPrimary};
  padding-bottom: 3.5rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65rem;
  .types {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .types div button:hover {
    cursor: pointer;
  }
  .types div button:focus {
    outline: none;
  }
  .types div button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 9rem;
    margin: 1rem;
    border: 2px solid ${(props) => props.theme.colors._border};
    border-radius: 0.5rem;
    background: ${(props) => props.theme.colors._background};
  }
  .types div button:nth-child(1) {
    margin-bottom: 2rem;
    padding: 1rem;
    height: 11rem;
  }
  .types div button:nth-child(1) p {
    font-size: ${(props) => props.theme.fonts.size._button};
    line-height: ${(props) => props.theme.fonts.lineHeight._button};
  }
  .types div button:nth-child(2) {
    margin: 0rem 0rem 1rem 1rem;
    padding: 0.8rem;
    font-size: ${(props) => props.theme.fonts.size._button};
  }
  .svg-icon {
    height: 200px;
  }
  .active {
    border: 2px solid ${(props) => props.theme.colors._darkPrimary} !important;
  }
  .active:hover {
    cursor: context-menu !important;
  }
`;

const CarList = () => {
  const [activeType, setActiveType] = useState("1");
  const [activeBrand, setActiveBrand] = useState("2");

  const availableAmount = () => {
    var x = list.filter((item) => item.active === activeType);
    if (x[0].active === "1") return passengerCar[activeBrand - 1];
    else if (x[0].active === "2") return transportCar[activeBrand - 1];
    else if (x[0].active === "3") return electricCar[activeBrand - 1];
    else if (x[0].active === "4") return hybridCar[activeBrand - 1];
    else if (x[0].active === "5") return usedCar[activeBrand - 1];
    else if (x[0].active === "6") return newCar[activeBrand - 1];
  };

  function RenderList(props) {
    return props.list.map((item) => (
      <div key={item.id}>
        <button
          onClick={() => setActiveType(item.active)}
          className={activeType === item.active ? "active" : ""}
        >
          <SVGIcon name={item.svg_name} className="svg-icon" />
          <p>{item.type}</p>
        </button>
        <button
          onClick={() => setActiveBrand(item.active)}
          className={activeBrand === item.active ? "active" : ""}
        >
          {item.brand}
        </button>
      </div>
    ));
  }

  return (
    <>
      <CarsContainer>
        <Header>Hitta din nästa drömbil</Header>
        <ListContainer>
          <div className="types">
            <RenderList list={list} />
          </div>
        </ListContainer>
        <div>
          <Circle primary>
            <p className="circle-text">{availableAmount()}</p>
          </Circle>
          <Button className="show-cars" primary>
            Visa bilar
          </Button>
        </div>
        <div className="bottom-border flex-end">
          <a href="/">Se alla bilar i lager</a>
        </div>
      </CarsContainer>
    </>
  );
};

export default CarList;
