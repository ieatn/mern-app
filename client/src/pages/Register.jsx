import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const register = async (e) => {
        e.preventDefault()
        fetch(`http://localhost:4000/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                username, password,
            })
        })
        // if register is successful, to go home page. 
        .then((res) => {
            if (res.ok) {
                login()
                navigate('/')
            } else {
                throw new Error('did not work')
            }
        })
    }

    return ( 
        <>
            <Navbar />
            <h1>Register</h1>
            <form className="form">
                <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={register}>register</button>
            </form>
        </>        
     );
}
 
export default Register;
