import { useEffect, useState } from "react";

const Home = () => {
    const [list, setList] = useState([])
    const [todo, setTodo] = useState('')
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
            headers: {
                "Content-Type": 'application/json'
            }
        })
        setList(list.filter(i => i._id !== id))
    }

    // post endpoint
    const createTodo = async () => {
        const title = todo
        const res = await fetch('http://localhost:4000/', {
            method: 'POST',
            body: JSON.stringify({
                title,
            }),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        const data = await res.json()
        setList([...list, data])
        setTodo('')
    }

    return ( 
        <>
            <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
            <button onClick={createTodo}>add</button>
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