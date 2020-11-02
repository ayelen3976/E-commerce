import React from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import Button from 'react-bootstrap/Button'
import Logo from './logo-ecommerceeee.png'



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
         
                
              
         <div style={{position:"absolute", textAlign: "center",
        left:"33%",bottom:"30%"}}>
             <img style={{border: "none", display: "flex"}} src={Logo}/> 
         <Button variant="outline-light" size="lg"  ><Link to = '/products'  style={{ color: "white", textDecoration: "none" }}>Entrar</Link>
         </Button>
            </div>
         
           
            
        </div>
    );

};

export default Home;