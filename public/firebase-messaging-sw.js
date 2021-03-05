importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyA6CnlkLPwN-lGtWThZsa17vuYe4ORVrvo",
  authDomain: "expense-app-5c146.firebaseapp.com",
  projectId: "expense-app-5c146",
  storageBucket: "expense-app-5c146.appspot.com",
  messagingSenderId: "1094205179595",
  appId: "1:1094205179595:web:046dd90c50a6cec0b87d4e"
};

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();