import {initializeApp} from "firebase/app"
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {storageSave, storageRemove, storageGet} from './Storage'

const firebaseConfig = {
  apiKey: "AIzaSyCiOEGf-E4y84R8fywoaGUZVD6FVjPRVVk",
  authDomain: "msbmanager-30389.firebaseapp.com",
  projectId: "msbmanager-30389",
  storageBucket: "msbmanager-30389.appspot.com",
  messagingSenderId: "459603832870",
  appId: "1:459603832870:web:6395b9480db2f9029476e7"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth();

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((usuario) => {
      storageSave("TOKEN_KEY", usuario.user.uid)
      resolve(true)
    })
    .catch((error) => {
      storageRemove("TOKEN_KEY")
      reject(error)
    })
  })
}

export const logoff = () => {
  return new Promise((resolve, reject) => {
    storageRemove("TOKEN_KEY")
    signOut(auth).then(() => {
      resolve()
    }).catch((error) => {
      reject()
    });
  })
  
  
}

export const isAuthenticated = () => storageGet("TOKEN_KEY") !== null;
export const getToken = () => storageGet("TOKEN_KEY")
