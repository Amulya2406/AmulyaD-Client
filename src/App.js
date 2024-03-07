import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';
import Course from './components/getcourse/Course';
import AllCourse from './components/getcourse/AllCourse';
import Addcourse from './components/addcourse/Addcourse';
import EditCourse from './components/updatecourse/EditCourse';
import Register from './components/register/Register';
import Login from './components/login/Login';
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path='/student'
     element = {
        user && user._id ?  <User setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
      }
     
      >
    </Route>
    <Route exact path='/allcourse'
     element = {
        user && user._id ?  <AllCourse setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
      }
     
      >
    </Route>
      <Route path='/login' element={<Login setLoginUser={setLoginUser}/>}/>

      <Route path='/' element={<Register/>}/>
      <Route path='/student' element={<User/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/allcourse' element={<AllCourse/>}/>
      <Route path='/course/add' element={<Addcourse/>}/>
      <Route path='/course/edit/:id' element={<EditCourse/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
