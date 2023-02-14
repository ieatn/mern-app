import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TokenContext } from "../App";
import Navbar from "../components/Navbar";

const Login = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useContext(TokenContext)

    const login = async (e) => {
        e.preventDefault()

        fetch(`http://localhost:4000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                username, password,
            })
        })
        // if login is successful, to go home page. 
        .then(({token}) => {
            setToken(token)
            navigate('/')
        })
        .catch((err) => {
            console.log(err.message)
            throw new Error('wrong password')
        })
    }

    return ( 
        <>
            <Navbar />
            <h1>Login</h1>
            <form className="form">
                <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={login}>login</button>
            </form>
        </>        
     );
}
 
export default Login;