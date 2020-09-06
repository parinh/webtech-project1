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
export const donatorCollection = db.collection('donator')
export const openingdonateCollection = db.collection('openingdonate')
export const warehouseCollection = db.collection('warehouse')


// users -> admin,donator => user , pea 

// donate => id, user_id(pk), history => หน้ากาก,ยา, 

// opendonate => id, user_id(pk), donate_id?(pk) => ใครเปิดรับบริจาค. ยอด3 ล้าน     , status => เต็ม,คงเหลือ 
/// user1 = 30000, user2 = 50000 total = 80k 


