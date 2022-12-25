import React from 'react'

const Movie = ({id, name, price}) => {
    return (
        <li key={id} className='card'>
            <div className="card-body">
                <p className='card-title'>{name}</p>
                <p className='card-text'>{price}</p>
            </div>
        </li>
    )
}

export default Movie;