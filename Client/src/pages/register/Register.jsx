







 import React, { useState, useContext } from 'react'
// // import '../styles/login.css'
// // import { Container,Row,Col,Form,FormGroup,Button } from 'reactstrap'
 import { Link, useNavigate } from 'react-router-dom'

 import { Container,Row,Col,Form,FormGroup,Button } from 'reactstrap'
 import { AuthContext } from '../../context/AuthContext'



 import { BASE_URL } from '../../utils/config'
 import "./register.css"

 function Register() {


   const [credentials, setCredentials] = useState({
     userName: undefined,
     email: undefined,
     password: undefined

   })

   const { dispatch } = useContext(AuthContext)
   const navigate = useNavigate()

   const handleChange = e => {
     setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
   }

   const handleClick = async e => {
     e.preventDefault()


     try {
       const res = await fetch(`${BASE_URL}/auth/register`,{
       method:'post',
       headers:{
         'content-type':'application/json'
       },
       body:JSON.stringify(credentials)


       },

       )
       dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
       navigate("/login")
       

       }

    
     catch (err) {

       alert(err.message)

     }
 }
 return(
   <div className="bg">
   <div className="wrapper">
       <form className="login" onSubmit={handleClick}>
         <p className="title">REGISTER</p>
         <input  type='email' placeholder='email' required id='email' onChange={handleChange} />
         {/* <i></i> */}
         <input onChange={handleChange} id="username" className="username" type="text" placeholder="Username" autofocus required />
         {/* <i className="fa fa-user" /> */}
         <input  onChange={handleChange} id="password" className="password"  type="password" placeholder="Password" required />
         {/* <i className="fa fa-key" /> */}
          

         <a href="#">Forgot your password?</a>
         <button>
           <i className="spinner" />
           <span   className="">CREATE</span>
         </button>
       </form>
       
       <p />
     </div>
     </div>
   );
 }


 export default Register;







