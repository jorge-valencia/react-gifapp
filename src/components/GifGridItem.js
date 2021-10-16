import React from 'react'

export const GifGridItem = ( img ) => {

    return (
        <div className="card animate__animated animate__fadeInDown">
           <img src = {img.img.url} alt= { img.img.title } />
           <p> { img.img.title } </p>
        </div>
    )
}
