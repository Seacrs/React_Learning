import add from '../assets/circle-plus-solid.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Slices/todoSlice'

export default function Taskbar(){
    const [input, setInput] = useState('')

    const dispatch = useDispatch();

    const handleTodo = () => {
        if(input){
            dispatch(addTodo(input))
            setInput("")
        }
    };

    return (
        <div className='newTask'>
            <input type="text" placeholder='Add todo...' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={handleTodo}>
                <img src={add} alt="add task" width='20px'/>
                </button>
        </div>
    )
}