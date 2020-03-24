import React from 'react';
import styled from 'styled-components';
import icono from '../img/hamburger.png';

const Nav = styled.nav`
    background-color: ${prop => prop.emergencia ? 'red' : '#1a75bc'};
    height: 80px;
    padding: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
        cursor: pointer;
        background-color: transparent;
        font-size: 16px;
        border-radius: 3px;
        color: violet;
        border: 2px solid violet;
        margin: 0 5px;
        padding: 2px;
    }
    img {
        width: 25px;
        height: auto;
    }
`;

const Navbar = () => {
    return (
        <Nav emergencia={true}>
            <div>#AdoptAdas</div>
            <img alt="icono de menu" src={icono}/>
            <button>Boton</button>
        </Nav>
    )
}

export default Navbar;