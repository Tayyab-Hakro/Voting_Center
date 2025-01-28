import "../Components/Css/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const storedToken = localStorage.getItem("token");
  const navigate = useNavigate(); // Hook to handle navigation after logout

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">VotingCenter</div>
      <div className="navbar-center">
      <Link to="/">Home</Link>

        <Link to="/create">Create</Link>
        <a href="/aboutus">About Us</a>
      </div>
      <div className="navbar-right">
        {storedToken ? (
          <>
            <button className="signup-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/register">
            <button className="signup-btn">Signup</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
