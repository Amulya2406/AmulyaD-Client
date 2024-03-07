import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./course.css";

const AllCourse = ({setLoginUser}) => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{

    const fetchData = async()=>{
        const response = await axios.get("http://localhost:8000/course/getall");
        setUsers(response.data);
    }

    fetchData();

  },[])


  return (
    <div className='userTable'>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>

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
                           
                        </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default AllCourse