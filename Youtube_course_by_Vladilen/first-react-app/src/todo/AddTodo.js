import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

function AddTodo() {
    return (
        <form style={
            {marginTop: '1rem'}
        }>
            <input/>
            <button type="submit">Create task</button>
        </form>
    )
}

export default AddTodo