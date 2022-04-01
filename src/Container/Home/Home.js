import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Note from '../../Components/Note/Note';
import { getNotes } from '../../redux/noteReducer/noteReducer';
import { v4 as uuidv4 } from 'uuid';


const Home = () => {

    const {notes} = useSelector(state => ({
        ...state.noteReducer
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        if(notes.length === 0) {
           dispatch(getNotes());
        }
    }, [])

    return (
        <main>
            <h1>TEST</h1>
            {notes.map(el => {
                return (
                <Note key={uuidv4()}>
                        <h2>{el.title}</h2>
                        <p>{el.body}</p>
                </Note>
                )
            })}
        </main>
    );
};

export default Home;