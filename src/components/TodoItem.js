import React from 'react';

function TodoItem(props){
    return(
        <li className={`w-4/5 h-auto bg-white mb-5 shadow-md flex items-center  justify-between p-4 border border-gray-400
        ${props.completed && 'border-green-400'}`}>

            <p className={`max-w-cardSpace ${props.completed && 'line-through text-cyan-500'}`}>{props.text}</p>

            <div className='w-14 h-full flex justify-between items-center'>
                <span className={`w-5 h-5 bg-unchecked bg-cover ${props.completed && 'bg-check'}`} 
                onClick={props.onComplete}></span>
                <span className='w-5 h-5 bg-noTrash bg-cover hover:bg-trash'
                onClick={props.onDelete}></span>
            </div>
            
        </li>
    )
}

export {TodoItem};

