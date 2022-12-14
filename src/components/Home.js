import "../styles/home.css";
import Navbar from "./Navbar.js";
import { authorization_link } from "../.env.js";

const Home = () => {
  const login = () => {
    window.location.href = authorization_link;
  };

  return (
    <div id="main">
      <Navbar btn1="How it works" btn2="About" user=""/>
      <div id="login-body">
        <h1 className="description">
          Make personalized playlists with your favourite artists, songs or
          discover new music with playlists based on your musical tastes.
        </h1>
        <button onClick={login} className="home-btn">
          LETS DISCOVER
        </button>
      </div>
    </div>
  );
};

export default Home;
