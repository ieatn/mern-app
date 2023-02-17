import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate()
    const {isAuthenticated, login} = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch(`http://localhost:4000/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify({
                    username, password,
                })
            })
            const {token} = await res.json()
            if (token) {
                login()
                navigate('/')
            }
        } catch (err) {
            console.log(err.message)
            throw new Error('wrong password')
        }
    }

    return ( 
        <>
            <Navbar />
            <h1>Login</h1>
            <form className="form">
                <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={loginUser}>login</button>
            </form>
        </>        
     );
}
 
export default Login;