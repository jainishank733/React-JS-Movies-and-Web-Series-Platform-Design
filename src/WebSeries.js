import './App.css';
import { Route } from 'react-router-dom';
import SeriesData from './SeriesData';
import { useState } from 'react';
import List2 from './List2';


const WebSeries = () => {

    const [ws, setws] = useState(SeriesData);

    return (
        <>
            <h2 className="heading">Web Series</h2>
            <List2 ws={ws}/>

        </>

    );
}

export default WebSeries;