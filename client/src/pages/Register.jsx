import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { API_URL } from "../config";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const register = async (e) => {
        e.preventDefault()
        fetch(`${API_URL}/register`, {
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

    const handleGuest = () => {
        login()
        navigate('/')
    }

    return ( 
        <>
            <Navbar />
            <div className="mx-auto max-w-md">
                <form className="flex flex-col gap-4 mt-64">
                    <h1 className="text-2xl font-bold text-center">Register</h1>
                    <input type="text" placeholder="Username" className="p-2 border border-gray-400 rounded-lg" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" className="p-2 border border-gray-400 rounded-lg" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={register} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Register</button>
                    <button onClick={handleGuest} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md'>Guest Mode</button>
                </form>
            </div>
        </>        
     );
}
 
export default Register;
