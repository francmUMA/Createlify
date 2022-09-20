import "../styles/Navbar.css";

const Navbar = (props) => {
  return (
    <div id="navbar">
      <img
        alt=""
        className="spotify-logo"
        src={require("../images/Spotify_Logo_RGB_White.png")}
      />
      <button className="btn1">{props.btn1}</button>
      <button className="btn2">{props.btn2}</button>
      <p className="show-user">{props.user}</p>
    </div>
  );
};
 
export default Navbar;