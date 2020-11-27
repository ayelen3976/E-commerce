import React from 'react';
import Register from '../Containers/register';
import Nav from './Nav/Nav';



class PageRegister extends React.Component {
    render(){
        return (

            <div  > 
                <Nav/>
                    
                <div className="col-md-6 ">
                    
                    <Register/>

                </div>

            </div>
        )
    }
}

export default PageRegister;