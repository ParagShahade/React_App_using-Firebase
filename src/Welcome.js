
import React, { Component } from 'react';
import Playerlogin from './Playerlogin';

const Welcome =  ({controlLogout,display}) => {
    
    
    

    return(
        
        <section className="Welcome">
        <nav>
        <h1>Hi, {display}</h1> 
             
        </nav>
        <button onClick={controlLogout}>Logout</button>   
           
        </section>
    
    )
}

export default Welcome;
