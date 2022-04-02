import React, { useState } from 'react';
import './DeleteModal.css';

const DeleteModal = (props) => {

    const [modalToggle, setModalToggle] = useState(false);

    const toggleModal = () => {
        setModalToggle(!modalToggle);
    }

    const validate = () => {
        toggleModal();
        props.func();
    }

    return (
        <>
            <button onClick={toggleModal} className='note-btn-cont-btn'>Delete</button>
            {modalToggle &&
            <div className="modalDeleteValidation">
                <div className="modalDelete-container">
                    <h2>Are you sure ?</h2>
                    <div className="modalDelete-btnContainer">
                        <button onClick={validate} className='modalDelete-btn'>yes</button>
                        <button onClick={toggleModal} className='modalDelete-btn'>no</button>
                    </div>
                </div>
            </div>
            }
        </>
    );
};

export default DeleteModal;