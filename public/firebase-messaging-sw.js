importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBNPdPJS-0VtwgHVLi2mrymIS807zQWLCc",
    authDomain: "quiz-pwa-84457.firebaseapp.com",
    projectId: "quiz-pwa-84457",
    storageBucket: "quiz-pwa-84457.appspot.com",
    messagingSenderId: "356220240019",
    appId: "1:356220240019:web:1d79692d20bfd66e9fcd66"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();