import React from 'react'

function Card({ img, name, job, like, wacthed, svgLike, svgWacthed }) {
    return (
        <div className='card'>
            <div className='card-body'>
                <img src={img}  alt={name} />
                <div className='card-text '>
                    <h2 >{name}</h2>
                    <h3>{job}</h3>
                    <div className='card-span'>
                        <span >{svgLike}{like}</span>
                        <span >{svgWacthed} {wacthed}</span>
                    </div>
                    <button className='card-button'>Fallow</button>
                </div>
            </div>
        </div>
    )
}

export default Card
