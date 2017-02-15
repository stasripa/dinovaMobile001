import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';

const config = {

  apiKey: 'AIzaSyDgTF1u6Abd-8vOtlf_GNrA2jM5t7rebjA',
  authDomain: 'restaurantnetwork-e6950.firebaseapp.com',
  databaseURL: 'https://restaurantnetwork-e6950.firebaseio.com',
  storageBucket: 'restaurantnetwork-e6950.appspot.com',
  messagingSenderId: '999008762598',

};
export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    firebase.initalizeApp(config);
    super(firebase.database().ref());
  }
}
