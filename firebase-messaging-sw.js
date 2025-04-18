importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyA2hHdz8fse7fMJP8ygu05LtPUDbAqPKVQ",
  authDomain: "dispo-des-bros.firebaseapp.com",
  projectId: "dispo-des-bros",
  messagingSenderId: "604239799472",
  appId: "1:604239799472:web:c1eb4d25703e47f6c88775"
});

const messaging = firebase.messaging();