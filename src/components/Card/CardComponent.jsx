import React from 'react';
import { Button } from 'react-bootstrap';
import './CardComponent.css';

const CardComponent = (props) => {
    return (
        <div className='card'>
            <h3>{props.todo.title}</h3>
            <p>{props.todo.description}</p>
            <div className='container-card-btn'>
                <Button className='btn btn-primary'>Detail</Button>
                <Button className='btn btn-success'>Update</Button>
                <Button className='btn btn-danger' onClick={()=>{
                    if(window.confirm('Are you sure delete this todo ?'))
                        props.handleDeleteTodo(props.todo.id)   
                }}>Delete</Button>
            </div>

        </div>
    )
}

CardComponent.defaultProps = {
    title: 'title',
    description: 'description'
}

export default CardComponent