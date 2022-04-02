import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import './ReadNote.css';

const ReadNote = () => {

    const [noteDatas, setNoteDatas] = useState({});

    const navigate = useNavigate()

    const location = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        const datas = location.state;
        setNoteDatas(datas);
    }, [])

    const deleteNote = () => {

        dispatch ({
            type: 'DELETENOTE',
            payload: noteDatas.id
        })

        navigate("/")
    }

    return (
        <main>
            <section className='note-btn-cont'>
                <button className='note-btn-cont-btn'>Modify</button>
                <button onClick={deleteNote} className='note-btn-cont-btn'>Delete</button>
            </section>
            <section className="note-read">
                <h2 className='note-read-title'>{noteDatas.title}</h2>
                <p className='note-read-body'>{noteDatas.body}</p>
            </section>
        </main>
    );
};

export default ReadNote;