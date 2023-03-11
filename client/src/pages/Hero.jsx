import { Link } from "react-router-dom";

const Hero = () => {
    return ( 
            <div className="container flex flex-col justify-center items-center mx-auto mt-32 ">
                {/* HERO */}
                <div className="flex flex-col md:flex-row">
                    {/* left */}
                    <div className="flex flex-col space-y-8">
                        <h1 className="text-4xl">Welcome and sign up</h1>
                        <p>Sign up right now click that button</p>
                        <Link to='/register' className="bg-blue-200 text-center">sign up</Link>
                    </div>
                    {/* right */}
                    <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-2xl relative m-5">
                        <img className="w-full h-32 sm:h-48 object-cover" src="https://animevania.com/wp-content/uploads/2023/01/Yoichi-Isagi.webp" alt=""></img>
                    </div>
                </div>
                
                <main className="grid md:grid-cols-2">
                    <div className="bg-blue-200 rounded-sm">pomodoro timer</div>
                    <div className="bg-blue-200 rounded-sm">quiz</div>
                    <div className="bg-blue-200 rounded-sm">to-do list</div>
                    <div className="bg-blue-200 rounded-sm">habit tracker</div>
                </main>

            </div>
     );
}
 
export default Hero;