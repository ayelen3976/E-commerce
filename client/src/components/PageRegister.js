import React from 'react';
import Register from '../Containers/register';
import Nav from './Nav';



class PageRegister extends React.Component {
    render(){
        return (

            <div  > 
                <Nav/>
                    
                <div >
                    
                    <Register/>

                </div>

            </div>
        )
    }
}

export default PageRegister;