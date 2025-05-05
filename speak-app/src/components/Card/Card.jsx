import React from 'react'
import './Card.css'

const Card = ({link, name, img}) => {
    return (
        <>
            <a href={`${link}`} className='card-a'>
                <div className='game-card'>
                    <h3 className='game-h3'>{name}</h3>
                    <img src={`${img}`} className='game-img'/>
                </div>
            </a>
        </>
    )
}

export default Card