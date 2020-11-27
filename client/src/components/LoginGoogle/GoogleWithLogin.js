import React from 'react';
import { GoogleLogin } from 'react-google-login';
import {connect} from 'react-redux';
import {loginWithGoogle} from '../../Redux/Actions/auth'

function LoginWithGoogle ({loginWithGoogle}){

    const responseGoogle = (response) =>{
        console.log(response.profileObj)
        let user = {
            email: response.profileObj.email,
            firstName: response.profileObj.givenName,
            lastName :response.profileObj.familyName,
            profilePic: response.profileObj.imageUrl
        }
        loginWithGoogle(user)
    }
    return (
        <GoogleLogin
            clientId="62061022482-12r31a4h20esckp1k1khutgpdpprrmq5.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

const mapDispatchToProps = {
    loginWithGoogle,
}

export default connect(null,mapDispatchToProps)(LoginWithGoogle)