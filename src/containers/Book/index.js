import React from 'react'

const Book = ({book, handleToggle, handleDelete}) => {

    const handleClick = (e) => {
        e.preventDefault()
        console.log(e.currentTarget.id)
        handleToggle(e.currentTarget.id)
    }

    const handleDelClick = (e) => {
        e.preventDefault()
        handleDelete(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
            <button id={todo.id} onClick = {handleClick}> Done </button>
            <button id={todo.id} onClick = {handleDelClick}> Delete </button>
        </div>
    );
};

export default Book