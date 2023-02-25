import { Link } from "react-router-dom";

const Hero = () => {
    return ( 
        // flex containter
        <div className="container flex justify-center items-center mx-auto mt-32 ">
            {/* left */}
            <div className="flex flex-col space-y-8">
                <h1 className="text-4xl">Welcome and sign up</h1>
                <p>Sign up right now click that button</p>
                <Link to='/register' className="border">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">sign up</button>
                </Link>
            </div>
            {/* right */}
            <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-2xl relative m-5">
                <img class="w-full h-32 sm:h-48 object-cover" src="https://animevania.com/wp-content/uploads/2023/01/Yoichi-Isagi.webp" alt=""></img>
            </div>
        </div>
     );
}
 
export default Hero;