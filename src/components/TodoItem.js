import React from 'react'

const TodoItem =({completed, title}) => {
  return (
    <li className='list-group-item'>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center padding-left'>
					<input
						type='checkbox'
						className='mr-3'
						checked={completed}
					></input>
					{title}
				</span>
				<button className='btn btn-danger'>
					Delete
				</button>
			</div>
		</li>
  )
}

export default TodoItem