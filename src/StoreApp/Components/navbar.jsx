import styled from '@emotion/styled';
import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink , useNavigate } from 'react-router-dom';

const ContainerNavbar = styled.div`

    display: flex;
    justify-content: space-between;
    align-items : center ; 
    background : #1B1B1B ;
    color : #ffff;
`


export default function Navbar() {
  return (
    <ContainerNavbar>

        <div>
        <NavLink 
                className="navbar-brand" 
                to="/home"
            >
            <h1>STORE APP</h1>
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

        <NavLink to="payment">
            <FiShoppingCart style={{fontSize:'30px' , marginRight:'20px', color:'#ffff'}}/>
        </NavLink>
    </ContainerNavbar>
  )
}
