import trash from '../assets/trash-solid.png'
import { useTodo } from '../Hook/useTodo'

export default function TaskList(){
    const { todos, removeTodo, checked } = useTodo();


    const taskElements = !todos ? null :todos.map(todo => {
        return (
            <div key={todo.id} className="task-container">
                        <label className='checkbox'>
                            <input type="checkbox" checked={todo.on} onChange={()=>checked(todo.id)}/>
                            <span className={todo.on ? "strike" : ""}> {todo.text}</span>
                        </label>
            
                        <button onClick={()=> removeTodo(todo.id)}>
                            <img src={trash} alt="" width='33px'/>
                        </button>
                    </div>
        )
    }
    )

    return (
        <div className='tasklist'>
            {taskElements}
        </div>
    )
}