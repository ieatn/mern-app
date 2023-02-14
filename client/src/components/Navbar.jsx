import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="container">
            <nav>
                {/* only if logged in, else redirect to register */}
                <Link to='/'>Buddy</Link>
                <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;