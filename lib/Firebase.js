import firebase from 'firebase'
import 'firebase/firestore'

var config = {
  apiKey: 'AIzaSyBy4apehGj6-ozhg1n7PWByvt-wGQllASc',
  authDomain: 'connected-car-3f879.firebaseapp.com',
  databaseURL: 'https://connected-car-3f879.firebaseio.com',
  projectId: 'connected-car-3f879',
  storageBucket: 'connected-car-3f879.appspot.com',
  messagingSenderId: '232453351241'
}

firebase.initializeApp(config)
console.log('Firebase initialized')

export const realtime = firebase.database()
