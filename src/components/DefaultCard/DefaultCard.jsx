import React from 'react';

import './DefaultCard.css';

const DefaultCard = ({children,...restProps}) =>{
    return(
        <div className='card-template'>
            {children}
        </div>
    )
}

export default DefaultCard