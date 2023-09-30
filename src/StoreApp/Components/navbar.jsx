import styled from '@emotion/styled';
import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink , useNavigate } from 'react-router-dom';
import { useStore } from '../Context/storeProvider';

const ContainerNavbar = styled.div`

    display: flex;
    justify-content: space-between;
    align-items : center ; 
    background : #1B1B1B ;
    color : #ffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    
`

const ContainerCard = styled.div`
    display: flex;
    justify-content: space-between;
`
const QuantityProducts = styled.p`
    color : white;
    background : red;
    border-radius : 50%;
    width : 20px;
    text-align : center;
    position: relative;
    left :  40px;
    bottom : 5px;

`

const NavLinkWithoutUnderline = styled(NavLink)`
    text-decoration: none;
    color: #ffff;
`



export default function Navbar() {
    
    const {QuantityProduct} = useStore();


  return (
    <ContainerNavbar>

        <div>
        <NavLink 
                className="navbar-brand" 
                to="/home"
            >
            <h1>Sneeker APP</h1>
        </NavLink>
        </div>

        
        <div>
            <form >
                <input 
                    type="text"
                    placeholder="Search a products"
                    name="searchText"
                    autoComplete="off"
                />
                <button>Buscar</button>
            </form>
        </div>

            <NavLinkWithoutUnderline to="payment">
                <ContainerCard>
                    <QuantityProducts>{QuantityProduct()}</QuantityProducts>
                    <FiShoppingCart style={{fontSize:'30px' , marginRight:'20px', color:'#ffff'}}/>
                </ContainerCard>
            </NavLinkWithoutUnderline>

    </ContainerNavbar>
  )
}
