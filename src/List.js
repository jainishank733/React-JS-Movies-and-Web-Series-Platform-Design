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
                        <article className="poster">
                            <a href={url} target="_blank"><img src={movies_logo} alt={name}></img></a>
                            <h4>{name}</h4>
                        </article>
                    );
                }
                )
            }
        </>
    );
    
};
export default List;