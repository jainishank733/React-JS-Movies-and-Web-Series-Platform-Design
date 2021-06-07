import React from 'react';
import series_logo from '../src/ImagesAssignment/watchSeriesIcon.png';

import './App.css';

const List2 = ({ ws }) => {
    return(
        <>
            {
                ws.map((ws) => {
                    const {title, programType ,images, releaseYear} = ws;
                    var program = "series";
                    if(programType===program && releaseYear>=2010){
                        return(
                            <div className="poster">
                                <a href={images.PosterArt.url} target="_blank"><img src={images.PosterArt.url} alt={title}/></a>
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
export default List2;