import * as firebase from 'firebase';

const Config = {
    apiKey: "AIzaSyCdkWkD90IyhzS8bk_XzsOh8OBcH2SAGdY",
    authDomain: "notes-80e1f.firebaseapp.com",
    projectId: "notes-80e1f",
    storageBucket: "notes-80e1f.appspot.com",
    messagingSenderId: "1097200228215",
    appId: "1:1097200228215:web:6990c695b38a916c2ab372"
  };

  export const firebaseApp=firebase.initializeApp(Config);
  export const users=firebaseApp.databse().ref().child("users");
  export const noteTitle=firebaseApp.databse().ref().child("userNoteTitle");
  export const noteContent=firebaseApp.databse().ref().child("userNoteContent")