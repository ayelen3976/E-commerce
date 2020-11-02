import React from 'react';
import './ProfileCard.css'


function Card({firstName, lastName,userName, rol, profilePic, edad, email}){
   
    return (
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img  src={profilePic} />
                </div>
            </div>
            <div className='lower-container'>
                <h3>{userName}</h3>
                <h4>{rol}</h4>
                <br/>
                <h5><b>Nombre:</b> {firstName}</h5>
                
                <h5><b>Apellido:</b> {lastName}</h5>
                <h5><b>Edad:</b> {edad} años</h5>
                
                <p><b>Email </b>{email}</p>
            </div>
            <div className='espacio'>

            </div>
        </div>
    )
}
export default Card;