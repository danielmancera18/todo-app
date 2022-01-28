import React from "react";
import ReactDOM from "react-dom"; 

function Modal({children}){
    return ReactDOM.createPortal(
        
        <div className=" w-full h-full bg-black bg-opacity-50 fixed top-0 flex items-center justify-center">
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export { Modal };