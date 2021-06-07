import './App.css';
import { Route } from 'react-router-dom';
import MoviesData from './MoviesData';
import { useState } from 'react';
import List from './List';


const Movies = () => {

    const [md, setmd] = useState(MoviesData);

    return (
        <>
            <h2 className="heading">Movies</h2>
            <List md={md}/>

        </>

    );
}

export default Movies;