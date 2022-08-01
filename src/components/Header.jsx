//React librairies
import React, { useState } from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";

//Icons
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

//Reducers
import {selectCars} from "../features/car/carSlice";

function Header() {
  //Use selector
  const cars = useSelector(selectCars);

  //Use state
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" width={100} height={20}/>
      </a>
      <Menu>
        {cars && cars.map((car,index) => {
          return(
            <a key={index} href="#">{car}</a>
          )
        })}
        <a href="#">Powerall</a>
        <a href="#">Recharge</a>
      </Menu>
      <RightMenu>
        <a href="#">Assistance</a>
        <a href="#">Shop</a>
        <a href="#">Compte</a>
        <CustomMenu onClick={() => setBurgerOpen(true)}>Menu</CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerOpen}>
          <CloseWrapper onClick={() => setBurgerOpen(false)}>
              <CustomClose/>
          </CloseWrapper>
          <li><a href='#'>Véhicules Disponibles</a></li>
          <li><a href='#'>Véhicules D'occasion</a></li>
          <li><a href='#'>Reprise</a></li>
          <li><a href='#'>Essais</a></li>
          <li><a href='#'>Flottes et Entreprises</a></li>
          <li><a href='#'>Cybertruck</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 14px;
  margin-left: 100px;

  a {
    font-weight: 700;
    padding: 0 20px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px){
      display: none;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 700;
    margin-right: 10px;
    flex-wrap: nowrap;
    padding: 0 10px;
    font-size: 14px;
  }
`;

const CustomMenu = styled.a`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.2s;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);

        a{
            font-weight: 600;
        }
    }
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;