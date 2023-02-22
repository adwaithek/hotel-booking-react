import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const logout=()=>{
    dispatch({type:'LOGOUT'})
    navigate('/')
  }


  

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">RESIDÊNCIA</span>
        </Link>
       
{ user ? (

     <div>
      <h1>{user.username}</h1>
      
 <button className="navButtonLog" onClick={logout}>logout</button>
     </div>
    
      ):(

          <div className="navItems">
            <Link to='/register' ><button  className="navButton">Register</button></Link>
            
          <Link to='/login'>  <button className="navButton"  >Login</button></Link>
          </div>
  
 )}
      </div>
  
    </div>
  );
};

export default Navbar;