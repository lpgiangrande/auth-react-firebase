import { createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

// Contexte
export const UserContext = createContext();

// Composant d'ordre supérieur - retourne UserContext data
export function UserContextProvider(props) {
  // sign up user
  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd);
  // sign in user
  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  // écouter les changements d'état d'authentification de l'utilisateur avec onAuthStateChanged(firebase, CB)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });
    return unsubscribe;
  }, []);

  // modal
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  });

  const toggleModals = (modal) => {
    if (modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true,
      });
    }
    if (modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false,
      });
    }
    if (modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ modalState, toggleModals, signUp, currentUser, signIn }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}

/* 
Explications useEffect - loading data

useEffect (hook) va exécuter fonction CB toutes les x fois
-> mettre un [] va se lancer seulement une fois après la 1ere création d'un composant

setLoadingData empêche de logger avant d'avoir récupérer les données de l'user
On le met sur false quand on a récupérer ses données 

Une fois les données récupérées, 
{!loadingData && props.children}
on envoie à l'application
*/
