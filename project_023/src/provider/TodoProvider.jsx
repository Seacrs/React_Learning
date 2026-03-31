import { useState } from 'react'
import { TodoContext } from '../context'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

const TodoProvider = ({children}) => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])

    const handleChange = (e) => {
        const text = e.target.value;
        setInput(text)
    }

    const addTodo = () =>{
        if(input === "") return;
        setTodos(prev => ([...prev, {
            id: nanoid(),
            text: input,
            on: false
        }]));
        setInput("");
    }

    const removeTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    const checked = (id) => {
        setTodos(prev => prev.map(todo => todo.id === id ? {...todo, on: !todo.on}: todo))
    }

    return (
        <TodoContext value={{todos, input, handleChange, addTodo, removeTodo, checked}}>
            {children}
        </TodoContext>
    )
};

TodoProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default TodoProvider;