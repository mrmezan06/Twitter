import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="WebName">
          <h1>Twitter Media</h1>
          <h6>See what's happening in the world right now</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <Login />
    </div>
  );
};

function Login() {
  return (
    <div className="a-right">
      <form className="infoForm authForm loginForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput loginInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput loginInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account Sign up
          </span>
          <button className="button info-button">Login</button>
        </div>
      </form>
    </div>
  );
}

// const SignUp = () => {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Signup</h3>
//         <div>
//           <input
//             type="text"
//             placeholder="First name"
//             className="infoInput"
//             name="firstname"
//           />
//           <input
//             type="text"
//             placeholder="Last name"
//             className="infoInput"
//             name="lastname"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             className="infoInput"
//             name="username"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Password"
//             className="infoInput"
//             name="password"
//           />
//           <input
//             type="text"
//             placeholder="Confirm password"
//             className="infoInput"
//             name="confirmpass"
//           />
//         </div>
//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Already have an account? Login!
//           </span>
//         </div>
//         <button className="button info-button" type="submit">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// };

export default Auth;
