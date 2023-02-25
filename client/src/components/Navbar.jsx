import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

    const {isAuthenticated, login, logout} = useContext(AuthContext)

    return ( 
        <div className="md:container mx-auto text-xl text-blue-700 font-bold">
            <nav className="flex justify-between">
                <Link to='/'>Home</Link>
                {isAuthenticated ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <div className="space-x-4">
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                )}
            </nav>
        </div>
     );
}
 
export default Navbar;