import React from 'react'
import './Add.css'

function Add({src, title, urlLink}) {
    return (
        <div className="add">
            <img src={src} alt="" />
            <div className="add__info">
                <h4>{title}</h4>
                <h6>{urlLink}</h6>
            </div>
        </div>
    )
}

export default Add;
