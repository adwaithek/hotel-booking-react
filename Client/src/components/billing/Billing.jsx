import React from 'react'
import "./billing.css"
import { BASE_URL } from '../../utils/config'
import { useState } from 'react'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import useStripe, { useElements } from "@stripe/react-stripe-js"

function Billing() {


    const stripe=useStripe()
    const element=useElements()

  

 

  const navigate = useNavigate()

  

  const [booking,setBooking]= useState({name:"",email:"",phone:"",arrive:"",depart:"",guestSize:"",comments:""});

  
let name,value;

  const handleChange=e=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setBooking({...booking, [name]:value})
  }

  const handleClick= async (e)=>{
   e.preventDefault();


   const{name,email,phone,arrive,depart,guestSize,comments}=booking;

    const res=      await fetch("/booking",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({

        name,email,phone,arrive,depart,guestSize,comments

      })


    });

    const data=await res.json();

    if(data.status === 500 || !data  ){
      window.alert("invalid booking");
      console.log("invalid registration");
    }
    else{
      window.alert("booking success");
      console.log("bookign sucess");

      navigate('/')

    }



  }

 







  return (
    <form  method='POST' >
    
    <div className="bc">
      <h2 className="heading">Booking &amp; contact</h2>
      <div className="controls">
        <input type="text" id="name" className="" placeholder='Name' onChange={handleChange} />
        {/* <label >Name</label> */}
      </div>
      <div className="controls">
        <input type="text" id="email" className="floatLabel" name="email"  placeholder='email' onChange={handleChange} />
        {/* <label htmlFor="email">Email</label> */}
      </div>       
      <div className="controls">
        <input type="tel" id="phone" className="floatLabel" name="phone" placeholder='phone' onChange={handleChange} />
        {/* <label htmlFor="phone">Phone</label> */}
      </div>
      
    </div>
    {/*  Details */}
    <div className="form-group">
      <h2 className="heading">Details</h2>
      <div className="grid">
        <div className="col-1-4 col-1-4-sm">
          <div className="controls">
            <input type="date" id="arrive" className="floatLabel" name="arrive" defaultValue="<?php echo date('Y-m-d'); ?>" onChange={handleChange} />
            <i className="fa fa-calendar" />
          </div>      
        </div>
        <div className="col-1-4 col-1-4-sm">
          <div className="controls">
            <input type="date" id="depart" className="floatLabel" name="depart" defaultValue="<?php echo date('Y-m-d'); ?>" onChange={handleChange} />
         <i className="fa fa-calendar" />
          </div>      
        </div>
      </div>
      <div className="grid">
        <div className="col-1-3 col-1-3-sm">
          <div className="controls">
            <i className="fa fa-sort" />
            <select className="" id='guestSize' onChange={handleChange} > 
              <option value="blank" />
              <option value={1}>1</option>
              <option value={2} selected>2</option>
              <option value={3}>3</option>
            </select>
            <label htmlFor="fruit"><i className="fa fa-male" />&nbsp;&nbsp;People</label>
          </div>      
        </div>
        <div className="col-1-3 col-1-3-sm">
          <div className="controls">
            <i className="fa fa-sort" />
            <select className="floatLabel">
              <option value="blank" />
              <option value="deluxe" selected>With Bathroom</option>
              <option value="Zuri-zimmer">Without Bathroom</option>
            </select>
            <label htmlFor="fruit">Room</label>
          </div>     
        </div>
        <div className="col-1-3 col-1-3-sm">
          <div className="controls">
            <i className="fa fa-sort" />
            <select className="floatLabel">
              <option value="blank" />
              <option value="single-bed">Zweibett</option>
              <option value="double-bed" selected>Doppelbett</option>
            </select>
            <label htmlFor="fruit">Bedding</label>
          </div>     
        </div>
      </div>
      <div className="grid">
        <p className="info-text">Please describe your needs e.g. Extra beds, children's cots</p>
        <br />
        <div className="controls">
          <textarea name="comments" className="floatLabel" id="comments"  onChange={handleChange} />
          <label htmlFor="comments">Comments</label>
        </div>
        <button type="submit" value="Submit" className="col-1-4" onClick={handleClick} > P A Y</button>
      </div>  
    </div> {/* /.form-group */}
  </form>
);
}




