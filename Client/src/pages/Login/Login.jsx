



 import axios from "axios";
 import { useContext, useState } from "react";
 import { useNavigate,Link } from "react-router-dom";
 import { AuthContext } from "../../context/AuthContext";
 import "./Login.css";

 const Login = () => {
   const [credentials, setCredentials] = useState({
     username: undefined,
     password: undefined,
   });

   const { loading, error, dispatch } = useContext(AuthContext);

   const navigate = useNavigate()
  

   const handleChange = (e) => {
     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
   };

   const handleClick = async (e) => { e.preventDefault();      dispatch({ type: "LOGIN_START" });
     try {
       const res = await axios.post("/auth/login", credentials);
       dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
       navigate("/")
     } catch (err) {
       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
     }
  };

  return(
    <div className="bg">
    <div className="wrapper">
        <form className="login" onSubmit={handleClick}>
          <p className="title">Login</p>
          <input onChange={handleChange} id="username" className="username" type="text" placeholder="Username" autofocus />
          {/* <i style={{color:"black"}}  className="fa fa-user " /> */}
          <input  onChange={handleChange} id="password" className="password"  type="password" placeholder="Password" />
          
          {/* <i className="fa fa-key" /> */}
          <a >Dont have a account ?</a><span><Link to="/register" >Register here</Link></span>
          <button>
            <i className="spinner" />
            <span disabled={loading}   className="">Log in</span>
          </button>
        </form>
        {error && <span>{error.message}</span>}
        <p />
      </div>
      </div>
    );
  }


  export default Login;