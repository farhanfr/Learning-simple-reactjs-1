import React from 'react';
import './CardComponent.css';

const CardComponent = (props) => {
    return(
        <div className='card'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

CardComponent.defaultProps = {
    title : 'title',
    description : 'description'
}

export default CardComponent