import add from '../assets/circle-plus-solid.png'
import { useTodo } from '../Hook/useTodo'

export default function Taskbar(){
    const {input, handleChange, addTodo } = useTodo();

    return (
        <div className='newTask'>
            <input type="text" placeholder='Add todo...' value={input} onChange={handleChange}/>
            <button onClick={addTodo}>
                <img src={add} alt="add task" width='20px'/>
                </button>
        </div>
    )
}