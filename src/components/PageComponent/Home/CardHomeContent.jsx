import React from 'react';
import { Button } from 'react-bootstrap';
import './CardHomeContent.css';

const CardHomeContent = (props) => {
    return (
        <div>
            <h3>{props.todo.title}</h3>
            <p>{props.todo.description}</p>
            <div className='container-card-btn'>
                <Button className='btn btn-primary' onClick={()=>props.handleToDetailPage(props.todo.id)}>Detail</Button>
                <Button className='btn btn-success' onClick={()=>props.handleToFormUpdate(props.todo)}>Update</Button>
                <Button className='btn btn-danger' onClick={()=>{
                    if(window.confirm('Are you sure delete this todo ?'))
                        props.handleDeleteTodo(props.todo.id)   
                }}>Delete</Button>
            </div>

        </div>
    )
}

CardHomeContent.defaultProps = {
    title: 'title',
    description: 'description'
}

export default CardHomeContent