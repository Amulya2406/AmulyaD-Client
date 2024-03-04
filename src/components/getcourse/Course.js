import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Trash } from 'lucide-react';
import toast from "react-hot-toast";
import "./course.css";
import { Link } from 'react-router-dom'

const Course = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{

    const fetchData = async()=>{
        const response = await axios.get("http://localhost:8000/course/getall");
        setUsers(response.data);
    }

    fetchData();

  },[])

  const deleteUser = async(userId) =>{
      await axios.delete(`http://localhost:8000/course/delete/${userId}`)
      .then((respones)=>{
        setUsers((prevUser)=> prevUser.filter((user)=> user._id !== userId))
        toast.success(respones.data.msg, {position: 'top-right'})
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  return (
    <div className='userTable'>
        <Link to={"/course/add"} className='addButton'>Add Course</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead> 
                <tr>
                    <th>S.No.</th>
                    
                    
                    <th>courseCode</th>
                    <th>courseName</th>
                    <th>section</th>
                    <th>semester</th>
                    <th> student</th>
                    
                    

                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index)=>{
                        return(
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.courseCode}</td>
                           
                            <td>{user.courseName}</td>
                            <td>{user.section}</td>
                            <td>{user.semester}</td>
                           
                            <td>{user.student}</td>
                            <td className='actionButtons'>
                                <button onClick={()=> deleteUser(user._id)}><Trash /></button></td>
                            <td className='actionButtons'>
                                <Link to={`/course/edit/`+user._id}><i className="update">update</i></Link>
                            </td>
                        </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default Course