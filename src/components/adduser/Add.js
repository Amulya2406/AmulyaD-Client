import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css";
import toast from 'react-hot-toast';

const Add = () => {

  const users = {
	StudentNumber: "",
	password:"",
	fname:"",
	lname:"",
	address:"",
	city:"",
	PhoneNo:"",
	email:"",
	program:""
}

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setUser({...user, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create", user)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
  }


  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Add new user</h3>
        <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
                <label htmlFor="StudentNumber">StudentNumber</label>
                <input type="text" onChange={inputHandler} id="StudentNumber" name="StudentNumber" autoComplete='off' placeholder='StudentNumber' />
            </div>
            <div className="inputGroup">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={inputHandler} id="password" name="password" autoComplete='off' placeholder='password' />
            </div>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" onChange={inputHandler} id="fname" name="fname" autoComplete='off' placeholder='First name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" onChange={inputHandler} id="lname" name="lname" autoComplete='off' placeholder='Last name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="address">Address</label>
                <input type="text" onChange={inputHandler} id="address" name="address" autoComplete='off' placeholder='address' />
            </div>
            <div className="inputGroup">
                <label htmlFor="city">city</label>
                <input type="text" onChange={inputHandler} id="city" name="city" autoComplete='off' placeholder='city' />
            </div>
            <div className="inputGroup">
                <label htmlFor="PhoneNo">PhoneNo</label>
                <input type="text" onChange={inputHandler} id="PhoneNo" name="PhoneNo" autoComplete='off' placeholder='PhoneNo' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <label htmlFor="program">program</label>
                <input type="text" onChange={inputHandler} id="program" name="program" autoComplete='off' placeholder='program' />
            </div>
            
            <div className="inputGroup">
                <button type="submit">ADD USER</button>
            </div>
        </form>
    </div>
  )
}

export default Add