import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBP3Eejl4FCCmSUPXpwRNoMLE9A-mhFiak",
    authDomain: "starbuck-eaee6.firebaseapp.com",
    projectId: "starbuck-eaee6",
    storageBucket: "starbuck-eaee6.appspot.com",
    messagingSenderId: "688053249093",
    appId: "1:688053249093:web:b53fd8dcc0cb595d6bef2c",
    measurementId: "G-0BD2TDT7MJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebaseApp.auth()

export {auth}