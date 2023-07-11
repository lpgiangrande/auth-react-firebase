// Vériier si on est connecté - condition

import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Outlet, useLocation, Navigate } from "react-router-dom";

export default function Private() {
  const { currentUser } = useContext(UserContext);
  console.log("PRIVATE, currentUser");

  // Renvoi à l'accueil si l'user n'existe pas
  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

// Navigate =  composant react de Router qui permet des redirections de manière programmatique
// Outlet = Où on veut montrer le contenu de la route imbriquée - sortie
