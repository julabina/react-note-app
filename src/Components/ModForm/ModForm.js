import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import "./ModForm.css";

const ModForm = (props) => {


    const [modifDatas, setModifDatas] = useState({
        title: props.title,
        body: props.body,
        id: props.id
    });

    const dispatch = useDispatch();

    const updateInput = (e) => {
        if(e.target.classList.contains("inp-1")) {
            const newObj = {
                ...modifDatas,
                title: e.target.value
            }
            setModifDatas(newObj);
        } else if (e.target.classList.contains("inp-2")) {
            const newObj = {
                ...modifDatas,
                body: e.target.value
            }
            setModifDatas(newObj);
        }
    }

    const handleModif = () => {
        
        dispatch({
            type: "MODIFYNOTE",
            payload: modifDatas
        })

        props.func(modifDatas.title, modifDatas.body)

    }


    return (
        <main>
            <section className="modForm-container">
                <form onSubmit={handleModif} className='form-modNote'> 
                    <h2>Modify note</h2>
                    <label htmlFor="modTitle">Title :</label>
                    <input onChange={updateInput} type="text" id="modTitle" placeholder='Enter the title' value={modifDatas.title} className="inp-1" autoComplete='off' required/>
                    <label htmlFor="modBody">Note :</label>
                    <textarea onChange={updateInput} id='modBody' placeholder='Enter the note' value={modifDatas.body} className="inp-2" required/>
                    <button>Modify</button>
                </form>
                <button onClick={() => props.func(props.title, props.body)} className='cancelMod-btn'>Cancel</button>
            </section>
        </main>
    );
};

export default ModForm;