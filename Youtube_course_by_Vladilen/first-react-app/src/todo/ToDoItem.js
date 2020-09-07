import React from 'react'
import PropTypes from 'prop-types'

function ToDoItem({todo, index}) {
    return (    
    <li>
        <strong>{index + 1} </strong>
        { todo.title }
    </li>
    )  
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default ToDoItem