import { TodoContext } from "../context";
import { use } from 'react'

const useTodo = () => {
    const {todos, input, handleChange, addTodo, removeTodo, checked} = use(TodoContext)

    return { todos, input, handleChange, addTodo, removeTodo, checked }
}

export { useTodo }