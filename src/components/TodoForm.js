import react from "react";
import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = react.useState('')
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)


    const onCancel = ()=>{
        setOpenModal(false)
    }
    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
    }
    const onSubmit = (event)=>{
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit} className="bg-white w-72 h-80 p-6 flex flex-col items-center rounded-3xl
        border-2 border-green-300">
            <label className="font-semibold text-lg text-green-400">
                Añadir nueva tarea
            </label>
            <textarea 
            className="w-full h-1/2 bg-transparent border border-green-300 rounded-3xl p-4 outline-2 
            outline-cyan-500 overflow-hidden resize-none my-4"
            placeholder="cortar la cebolla para el almuerzo"
            value={newTodoValue}
            onChange={onChange}
            ></textarea>
            <div className="w-full h-10 flex items-center justify-between">
                <button className="w-5/12 h-full text-center text-white bg-red-300 hover:bg-red-500 rounded-md scale-95 hover:scale-90" type="button" onClick={onCancel}>Cancelar</button>
                <button className="w-5/12 h-full text-center text-white bg-green-500 hover:bg-green-600 rounded-md hover:scale-95" type="submit">Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm };