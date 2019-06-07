import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDMyOk7j9yguNX055j07xdbbdMda8IKI80",
  authDomain: "parttimer-88182.firebaseapp.com",
  databaseURL: "https://parttimer-88182.firebaseio.com",
  projectId: "parttimer-88182",
  storageBucket: "parttimer-88182.appspot.com",
};

let app = firebase.initializeApp(firebaseConfig);

export const db = app.database();