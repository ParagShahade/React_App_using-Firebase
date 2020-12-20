import { findAllByDisplayValue } from '@testing-library/react';
import React, { useState,useEffect } from 'react';
import firebase from 'firebase'
import fire from './config_file/fire.js';

const Playerlogin = (props) => {

    const {
        user_email,
        setUnameError,
        setEmail,
        user_passwd,
        setpasswd,
        controlLogin,
        controlSignup,
        authWithGoogle,
        Already_userAccount,
        setAlreadyAccount,
        user_emailError,
        user_passwdError} = props;

        const [unmae,setUname]= useState({namE:""})

            
        
    return (
      
        <section className="login">
            <div className="loginContainer">
            <h1>Log in</h1>
            <label>Username</label> 
                <input 
                type="text" 
                name="namE"
                id="namE"
                autoFocus 
                placeholder="Enter your username"
                onChange = {(e) => setUname({...unmae,namE:e.target.value})} value={unmae.namE}
                />
                 <p className= "errorMsg">{setUnameError}</p>
                <label>Email ID</label> 
                <input 
                type="text" 
                autoFocus 
                placeholder="Enter your Email_id"
                required value={user_email} 
                onChange = {(e) => setEmail(e.target.value)}
                />
                <p className= "errorMsg">{user_emailError}</p>
                
                <label>Password</label> 
                <input 
                type="password" 
                autoFocus 
                placeholder="Enter your Password"
                required value={user_passwd} 
                onChange = {(e) => setpasswd(e.target.value)}
                />
                <p className= "errorMsg">{user_passwdError}</p>
                
                <div className ="btnContainer">
                
                <button class="button button1" onClick={authWithGoogle}>Continue with Google</button>

                    {Already_userAccount ?(
                        <>
                        <button class="button button1" onClick={controlLogin}>Sign in</button>
                        <p> Create Account here 
                            <span onClick= {()=> setAlreadyAccount(!Already_userAccount)}>Signup</span>  </p>
                            </>
                    ):(
                        <>
                        <button onClick={controlSignup}> Signup </button>
                        <p> Have an Account ?
                            <span onClick= {()=> setAlreadyAccount(!Already_userAccount)}>Signin</span>  </p>
                            </>
                    
                      
                    ) }
                   
                    </div>

             </div>
        </section>
       
    );
};
export default Playerlogin;