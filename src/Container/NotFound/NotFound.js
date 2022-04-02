import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <main>
            <section className="notFound">
                <h2>404 NOT FOUND</h2>
                <Link to="/react-note-app/">Back to home</Link>
            </section>
        </main>
    );
};

export default NotFound;