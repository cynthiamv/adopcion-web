import React from 'react';

const Card = props => {
    let disponible = props.info.disponible ? '' : 'card-disabled'
    let mensajeDelBoton = props.info.disponible ? 'Ver más' : 'No disponible'

    return (
        <div className={`card ${disponible}`}> 
            <div className="card-image">
                <img className="cat-image" alt="imagen de un gato" src={props.info.img}/>
            </div>
            <div className="card-info">
                <h3 className="name">{props.info.name}</h3>
                <p className="shortDesc">{props.info.shortDesc}</p>
                <button className="openModal">{mensajeDelBoton}</button>
            </div>
        </div>
    )
}

export default Card;