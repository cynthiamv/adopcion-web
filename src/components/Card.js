import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const Div = styled.div`
    background-color: ${prop => prop.disponibilidad ? '#1a75bc': '#ccc'};
    display: flex;
    width: 420px;
    height: 200px;
    margin: 20px;
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.6);
    .card-image {
        width: 550px;
        height: auto;
        overflow: hidden;
        img {
            width: 250px;
            height: 100%;
            transition: all 1s;
        }
        img:hover {
           transform: scale(1.3);
        }
   }
   .card-info {
        color: #FFF;
        padding: 20px 8px;
        p {
            padding: 10px 0;
        }
    }
    &:hover {
        background-color: #fdb44b;
    }
`;

const Card = ({ name, shortDesc, img, isAvailable }) => {
    return (
        <Div disponibilidad = {isAvailable}>
            <div className="card-image">
                <img className="cat-image" alt={name} src={img}/>
            </div>
            <div className="card-info">
                <h3>{name}</h3>
                <p>{shortDesc}</p>
                <Button mensaje={isAvailable ? "Ver mas" : "No disponible"} />
            </div>
        </Div>
    );
}

export default Card;