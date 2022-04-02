import React from 'react';
import { useSelector } from 'react-redux';
import Note from '../../Components/Note/Note';
import { v4 as uuidv4 } from 'uuid';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {

    const {notes} = useSelector(state => ({
        ...state.noteReducer
    }))    

    return (
        <main>
            <section className='notes-container'>
            { notes.length === 0 && 
            <Link to="/react-note-app/addnote">
                <button className='home-newNote-btn'>New note</button> 
            </Link>
            }
                {notes.map(el => {
                        return (
                            <Note key={uuidv4()} id={el.id}>
                                <Link to={"/react-note-app/note/" + el.title.replace(/\s+/g, "-").trim()} state={el}>
                                    <h2>{el.title}</h2>
                                    <p>{el.body}</p>
                                </Link>
                            </Note>
                    )
                })}
            
            </section>
        </main>
    );
};

export default Home;