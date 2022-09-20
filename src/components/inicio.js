import { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import { getToken } from "../services/token.js"
import { getUserInfo } from "../services/user.js"
import {BsHouseDoorFill} from 'react-icons/bs'
import { GiPowerButton } from 'react-icons/gi'
import { Sidebar } from "./Sidebar"
import "../styles/Inicio.css"

const Inicio = () => {
  let code = window.location.search.split("=")[1]
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({})

  useEffect(() => {
    if (token == null || token === undefined) {
      getToken(code).then(setToken)
    }  
    if (user !== {} && token != null )
      getUserInfo(token).then(setUser)
  }, [code, token, user])

  return (
    <div>
      <Navbar btn1={<BsHouseDoorFill/>} btn2={<GiPowerButton/>} user={user.display_name}/>
      <Sidebar token={token} />
      <div id="sntc-button">
        <h1 className="sentence">
          Crea una playlist a tu gusto y totalmente personalizada eligiendo
          tus artistas y canciones favoritas
        </h1>
        <button className="create-btn">CREAR PLAYLIST A TU GUSTO</button>
        <h1 className="sentence">
          O bien obtén una creada por nosotros y descubre nueva música
        </h1>
        <button className="get-btn">OBTENER</button>
      </div>
    </div>
  );
};

export default Inicio;

