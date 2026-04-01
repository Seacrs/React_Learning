import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid'

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
                on: false
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        checked: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload ? {...todo, on: !todo.on} : todo);
        },
    }
})

export const { addTodo, removeTodo, checked } = todoSlice.actions;
export default todoSlice.reducer;