export default Billing










// import React,{useState, useContext} from 'react'
// // import './booking.css'
// import {Form,FormGroup,ListGroup,ListGroupItem,Button} from 'reactstrap'
// import { useNavigate } from 'react-router-dom'
// import { AuthContext } from '../../context/AuthContext'
// import { BASE_URL } from '../../utils/config'

// function Booking({tour,avgRating}) {

  

//   const navigate = useNavigate()

//   const {user}= useContext(AuthContext)

//   const [booking,setBooking]= useState({
//     userId:user && user._id,
//     userEmail: user && user.email,
//     tourName: '',
//     fullName: ' ',
//     phone:'',
//     guestSize:1,
//     bookAt:'' ,
//     })

  


//   const handleChange=e=>{
//     setBooking(prev=>({...prev, [e.target.id]:e.target.value}))
//   }

//   const serviceFee =10
// // const totalAmount =Number(price) * Number(booking.guestSize) + Number(serviceFee)
// //send data to server 
// const handleClick = async e=>{
//   e.preventDefault()

//   console.log(booking)

//   try {
//     if(!user|| user===undefined || user===null){
//       return alert('Please sign in')
//     }

//     const res= await fetch(`${BASE_URL}/booking`,{
//       method:'post',
//       headers:{
//         'content-type':'application/json'
//       },
//       credentials:'include',
//       body:JSON.stringify(booking)
//     })

//     const result = await res.json()

//     if(!res.ok){
//       return alert(result.message)
//     }
//     navigate("/thank-you")

//   } catch (err) {
//     alert(err.message)
    
//   }
  

//   // console.log(credentials);
//   navigate("/thank-you")

// }


//   return (
//     <div className='booking'>
//        <div className='booking__top  d-flex align-items-center justify-content-between'>
//         <h3>$ <span className='person'>/per person</span></h3>
//         <span className='tour__rating d-flex align-items-center '>

//            <i class="ri-star-fill" ></i>
//               {/* {avgRating=== 0? null:avgRating}({reviews?.length}) */}
                    
//         </span>
//        </div>

// {/* ========booking form ====== */}

// <div className='booking__form'>
//   <h5>Information</h5>
//   <Form className='booking__info-form' onSubmit={handleClick} >
//     <FormGroup >
//       <input type='text' 
//       placeholder='Full Name'
//        id='fullname' 
//        required
//         onChange={handleChange} >
//       </input>
//     </FormGroup>
//       <FormGroup >
//       <input type='number' 
//       placeholder='Phone'
//        id='phone'
//         required
//          onChange={handleChange} >
//       </input>
//       </FormGroup>
//       <FormGroup className='d-flex align-items-center gap-3' >
//       <input type='date' placeholder='' id='bookAt' required onChange={handleChange} >
//       </input>
//       <input type='number' placeholder='Guest' id='guestSize' required onChange={handleChange} >
//       </input>
//       </FormGroup>
    
//   </Form>
// </div>







// {/* ========booking form ====== */}


// {/* ------booking bottom======= */}
// <div className='booking__bottom'>
//   <ListGroup>
//     <ListGroupItem className='border-0 px-0 '>
//       <h5 className='d-flex align-items-center gap-1'><i class="ri-close-line"></i>1 person</h5>
//       <span></span>
//     </ListGroupItem>
//     <ListGroupItem className='border-0 px-0'>
//       <h5>Service charge</h5>
//       <span>${serviceFee}</span>
//     </ListGroupItem>
//     <ListGroupItem className='border-0 px-0 total'>
//       <h5>Total</h5>
//       <span></span>
//     </ListGroupItem>
//   </ListGroup>


//   <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
// </div>

//     </div>
//   )
// }

// export default Booking