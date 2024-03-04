import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../adduser/add.css";
import toast from 'react-hot-toast';

const EditCourse = () => {

 const course = {
    courseCode:"",
    courseName:"",
    section:"",
    semester:"",
    student:""
    
  }


 const {id} = useParams();
 const navigate = useNavigate();
 const [user, setUser] = useState(course);

 const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value});
    console.log(user);
 }

 useEffect(()=>{
    axios.get(`http://localhost:8000/course/getone/${id}`)
    .then((response)=>{
        setUser(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])


 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/course/update/${id}`, user)
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
                <label htmlFor="courseCode">courseCode</label>
                <input type="text" value={user.courseCode} onChange={inputChangeHandler} id="courseCode" name="courseCode" autoComplete='off' placeholder='courseCode' />
            </div>
           
            <div className="inputGroup">
                <label htmlFor="courseName">courseName</label>
                <input type="text" value={user.courseName} onChange={inputChangeHandler} id="courseName" name="courseName" autoComplete='off' placeholder='courseName' />
            </div>
            <div className="inputGroup">
                <label htmlFor="section">section</label>
                <input type="text" value={user.section} onChange={inputChangeHandler} id="section" name="section" autoComplete='off' placeholder='section' />
            </div>
            <div className="inputGroup">
                <label htmlFor="semester">semester</label>
                <input type="text" value={user.semester} onChange={inputChangeHandler} id="semester" name="semester" autoComplete='off' placeholder='semester' />
            </div>
          
            <div className="inputGroup">
                <label htmlFor="student">student</label>
                <input type="text" value={user.student} onChange={inputChangeHandler} id="student" name="student" autoComplete='off' placeholder='student' />
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE COURSE</button>
            </div>
        </form>
    </div>
  )
}

export default EditCourse