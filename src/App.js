import React,{useState,useEffect, Component} from "react";
import './App.css';
import Playerlogin from './Playerlogin';
import fire from './config_file/fire.js';
import Welcome from './Welcome';
import firebase from 'firebase'

 
const App = () => {
  const[unmae,setUname]=useState({namE:''});
  const [unmae_error,setUnameError]=useState('');
  const [user_name ,setUser]=useState('');
  const [user_email ,setEmail]=useState('');
  const [user_passwd ,setpasswd]=useState('');
  const [user_emailError ,setEmailError]=useState('');
  const [user_passwdError ,setPasswdError]=useState('');
  const [Already_userAccount ,setAlreadyAccount]=useState('false');
 const[currentUser,setCurrenntUser]=useState();
  
//FireBase Sign
  const controlLogin = unmae => {
    console.log(unmae);
    fire
    .auth()
    .signInWithEmailAndPassword(user_email,user_passwd)
    
    .catch((err) => {
      switch(err.code){
        case "auth/invalid-email":
            case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
              setPasswdError(err.message);
              break;
              case "auth/Enter username":
                setUnameError(err.message);
      }
    });
  };
  //Firebase SignUp
  const controlSignup = () => {
    fire
    .auth()
    .createUserWithEmailAndPassword(user_email,user_passwd)
    .catch((err) => {
      switch(err.code){
        case "auth/email-already-present":
          case "auth/Invalidemail":
            setEmailError(err.message);
            break;
      }
    });
  };
  //Singout from the page
  const controlLogout= () => {
      fire.auth().signOut();
  
  };
  //Display UserName
  const display = unmae => {
    setUname({
      namE:unmae
    })
    console.log(display);
  }
  const authWithGoogle = () =>{
    const goo  = new  firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(goo)

};
  //FireBase Authentication Listener ,check whether user exist or not. 
  const authListener= () => {
    fire.auth().onAuthStateChanged((user_name) => {
    
      if(user_name){
        setUser(user_name);
        console.log('This is the user: ');//display for testing purpose
      }
      else{
        setUser("");
        // No user is signed in.
        console.log('There is no logged in user');
      }
    });
  };
useEffect (() => {

  authListener();
},[])



//Display output
     return (
      <div className="App">
        
      { user_name ? ( // Check whether user is login or not if user is login it show logout otherwise it will login again.
<div className="Hi">

       < Welcome display={display} controlLogout={controlLogout} />    
       {currentUser && <p>{currentUser.displayName}</p>}    
</div>

      ):(
      <Playerlogin
     
      unmae={unmae}
      unmae_error={unmae_error}
      user_email={user_email}
      setEmail={setEmail}
      user_passwd={user_passwd}
      setpasswd={setpasswd}
      controlLogin={controlLogin}
      controlSignup={controlSignup}
      authWithGoogle={authWithGoogle}
      Already_userAccount={Already_userAccount}
      setAlreadyAccount={setAlreadyAccount}
      user_emailError={user_emailError}
      user_passwdError={user_passwdError}
      />
      )

      }</div>
  
  );
};

export default App;
