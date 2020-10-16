import React from 'react';
import Register from '../Containers/register';


class PageRegister extends React.Component {
    render(){
        return (
           
            <div className="row"> 
            
                <div className="col-md-4 col-md-offset-4">
                    <Register/>

                </div>

            </div>
        )
    }
}

export default PageRegister;