import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {

    return (
        <>
            <li>
                <div style={{ width: '100%', display: 'flex', verticalAlign: 'text-top', height: '30px', }}>
                    <div style={{ flex: '90%', fontSize: '14px' }}>
                        <span 
                            style={{ textDecoration: todo.completed ? "line-through" : "" }} 
                            onClick={() => toggleComplete(todo.id)}
                            title="Click to change the the status">{todo.text}
                        </span>  
                    </div>
                    <div style={{ flex: '5%', textAlign: 'end' }}>                 
                        <button onClick={() => deleteTodo(todo.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
                              
                
            </li>
        </>
    );
}

export default TodoItem;