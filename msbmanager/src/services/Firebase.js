import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {storageSave, storageRemove, storageGet} from './Storage';
import {getFirestore} from "firebase/firestore";
import {collection, addDoc, getDocs, deleteDoc, doc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiOEGf-E4y84R8fywoaGUZVD6FVjPRVVk",
  authDomain: "msbmanager-30389.firebaseapp.com",
  projectId: "msbmanager-30389",
  storageBucket: "msbmanager-30389.appspot.com",
  messagingSenderId: "459603832870",
  appId: "1:459603832870:web:6395b9480db2f9029476e7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
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
      reject(error)
    });
  })
}

export const saveObras = (dados) => {
    return new Promise(async (resolve, reject) => {
        try{
            await addDoc(collection(db, "obras"), dados)
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}

export const getObras = () => {
    return new Promise(async (resolve, reject) => {
        try{
            const querySnapshot = await getDocs(collection(db, "obras"));
            let dados = []

            querySnapshot.forEach((doc) => {
                dados.push({
                    id: doc.id,
                    nome: doc.data().nome,
                    categoria: doc.data().categoria,
                    capa: doc.data().capa,
                    progresso: doc.data().progresso,
                    sinopse: doc.data().sinopse
                })
            });
            resolve(dados)
        } catch (error) {
            reject(error)
        }
    })
}

export const deleteObras = (id) => {
    return new Promise(async (resolve, reject) => {
        try{
            await deleteDoc(doc(db, "obras", id))
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}

export const isAuthenticated = () => storageGet("TOKEN_KEY") !== null;
export const getToken = () => storageGet("TOKEN_KEY")
