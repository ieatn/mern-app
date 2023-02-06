import { useEffect, useState } from "react";

const Home = () => {
    const [list, setList] = useState([])
    // get all endpoint
    useEffect(() => {
        const fetchTodos = async () => {
            const res = await fetch('http://localhost:4000/', {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json'
                }
            })
            const data = await res.json()
            setList(data)
        }
        fetchTodos()
    }, [])

    return ( 
        <>
            {list && list.map(i => (
                <div key={i._id}>
                    <p>{i.title}</p>
                </div>
            ))}
        </>
     );
}
 
export default Home;