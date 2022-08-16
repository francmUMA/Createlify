import { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import { getToken } from "../services/token.js"
import { Sidebar } from "./Sidebar"

const Inicio = () => {
  let code = window.location.search.split("=")[1];
  const [token, setToken] = useState(null);

  const backHome = (link) => {
    window.location.href = link;
  };

  useEffect(() => {
    console.log({token, code})
    if (token == null || token === undefined) {
      console.log("Obtener token")
      getToken(code).then(setToken)
    } 
  }, [code, token]);

  return (
    <div id="main">
      <Navbar />
      <Sidebar token={token} />
      <button
        onClick={() => {
          return backHome("/");
        }}
      >
        Volver al menú principal
      </button>
    </div>
  );
};

export default Inicio;

