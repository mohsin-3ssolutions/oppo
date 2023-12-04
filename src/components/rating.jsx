import React from 'react'

export default function Rating() {
    return (
        <div className='reviews w-50'>
            <p className='mb-1'><strong>Proposal Rating</strong></p>
            <ul className='reviews_list'>
                <li>
                    <span><i className='fa fa-star-o'>1</i></span>
                </li>
                <li>
                    <span><i className='fa fa-star-o'>2</i></span>
                </li>
                <li>
                    <span><i className='fa fa-star-o'>3</i></span>
                </li>
                <li>
                    <span><i className='fa fa-star-o'>4</i></span>
                </li>
            </ul>
            <span className='fa fa-camera-retro fa-lg' >4.5</span>
        </div>
    )
}
