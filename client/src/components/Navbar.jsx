import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

    const {isAuthenticated, login, logout} = useContext(AuthContext)

    return ( 
        <div className="container">
            <nav>
                <Link to='/'>Home</Link>
                {isAuthenticated ? (
                    <button onClick={logout}>Logout</button>
                ) : (
                    <div>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                )}
            </nav>
        </div>
     );
}
 
export default Navbar;