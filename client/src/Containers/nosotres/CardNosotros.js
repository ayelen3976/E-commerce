import React from 'react';
import  '../../Components/Producto/styles.css'

function CardNosotros(props){

 
        return (
            <div className="card">
              <div className='upper-container'>
                <div className='image-container'>
                  <img className='card-image' src={props.image} />
                </div>
              </div>
              <div className="card-text">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                 <p> Frase Característica: {props.frase}</p>
              </div>   
                
              </div>
            
          );
    
}
export default CardNosotros;