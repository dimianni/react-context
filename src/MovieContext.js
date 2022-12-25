import React, { createContext, useState } from 'react'

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {

    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "$10",
            id: 1
        },
        {
            name: "Avatar",
            price: "$15",
            id: 2
        },
        {
            name: "Iron Man",
            price: "$12",
            id: 3
        }
    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {children}
        </MovieContext.Provider>
    )
}