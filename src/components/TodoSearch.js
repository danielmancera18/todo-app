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
        <input className="w-72 h-12 -mt-6 border border-cyan-500 px-4 text-center rounded-full bg-white shadow-md outline-none lg:w-96
        lg:text-left lg:my-12"
        value={searchValue}
        onChange={onSearchValueChange}
        placeholder="Buscar tarea"/>
    )
}
export {TodoSearch};