import React from 'react';

const Card = props => {
    return (
        <div className="card"> 
            <div className="card-image">
                <img className="cat-image" alt="imagen de un gato" src={props.imagen}/>
            </div>
            <div className="card-info">
                <h3 className="name">{props.nombre}</h3>
                <p className="shortDesc">{props.descripcion}</p>
                <button className="openModal">Ver más</button>
            </div>
        </div>
    )
}

export default Card;