import './App.css';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import List2 from './List2';
import dataFeed from './dataFeed';



const WebSeries = () => {

    const [ws, setws] = useState(dataFeed);

    return (
        <>
            <h2 className="heading">Web Series</h2>
            <List2 ws={ws}/>

        </>

    );
}

export default WebSeries;