import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';
import Course from './components/getcourse/Course';
import Addcourse from './components/addcourse/Addcourse';
import EditCourse from './components/updatecourse/EditCourse';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <User/>,
    },
    {
      path:"/add",
      element: <Add/>,
    },
    {
      path:"/edit/:id",
      element: <Edit/>,
    },
    {
      path:"/course",
      element: <Course/>,
    },
    {
      path:"/course/add",
      element: <Addcourse/>,
    },
    {
      path:"/course/edit/:id",
      element: <EditCourse/>,
    },
  ])

  return (
    <div className="App">
       <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
