import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBzX8-26w_7TTNjg6wnOkGOVV2I5KkM_ek",
    authDomain: "semana04-52dd1.firebaseapp.com",
    databaseURL: "https://semana04-52dd1.firebaseio.com",
    projectId: "semana04-52dd1",
    storageBucket: "semana04-52dd1.appspot.com",
    messagingSenderId: "535986398629",
    appId: "1:535986398629:web:afff4f40d0103e13c5b44c"
  };
  // Initialize Firebase
const configFirebase = firebase.initializeApp(firebaseConfig);

  export default configFirebase