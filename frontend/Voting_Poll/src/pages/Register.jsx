import  { useState } from "react";
import "../Components/Css/Register.css";

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="card">
        {isLogin ? (
          <>
            <h2>Login</h2>
            <form>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
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
            <form>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter your username" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />

              <button type="submit" className="signup">
                Sign Up
              </button>
            </form>
            <div className="links">
              <button onClick={() => setIsLogin(true)}>Already have an account? Login</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
