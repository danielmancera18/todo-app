import React from "react";
import {TodoContext} from '../TodoContext/TodoContext';

function TodoSearch(){

    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext)

    const onSearchValueChange = (event)=>{
        setSearchValue(event.target.value)
    }

    return(
        <input className="w-72 h-12 -mt-6 border border-cyan-500 px-4 text-center rounded-full bg-white shadow-md outline-none"
        value={searchValue}
        onChange={onSearchValueChange}
        placeholder="Buscar tarea"/>
    )
}
export {TodoSearch};