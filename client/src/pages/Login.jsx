import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { API_URL } from "../config";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate()
    const {isAuthenticated, login} = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch(`${API_URL}/login`, {
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
            <div className="mx-auto max-w-md">
                <form className="flex flex-col gap-4 mt-64">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <input className="p-2 border border-gray-400 rounded-lg" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <input className="p-2 border border-gray-400 rounded-lg" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" onClick={loginUser}>login</button>
                </form>
            </div>
        </>        
     );
}
 
export default Login;