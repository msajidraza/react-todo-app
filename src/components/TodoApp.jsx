import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterTodo from "./FilterTodo";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    // Save todo list in local storage
    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos]);

    // Add Todo
    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }

    // Complete Todo
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo 
            )
        );
    } 

    // Delete Todo
    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));  
    }

    // Filter Todos based on selected filter
    const filteredTodos = todos.filter((todo) => {
        if (filter === "Pending") return !todo.completed;
        if (filter === "Completed") return todo.completed;
        return true; // "All" shows all todos
    });


    return (
        <>
            <h1 style={{ fontSize: '36px', fontWeight: '200', marginTop: '0', paddingTop: '20px' }}>Todo App</h1>
            <div className="content">
                <AddTodo addTodo={addTodo} />
                <FilterTodo 
                    filter={filter} 
                    setFilter={setFilter} 
                />
                <TodoList 
                    todos={filteredTodos} 
                    toggleComplete={toggleComplete} 
                    deleteTodo={deleteTodo} 
                />
            </div>
        </>
    ); 
};

export default TodoApp;