import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name:"",
        password:""
    })

    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:8000/login", user)
        .then(res => {
            if (user.name == "Admin") {
                alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/student")
            }else
            {
                console.log(user.name)
                alert(res.data.message)
                setLoginUser(res.data.user)
                navigate("/allcourse")
            }
            
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter your Name"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/")}>Register</div>
        </div>
    )
}

export default Login