import React, { useState, useContext } from 'react'
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {

    // INITIALLY THE STATE WAS HERE

    const [movies, setMovies] = useContext(MovieContext) 

    return(
        <div>
            <ul>
                {movies.map(mov => {
                    return (
                        <Movie id={mov.id} name={mov.name} price={mov.price} />
                    )
                })}
            </ul>
        </div>
    )
}

export default MovieList;