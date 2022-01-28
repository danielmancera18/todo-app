import React from "react";
import {TodoContext} from '../TodoContext/TodoContext';
function TodoCounter() {

    const {
        completedTodos,
        totalTodos
    }= React.useContext(TodoContext)
    return(
        <h2 className="font-bold text-base mb-6 p-4">Has completado {completedTodos} de {totalTodos} tareas</h2>
    )
}

export {TodoCounter};