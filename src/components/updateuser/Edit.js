import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../adduser/add.css";
import toast from 'react-hot-toast';

const Edit = () => {

 const users = {
	StudentNumber: "",
	fname:"",
	lname:"",
	address:"",
	city:"",
	PhoneNo:"",
	email:"",
	program:""
}

 const {id} = useParams();
 const navigate = useNavigate();
 const [user, setUser] = useState(users);

 const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value});
    console.log(user);
 }

 useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone/${id}`)
    .then((response)=>{
        setUser(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])


 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`, user)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
 }

  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Update user</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="StudentNumber">StudentNumber</label>
                <input type="text" value={user.StudentNumber} onChange={inputChangeHandler} id="StudentNumber" name="StudentNumber" autoComplete='off' placeholder='StudentNumber' />
            </div>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" value={user.fname} onChange={inputChangeHandler} id="fname" name="fname" autoComplete='off' placeholder='First name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" value={user.lname} onChange={inputChangeHandler} id="lname" name="lname" autoComplete='off' placeholder='Last name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="address">address</label>
                <input type="text" value={user.address} onChange={inputChangeHandler} id="address" name="address" autoComplete='off' placeholder='address' />
            </div>
            <div className="inputGroup">
                <label htmlFor="city">city</label>
                <input type="text" value={user.city} onChange={inputChangeHandler} id="city" name="city" autoComplete='off' placeholder='city' />
            </div>
            <div className="inputGroup">
                <label htmlFor="PhoneNo">PhoneNo</label>
                <input type="text" value={user.PhoneNo} onChange={inputChangeHandler} id="PhoneNo" name="PhoneNo" autoComplete='off' placeholder='PhoneNo' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" value={user.email} onChange={inputChangeHandler} id="email" name="email" autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <label htmlFor="program">program</label>
                <input type="text" value={user.program} onChange={inputChangeHandler} id="program" name="program" autoComplete='off' placeholder='program' />
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE USER</button>
            </div>
        </form>
    </div>
  )
}

export default Edit