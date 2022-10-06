import "../styles/Navbar.css";

const killSession = () => {
  window.location.href = "https://accounts.spotify.com/logout"
}

const goHome = () => {
  window.location.href = "http://localhost:3000/"
}

const Navbar = (props) => {
  return (
    <div id="navbar">
      <img
        alt=""
        className="spotify-logo"
        src={require("../images/Spotify_Logo_RGB_White.png")}
      />
      <button onClick={goHome} className="btn1">{props.btn1}</button>
      <button onClick={killSession} className="btn2">{props.btn2}</button>
      <p className="show-user">{props.user}</p>
    </div>
  );
};
 
export default Navbar;