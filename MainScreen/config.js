import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "api key from firebase",
  authDomain: "authorization key from firebase",
  databaseURL: "databaseUrl from firebase",
  projectId: "project id from firebase",
  storageBucket: "storage bucket key from firebase",
};

let app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
