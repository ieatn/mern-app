import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
    const [list, setList] = useState([])
    const [todo, setTodo] = useState('')

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTg1MzBiOWU4MWU0NmExZTNmMGEyZCIsImlhdCI6MTY3NjI1NDg0Nn0.uqRUb5s2KGnrpwZUcZwJu3QlmNwat3mMdvKuZCQzgsA'

    // get all endpoints
    useEffect(() => {
        const fetchTodos = async () => {
            const res = await fetch('http://localhost:4000/', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
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

    const toggleCompleted = async (id, completed) => {
        await fetch(`http://localhost:4000/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                completed: !completed,
            }),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        setList(list.map(i => {
            if (i._id === id) {
                return {
                    ...i,
                    completed: !completed,
                }
            } else {
                return i
            }
        }))
    }

    return ( 
        <>
            <Navbar />
            <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
            <button onClick={createTodo}>add</button>
            {list && list.map(i => (
                <div key={i._id}>
                    <input type="checkbox" onChange={() => toggleCompleted(i._id, i.completed)} />
                    {i.title}
                    {`${i.completed}`}
                    <button onClick={() => deleteTodo(i._id)}>delete</button>
                </div>
            ))}
        </>
     );
}
 
export default Home;