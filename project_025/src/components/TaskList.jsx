import trash from '../assets/trash-solid.png'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, checked } from '../Slices/todoSlice'


export default function TaskList(){
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id))
    }
    const handleChecked = (id) => {
        dispatch(checked(id))
    }

    const taskElements = !todos ? null :todos.map(todo => {
            return (
                <div key={todo.id} className="task-container">
                            <label className='checkbox'>
                                <input type="checkbox" checked={todo.on} onChange={()=>handleChecked(todo.id)}/>
                                <span className={todo.on ? "strike" : ""}> {todo.text}</span>
                            </label>
                
                            <button onClick={()=> handleRemoveTodo(todo.id)}>
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