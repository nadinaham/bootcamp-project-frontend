import React from 'react'
import Book from '../Book'

const LibraryList = ({  }) => {
    
    let filteredList = toDoList.filter(entry => {
        return entry.task.toLowerCase().includes(searchInput.toLowerCase())
    })
    
    return (
        <div>
            {filteredList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} handleDelete = {handleDelete}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
            <button style={{margin: '20px'}} onClick={handleClear}>Clear All</button>
        </div>
    );
};

export default ToDoList;