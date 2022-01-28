import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import { Modal } from "./Modal";
import {TodoForm} from "./TodoForm";

function AppUI(){

    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)

    return(
        <React.Fragment>
            <header className='bg-gradient-to-b from-green-300 to-cyan-500 w-full h-56 text-left text-2xl font-semibold pt-12 pl-12'>
                <h2 className='text-white lg:text-4xl'>TO-DO App</h2>
            </header>
            
            <section className='-mt-20 h-full pb-16 bg-white rounded-t-3xl lg:rounded-none flex flex-col items-center justify-start'>
                <TodoSearch />
                <TodoCounter />

                <TodoList>
                        {error && <p className="p-6 font-semibold text-cyan-500">desesperate, hubo un error...</p>}
                        {loading && <p className="p-6 font-semibold text-cyan-500">Estamos cargando, no desesperes...</p>}
                        {(!loading && !searchedTodos.length) && <p className="p-6 font-semibold text-cyan-500">¡Crea tu primer Tarea!</p>}
        
                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text} 
                                text={todo.text} 
                                completed={todo.completed}
                                onComplete = {()=>{completeTodo(todo.text)}}
                                onDelete = {()=>{deleteTodo(todo.text)}}
                                />
                            ))
                        }
                </TodoList>
                
                {!!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                 )
                }
                <CreateTodoButton setOpenModal={setOpenModal}/>
            </section> 
        </React.Fragment>
    )
}

export { AppUI };