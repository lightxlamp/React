import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        padding: '0.5rem 1rem',
        border: '1px solid grey',
        borderRadius: '4px',
        marginBottom: '0.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function ToDoItem({todo, index, onChange}) {
    const classes = []
    
    if(todo.completed) {
        classes.push('done')
    }

    return (    
    <li style={styles.li}>
        <span className={classes.join(' ')}>
            <input 
                type="checkbox"
                style={styles.input} 
                onChange={() => onChange(todo.id)} 
            />
            <strong>{index + 1}</strong>
            &nbsp;
            { todo.title }
        </span>
        <button className="removeBtn">&times;</button>
    </li>
    )  
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired 
}

export default ToDoItem