import React from 'react'

function CardContact({ img, job, name, map,message }) {
    return (
        <div className='card w-96 h-[407px] flex items-center justify-center'>
            <img className='ml-[-1rem]' src={img} alt={img}  />
            <div className='card-text text-center ml-0'>
                <h2>{name}</h2>
                <h3>{map}{job}</h3>
            </div>
            <div className='ml-3 mt-5 items-center justify-center flex flex-col gap-3'>
                <button className='card-button text-buttonColor bg-cardBack border-buttonColor border-2 w-[180px] '>Fallowing</button>
                <button className='card-button w-[180px] flex justify-center items-center gap-1 font-bold'><span>{message}</span>Message</button>
            </div>
        </div>
    )
}

export default CardContact
