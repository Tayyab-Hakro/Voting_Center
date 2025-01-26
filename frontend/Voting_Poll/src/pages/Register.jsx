import { useState } from "react";
import axios from "axios";
import "../Components/Css/Register.css";
import { useNavigate} from 'react-router-dom'
const Register = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate =  useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await axios.post("http://localhost:3000/user/api1/login", {
          email: formData.email,
          password: formData.password,
        });
        setMessage(response.data.message);
        setError("");
        navigate("/")
        // Save the token in localStorage or cookies
        localStorage.setItem("token", response.data.token);
      } else {
        const response = await axios.post("http://localhost:3000/user/api1/signup", {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        setMessage(response.data.message);
        setError("");
        setIsLogin(true); // Switch to login after successful signup
      }
    } catch (err) {
      setError(err.response.data.message || "Something went wrong.");
      setMessage("");
    }
  };

  return (
    <div className="container">
      <div className="card">
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

        {isLogin ? (
          <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />

              <button type="submit">Login</button>
            </form>
            <div className="links">
              <button onClick={() => setIsLogin(false)}>Create an account</button>
              <button>Forgot password?</button>
            </div>
          </>
        ) : (
          <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleInputChange}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />

              <button type="submit" className="signup">
                Sign Up
              </button>
            </form>
            <div className="links">
              <button onClick={() => setIsLogin(true)}>
                Already have an account? Login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
