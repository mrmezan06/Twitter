import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../../actions/AuthAction";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  console.log(loading);
  const [isLogin, setIsLogin] = React.useState(true);
  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [confirm, setConfirm] = React.useState(true);

  const handleSignup = (e) => {
    e.preventDefault();
    if (data.password === data.confirmpass) {
      setConfirm(true);
      dispatch(signup(data));
    } else {
      setConfirm(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(data));
  };
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="WebName">
          <h1>Twitter Media</h1>
          <h6>See what's happening in the world right now</h6>
        </div>
      </div>
      {isLogin ? (
        <div className="a-right">
          <form className="infoForm authForm loginForm" onSubmit={handleLogin}>
            <h3>Log In</h3>

            <div>
              <input
                type="text"
                placeholder="Username"
                className="infoInput loginInput"
                name="username"
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="password"
                className="infoInput loginInput"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>

            <div>
              <span
                style={{ fontSize: "12px", cursor: "pointer" }}
                onClick={() => setIsLogin(false)}
              >
                Don't have an account?{" "}
                <span style={{ fontWeight: 700 }}>Sign up</span>
              </span>
            </div>
            <button className="button info-button" disabled={loading}>
              {loading ? "Loading..." : "Log In"}
            </button>
          </form>
        </div>
      ) : (
        <div className="a-right">
          <form className="infoForm authForm" onSubmit={handleSignup}>
            <h3>Signup</h3>
            <div>
              <input
                type="text"
                placeholder="First name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Username"
                className="infoInput"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="infoInput"
                name="password"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="infoInput"
                name="confirmpass"
                onChange={handleChange}
              />
            </div>
            <span
              style={{
                display: confirm ? "none" : "block",
                color: "red",
                fontSize: "12px",
                alignSelf: "flex-start",
              }}
            >
              * Password is not matched!
            </span>
            <div>
              <span
                style={{ fontSize: "12px", cursor: "pointer" }}
                onClick={() => setIsLogin(true)}
              >
                Already have an account?{" "}
                <span style={{ fontWeight: 700 }}>Login</span>
              </span>
            </div>
            <button
              className="button info-button"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Signup"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Auth;

// 52:21
