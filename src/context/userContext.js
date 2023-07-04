import { createContext, useState, useEffect } from "react";

// Contexte
export const UserContext = createContext();

// Composant d'ordre supérieur - retourne UserContext data
export function UserContextProvider(props) {
  const [modalState, setModalState] = useState({
    signUpModal: true,
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
    <UserContext.Provider value={{ modalState, toggleModals }}>
      {props.children}
    </UserContext.Provider>
  );
}
