import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.trim() === "") return;
        addTodo(todo);
        setTodo("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Add a todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button 
                    className="add-button"
                    type="submit">Add
                </button>
            </form>
            <div style={{ height: '30px' }}></div>
        </>
    );
};

export default AddTodo;