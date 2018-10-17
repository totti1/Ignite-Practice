import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAaX08lvkLb8meh3vTvAGQbnvQguUvI_98",
  authDomain: "challengerui-18a5e.firebaseapp.com",
  databaseURL: "https://challengerui-18a5e.firebaseio.com",
  projectId: "challengerui-18a5e",
  storageBucket: "challengerui-18a5e.appspot.com",
  messagingSenderId: "793654880681"
}
const Firebase = firebase.initializeApp(config)
export default Firebase
