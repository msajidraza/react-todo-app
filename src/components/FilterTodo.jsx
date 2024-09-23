import React from "react";

const FilterTodo = ({ filter, setFilter }) => {
    return (
        <>
            <div>
                <button 
                    className={`filter-button ${filter === "All" ? "active" : ""}`} 
                    onClick={() => setFilter("All")}>All</button>
                <button 
                    className={`filter-button ${filter === "Completed" ? "active" : ""}`}
                    onClick={() => setFilter("Completed")}>Completed</button>
                <button 
                    className={`filter-button ${filter === "Pending" ? "active" : ""}`}
                    onClick={() => setFilter("Pending")}>Pending</button>
            </div>
        </>
    );
}

export default FilterTodo;