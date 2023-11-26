import React from 'react'

export default function SwitchAccountSection() {
    return (
        <>
        {/* Switch Account Section */}
            <a href='/'>
                <img src='Images/circleicon.svg' alt="circleicon" width="44" height="44"></img>
            </a>
            <a href='/'>
                <div className='d-flex flex-column'>
                    <span className='fw-bold'>_.vedantt._22</span>
                    <small>Vedant Kulkarni</small>
                </div>
            </a>
            <div>
                <a href='/' className='' style={{ color: "rgb(0, 149, 246)" }}>Switch</a>
            </div>
        </>
    )
}
