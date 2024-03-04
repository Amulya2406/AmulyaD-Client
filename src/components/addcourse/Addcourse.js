import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css";
import toast from 'react-hot-toast';

const Addcourse = () => {

  const courses = {
    courseCode:"",
    courseName:"",
    section:"",
    semester:"",
    student:""
    
  }

  const [user, setUser] = useState(courses);
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setUser({...user, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8000/course/create", user)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/course")
    })
    .catch(error => console.log(error))
  }


  return (
    <div className='addUser'>
        <Link to={"/course"}>Back</Link>
        <h3>Add new course</h3>
        <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
                <label htmlFor="courseCode">courseCode</label>
                <input type="text" onChange={inputHandler} id="courseCode" name="courseCode" autoComplete='off' placeholder='courseCode' />
            </div>
            <div className="inputGroup">
                <label htmlFor="courseName">courseName</label>
                <input type="text" onChange={inputHandler} id="courseName" name="courseName" autoComplete='off' placeholder='courseName' />
            </div>
            <div className="inputGroup">
                <label htmlFor="section">section </label>
                <input type="text" onChange={inputHandler} id="section" name="section" autoComplete='off' placeholder='section' />
            </div>
            <div className="inputGroup">
                <label htmlFor="semester">semester</label>
                <input type="text" onChange={inputHandler} id="semester" name="semester" autoComplete='off' placeholder='semester' />
            </div>
            <div className="inputGroup">
                <label htmlFor="student">student</label>
                <input type="text" onChange={inputHandler} id="student" name="student" autoComplete='off' placeholder='student' />
            </div>
            
            
            <div className="inputGroup">
                <button type="submit">ADD COURSE</button>
            </div>
        </form>
    </div>
  )
}

export default Addcourse