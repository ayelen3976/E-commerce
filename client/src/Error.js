import React from 'react';
import Nav from './Components/Nav/Nav';
import bannerError from './3733.jpg';

export default function Error(){

    return (
        <div>
            <Nav/>
            <img  src={bannerError} width="100%"/>

        </div>
        
    )

}