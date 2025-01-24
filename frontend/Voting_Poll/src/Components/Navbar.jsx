// Navbar.jsx
import "../Components/Css/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">VotingCenter</div>
      <div className="navbar-center">
        <Link to="/create">Create</Link>
        <Link to="/">Home</Link>
        <a href="/aboutus">About Us</a>
      </div>
      <div className="navbar-right">
 
        <Link to="/register"><button className="signup-btn">Signup</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
