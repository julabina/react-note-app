import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddNote.css';

const AddNote = () => {

    const dispatch = useDispatch();

    const [inputDatas, setInputDatas] = useState({
        title: "",
        body: ""
    });

    const updateInput = (e) => {
        if(e.target.classList.contains("inp-1")) {
            const newObj = {
                ...inputDatas,
                title: e.target.value
            }
            setInputDatas(newObj);
        } else if (e.target.classList.contains("inp-2")) {
            const newObj = {
                ...inputDatas,
                body: e.target.value
            }
            setInputDatas(newObj);
        }
    }

    const submitNew = (e) => {
        e.preventDefault();
        dispatch({
            type : "ADDNOTE",
            payload: inputDatas
        })

        setInputDatas({
            title: "",
            body: ""
        })

    }

    return (
        <main>
            <section className="newNote-container">
                <form onSubmit={submitNew} className='form-newNote'> 
                    <h2>Add new note</h2>
                    <label htmlFor="newTitle">Title :</label>
                    <input onChange={updateInput} type="text" id="newTitle" placeholder='Enter the title' value={inputDatas.title} className="inp-1"/>
                    <label htmlFor="newBody">Note :</label>
                    <textarea onChange={updateInput} id='newBody' placeholder='Enter the note' value={inputDatas.body} className="inp-2"/>
                    <button>Add</button>
                </form>
            </section>
        </main>
    );
};

export default AddNote;