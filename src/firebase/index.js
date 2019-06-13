import * as firebase from 'firebase';
import { devConfig } from './config';

// !firebase.apps.length && firebase.initializeApp(devConfig);
const app = firebase.initializeApp(devConfig);

console.log(devConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();
const db = firebase.firestore(app);

export { auth, db, provider };
