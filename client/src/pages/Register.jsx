import { useState } from "react";
// spent 30min trying useHistory but stackoverflow solution said it got replaced by navigate
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()

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
        .then(() => {
            navigate('/')
        })
    }

    return ( 
        <>
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