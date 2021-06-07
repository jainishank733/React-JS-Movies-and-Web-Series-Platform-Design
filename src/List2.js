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
                        <div className="poster">
                            <a href={url} target="_blank"><img src={series_logo} alt={name}/></a>
                            <p>{name}</p>
                        </div>
                    );
                }
                )
            }
        </>
    );
    
};
export default List2;