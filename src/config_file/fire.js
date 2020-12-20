
  import firebase from 'firebase';
  import 'firebase/app'
  
  const firebaseConfig = {
    apiKey: "AIzaSyCrwIE56SYQfwI9TpYytvQvSzefFKzA5lI",
    authDomain: "react-login-91abc.firebaseapp.com",
    databaseURL: "https://react-login-91abc-default-rtdb.firebaseio.com",
    projectId: "react-login-91abc",
    storageBucket: "react-login-91abc.appspot.com",
    messagingSenderId: "687182148069",
    appId: "1:687182148069:web:85e6055b52779fb6ecbf0c",
    measurementId: "G-R3T4NC2BZB"
  };
  // Initialize Firebase
  const fireBase = firebase.initializeApp(firebaseConfig);
  export default fireBase;