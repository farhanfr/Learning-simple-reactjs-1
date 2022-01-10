import React from 'react';

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