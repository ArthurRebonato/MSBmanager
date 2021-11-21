import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import {storageSave, storageRemove, storageGet} from './Storage';
import {getFirestore} from "firebase/firestore";
import {collection, addDoc, getDocs, deleteDoc, doc, query, where} from "firebase/firestore";

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
      let erro = error.code
      if (erro === "auth/wrong-password")
        reject("Usuário ou Senha Inválidos!")
      else
        reject("Algo deu errado!")
    })
  })
}

export const registration = (email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      storageSave("TOKEN_KEY", userCredential.user.uid)
      resolve("Usuário registrado")
    })
    .catch((error) => {
      let erro = error.code;
      if (erro === "auth/invalid-email")
        reject("Email Inválido!")
      if (erro === "auth/weak-password")
        reject("Senha Inválida!")
      else
        reject("Usuário já cadastrado!")
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
            dados.token = getToken()
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

export const saveRecados = (dados) => {
  return new Promise(async (resolve, reject) => {
      try{
          await addDoc(collection(db, "recados"), dados)
          resolve()
      } catch (error) {
          reject(error)
      }
  })
}

export const getRecados = () => {
  return new Promise(async (resolve, reject) => {
      try{
          const querySnapshot = await getDocs(collection(db, "recados"));
          let dados = []

          querySnapshot.forEach((doc) => {
              dados.push({
                  id: doc.id,
                  nome: doc.data().nome,
                  email: doc.data().email,
                  assunto: doc.data().assunto,
                  mensagem: doc.data().mensagem
              })
          });
          resolve(dados)
      } catch (error) {
          reject(error)
      }
  })
}

export const getObrasbyID = (uid) => {
  return new Promise(async (resolve, reject) => {
      try{
          const q = query(collection(db, "obras"), where("token", "==", uid))
          const querySnapshot = await getDocs(q);
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
