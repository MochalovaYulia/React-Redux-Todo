import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleCompleted } from '../redux/todoSlice';

const TodoItem = ({ completed, title, id }) => {

	const dispatch = useDispatch();
	const handleCompleteClick = () => {
		dispatch(toggleCompleted({
			id: id,
			completed: !completed
		}))
	}
	const handleDeleteCklick = () => {
		dispatch(deleteTodo({
			id: id,
		}))
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						checked={completed}
						onChange={handleCompleteClick}
					></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={handleDeleteCklick}>
					Delete
				</button>
			</div>
		</li>
	)
}

export default TodoItem