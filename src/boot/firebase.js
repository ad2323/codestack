import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'

// CONFIG HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDPx3Zmz_GAgEFJLPP-4MjypzUqxXfrZEo",
  authDomain: "codestack-cbcab.firebaseapp.com",
  databaseURL: "https://codestack-cbcab.firebaseio.com",
  projectId: "codestack-cbcab",
  storageBucket: "",
  messagingSenderId: "361280912056",
  appId: "1:361280912056:web:da83b528e791e6cb",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
// "async" is optional
export default async ({ Vue }) => {
  // something to do
  Vue.use(firestorePlugin)
  Vue.prototype.$db = db
}
