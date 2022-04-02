import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ModForm from '../../Components/ModForm/ModForm';
import './ReadNote.css';

const ReadNote = () => {

    const {notes} = useSelector(state => ({
        ...state.noteReducer
    }))

    const [noteDatas, setNoteDatas] = useState({});
    const [modifyDatas, setModifyDatas] = useState(false);

    const navigate = useNavigate()

    const location = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        if(!modifyDatas){
            const datas = location.state;
            setNoteDatas(datas);
        } 
    }, [])
    
    const deleteNote = () => {
        
        dispatch ({
            type: 'DELETENOTE',
            payload: noteDatas.id
        })

        navigate("react-note-app/") 
    }
    
    const modifyNote = (tit, bod) => {
        const newObj = {
            ...noteDatas,
            title: tit,
            body: bod
        }
        setNoteDatas(newObj);
        toggleNote();
    }
    
    const toggleNote = () => {
        setModifyDatas(!modifyDatas);
    }

    return (
        <>
        {modifyDatas ?
            <ModForm title={noteDatas.title} body={noteDatas.body} id={noteDatas.id} func={modifyNote}/>
        : 
        <main>
            <section className='note-btn-cont'>
                <button onClick={toggleNote} className='note-btn-cont-btn'>Modify</button>
                <button onClick={deleteNote} className='note-btn-cont-btn'>Delete</button>
            </section>
            <section className="note-read">
                <h2 className='note-read-title'>{noteDatas.title}</h2>
                <p className='note-read-body'>{noteDatas.body}</p>
            </section>
        </main>
        }
        </>
    );
};

export default ReadNote;