import React from "react";

function TodoList(props){
    return(
        <ul className="w-full h-auto flex flex-col items-center list-none">
            {props.children}
        </ul>
    )
}

export {TodoList};