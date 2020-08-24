import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAYS9obYGmrvOUJ_A9-Ro7u4ppNXAgId9Q",
    authDomain: "project-1---sprint-2.firebaseapp.com",
    databaseURL: "https://project-1---sprint-2.firebaseio.com",
    projectId: "project-1---sprint-2",
    storageBucket: "project-1---sprint-2.appspot.com",
    messagingSenderId: "791596507897",
    appId: "1:791596507897:web:657633d8ce2e8349cf7828",
    measurementId: "G-WF3S9KMTYZ"
  };

const app = firebase.initializeApp( firebaseConfig )

export const db = app.firestore()
export const userCollection = db.collection('User')
export const donatorCollection = db.collection('donator')
export const openingdonateCollection = db.collection('openingdonate')


