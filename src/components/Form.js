import React from 'react';
import './Form.scss';

const Form = () => {
    return (
        <>
        <section className="form">
            <form>   
                <div className="checkbox">
                    <label>
                    <input type="checkbox" name="color" value="negro"/>
                    Negro
                </label>
                <label>
                    <input type="checkbox" name="color" value="blanco"/>
                    Blanco
                </label>
                <label>
                    <input type="checkbox" name="color" value="gris"/>
                    Gris
                </label>
                <label>
                    <input type="checkbox" name="color" value="naranja"/>
                    Naranja
                </label>
                <label>
                    <input type="checkbox" name="color" value="rayado"/>
                    Rayado
                </label>
                </div>
        
                <div className="radio">
                    <label>
                    <input type="radio" name="sexo" value="f"/>
                    Femenino
                </label>
                <label>
                    <input type="radio" name="sexo" value="m"/>
                    Masculino
                </label>
                <label><input type="radio" name="sexo" value="i"/>
                    Indiferente
                </label>
                </div>
        
                <div className="name">Nombre
                    <input type="text" name="name" placeholder=""/>
                </div>
        
                <div className="phone">Telefono
                    <input type="text" name="phone" placeholder=""/>
                </div>
        
                <input className="filtrar" type="submit" value="Filtrar"/>    
            </form>
      </section>
  </>
    )
}
export default Form;