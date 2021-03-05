import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA6CnlkLPwN-lGtWThZsa17vuYe4ORVrvo",
  authDomain: "expense-app-5c146.firebaseapp.com",
  projectId: "expense-app-5c146",
  storageBucket: "expense-app-5c146.appspot.com",
  messagingSenderId: "1094205179595",
  appId: "1:1094205179595:web:046dd90c50a6cec0b87d4e"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


export function requestPermission() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                    //alert(currentToken)
                    //prompt('Token', currentToken)
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');
 
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
 }