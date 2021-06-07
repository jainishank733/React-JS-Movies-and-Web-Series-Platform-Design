import './App.css';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import List from './List';
import dataFeed from './dataFeed';


const Movies = () => {

    const [md, setmd] = useState(dataFeed);

    return (
        <>
            <h2 className="heading">Movies</h2>
            <List md={md}/>

        </>

    );
}

export default Movies;