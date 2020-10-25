import React from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import Button from 'react-bootstrap/Button'



//Un componente que no es funcional no puede tener ciclos de vida
const Home = () => {

    return (
        <div >
            
            <ReactPlayer
            url={require('./videos/video.mp4')}
            width='100%'
            height='100%'
            playing
            muted
            loop
            />
         
                
                
         <Button variant="light" size="lg" ><Link to = '/products'>Entrar</Link></Button>
           
            
        </div>
    );

};

export default Home;