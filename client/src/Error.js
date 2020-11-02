import React from 'react';
import Nav from './Components/Nav/Nav';
import bannerError from './404Nuevo.png';

export default function Error(){

    return (
        <div>
            <Nav/>
            <img  src={bannerError} width="100%"/>

        </div>
        
    )

}