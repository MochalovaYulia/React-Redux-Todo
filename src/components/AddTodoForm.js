import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice';

const AddTodoForm = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            title: value,
        }))
        setValue('')
    } 

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
            <input
                type='text'
                className='form-control mb-2 mr-sm-2'
                placeholder='Add todo...'
                value={value}
                onChange={handleChange}
            ></input>

            <button type='submit' className='btn btn-primary mb-2'>
                Submit
            </button>
        </form>
    )
}

export default AddTodoForm