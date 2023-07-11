import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="container p-4">
      <h1 className="display-4  text-light text-center">
        {currentUser ? "Welcome" : "Sign Up or Sign In"}
      </h1>
    </div>
  );
}
