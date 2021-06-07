import React from 'react';
import series_logo from '../src/ImagesAssignment/watchSeriesIcon.png';

import './App.css';

const List2 = ({ ws }) => {
    return(
        <>
            {
                ws.map((ws) => {
                    const {name, url} = ws;
                    return(
                        <article className="poster">
                            <a href={url} target="_blank"><img src={series_logo} alt={name}></img></a>
                            <h4>{name}</h4>
                        </article>
                    );
                }
                )
            }
        </>
    );
    
};
export default List2;