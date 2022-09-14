import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { useLogin } from "../../Context/Authentication"
import Button from '@mui/material/Button';
import "./login.scss";

const Login = () => {

    const navigate = useNavigate()

    const [ token, setToken] = useLogin()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, password } = e.target;

        await fetch(`http://localhost:5000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: name.value.trim(),
                password: password.value.trim()
            }),
        },)
        .then(res => res.json())
        .then(data => {
            if(data.role=='admin') {
                navigate('/admin')
            } if(data.role=='teacher') {
                navigate('/teacher')
            } if (data.role=='student') {
                navigate('/student')
            }
        })
        .catch(err => console.log(err))

        
        



    }

    return(
        <div className="login__section">
        <form className="login__form" action="" onSubmit={handleSubmit}>
            <input className="login__input" name='name' type="text" placeholder="name" />
            <input className="login__input" name='password' type="text" placeholder="password" />
            <Button variant="contained" type="submit">login</Button>
        </form>
        </div>
    )
}

export default Login;