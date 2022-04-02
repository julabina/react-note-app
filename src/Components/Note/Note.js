import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DeleteModalIcon from '../DeleteModal/DeleteModalIcon';
import './Note.css';

const Note = (props) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const deleteCard = () => {
        dispatch ({
            type: 'DELETENOTE',
            payload: props.id
        })

        navigate("/react-note-app/")
    }

    return (
        <article className='note'>
            <div className="top-card">
                <DeleteModalIcon func={deleteCard} />
            </div>
            {props.children}
        </article>
    );
};

export default Note;