import React from 'react';
import movies_logo from '../src/ImagesAssignment/watchMoviesIcon.png';

import './App.css';

const List = ({ md }) => {
    return(
        <>
            {
                md.map((md) => {
                    const {name, url} = md;
                    return(
                        <div className="poster">
                            <a href={url} target="_blank"><img src={movies_logo} alt={name}/></a>
                            <p>{name}</p>
                        </div>
                    );
                }
                )
            }
        </>
    );
    
};
export default List;