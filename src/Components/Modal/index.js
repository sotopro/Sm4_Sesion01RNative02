import React from 'react'
import { Backdrop } from '../Backdrop'
import './index.css'

const Modal = (props) => {
    const { visible, closeModal } = props;
    return (
        <>
            <Backdrop visible={visible} clicked={closeModal}/>
            <div 
                className="modal"
                style={{
                    transform: visible
                        ? 'translateY(0)'
                        : 'translateY(-100vh)',
                    opacity: visible ? 1 : 0,
                }}    
            >
            {props.children}
            </div>
        </>
    )
}

export { Modal }