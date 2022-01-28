import React from 'react';

function CreateTodoButton(props){
    const doOnClick = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return(
            <button className='w-16 h-16 rounded-full bg-green-300 text-4xl text-white shadow-md fixed
            bottom-4 z-10 hover:-rotate-180 hover:scale-105 hover:ease-linear hover:duration-500'
            onClick={doOnClick}
            >
                +
            </button>
    )
}

export {CreateTodoButton};