import { useState } from "react";

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const register = async () => {
        fetch(`http://localhost:4000/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                username, password,
            })
        })
    }

    return ( 
        <>
            <h1>Register</h1>
            <form className="form">
                <input type="email" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={register}>register</button>
            </form>
        </>        
     );
}
 
export default Register;