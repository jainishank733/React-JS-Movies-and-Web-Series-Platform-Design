import React from 'react';
import movies_logo from '../src/ImagesAssignment/watchMoviesIcon.png';

import './App.css';

const List = ({ md }) => {
    return(
        <>
            {
                md.map((md) => {
                    const {title, programType ,images, releaseYear} = md;
                    var program = "movie";
                    if(programType==program && releaseYear>=2010){
                        return(
                            <div className="poster">
                                <a href={images.PosterArt.url} target="_blank"><img src={movies_logo} alt={title}/></a>
                                <p>{title}</p>
                            </div>
                        );
                    }
                    
                }
                )
            }
        </>
    );
    
};
export default List;