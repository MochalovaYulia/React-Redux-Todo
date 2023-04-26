import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getTodosAsync = createAsyncThunk(
    'todo/getTodoAsync',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        const todos = await response.json()
        return { todos }
    }
)

const todoSlice = createSlice({
    name: 'todo',
    initialState: [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: true }
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }
            state.push(newTodo)
        },
        toggleCompleted: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id)
            state[index].completed = action.payload.completed
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getTodosAsync]: (state, action) => {
            console.log('fetching data...')
        },
        [getTodosAsync.fulfilled]: (state, action) => {
            return action.payload.todos
        },
    }
})

export const { addTodo, toggleCompleted, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;