import React from 'react';
import './Note.css';

const Note = (props) => {
    return (
        <article className='note'>
            {props.children}
        </article>
    );
};

export default Note;