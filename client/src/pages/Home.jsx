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

    // delete endpoint
    const deleteTodo = async (id) => {
        await fetch(`http://localhost:4000/${id}`, {
            method: 'DELETE',
            "Content-Type": 'application/json'
        })
        setList(list.filter(i => i._id !== id))
    }

    return ( 
        <>
            {list && list.map(i => (
                <div key={i._id}>
                    <p>{i.title}</p>
                    <button onClick={() => deleteTodo(i._id)}>delete</button>
                </div>
            ))}
        </>
     );
}
 
export default Home;