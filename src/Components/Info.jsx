import React from 'react'

function Info({text,img,state}) {
    return (
        <div className="content__right-item">
            <div className="content__right-img">
                <img src={img} alt="" />
            </div>
            <h3 className="content__right-title">{text}</h3>
            <p className="content__right-text">{state}</p>
        </div>
    )
}

export default Info