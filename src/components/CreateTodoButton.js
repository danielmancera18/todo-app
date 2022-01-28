import React from 'react';

function CreateTodoButton(props){
    const doOnClick = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return(
        <React.Fragment>
            <button className='lg:hidden w-16 h-16 rounded-full bg-green-300 text-4xl text-white shadow-md fixed
            bottom-4 z-10 hover:-rotate-180 hover:scale-105 hover:ease-linear hover:duration-500'
            onClick={doOnClick}
            >
                +
            </button>
            <button className='hidden lg:block h-16 rounded-full bg-green-300 text-2xl text-white shadow-md fixed
            bottom-10 z-10 hover:scale-105 hover:bg-green-500 px-6'
            onClick={doOnClick}
            >
                + Nueva tarea
            </button>
        </React.Fragment>
    )
}

export {CreateTodoButton};