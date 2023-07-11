// Montrer un contenu sur la route privée  <Route path="/private/private-home" element={<PrivateHome />} />

import React from "react";
import cat from "../PrivateHome/cat.gif";

export default function PrivateHome() {
  return (
    <div className="container p-5">
      <h1 className="display-3 text-light mb-4">Home Sweet Private Home</h1>
      <img src={cat} alt="gif chat" />
    </div>
  );
}
