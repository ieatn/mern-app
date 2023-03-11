import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import {API_URL} from '../config'

const Home = () => {
    const navigate = useNavigate()  
    const {isAuthenticated} = useContext(AuthContext)
    if (!isAuthenticated) {
        navigate('/register')
    }
    const [list, setList] = useState([])
    const [todo, setTodo] = useState('')

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTg1MzBiOWU4MWU0NmExZTNmMGEyZCIsImlhdCI6MTY3NjI1NDg0Nn0.uqRUb5s2KGnrpwZUcZwJu3QlmNwat3mMdvKuZCQzgsA'

    // get all endpoints
    useEffect(() => {
        const fetchTodos = async () => {
            const res = await fetch(`${API_URL}`, {
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
        await fetch(`${API_URL}/${id}`, {
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
        const res = await fetch(`${API_URL}`, {
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
        await fetch(`${API_URL}/${id}`, {
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

    const updateTitle = async (id, newTitle) => {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: newTitle
            }),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        setList(list.map(i => {
            if (i._id === id) {
                return {
                    ...i,
                    title: newTitle
                }
            } else {
                return i
            }
        }))
    }

    return ( 
        <>
            <div className="max-w-2xl mx-auto">
            <div className="flex items-center space-x-4 mt-64">
                <input type="text" className="border rounded py-2 px-3 w-full" onChange={(e) => setTodo(e.target.value)} value={todo} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={createTodo}>Add</button>
            </div>
            {list && list.map(i => (
                <div key={i._id} className="flex items-center space-x-4 mt-4">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={() => toggleCompleted(i._id, i.completed)} />
                <input type="text" value={i.title} className="border rounded py-2 px-3 w-full" onChange={(e) => updateTitle(i._id, e.target.value)} />
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteTodo(i._id)}>Delete</button>
                </div>
            ))}
            </div>
        </>
     );
}
 
export default Home;