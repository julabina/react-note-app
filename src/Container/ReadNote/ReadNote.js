import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ReadNote.css';

const ReadNote = () => {

    const [noteDatas, setNoteDatas] = useState({});

    const location = useLocation();

    useEffect(() => {
        const datas = location.state;
        setNoteDatas(datas);
    }, [])


    return (
        <main>
            <section className='note-btn-cont'>
                <button className='note-btn-cont-btn'>Modify</button>
                <button className='note-btn-cont-btn'>Delete</button>
            </section>
            <section className="note-read">
                <h2 className='note-read-title'>{noteDatas.title}</h2>
                <p className='note-read-body'>{noteDatas.body}</p>
            </section>
        </main>
    );
};

export default ReadNote;