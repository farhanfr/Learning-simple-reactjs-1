import React, { Component, Fragment } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { mainTodoServices } from '../../services/TodoServices';

class FormUpdateData extends Component {

    state = {
        dataForm: {
            id: 0,
            title: "",
            description: "",
            author: ""
        },
        errorForm:{
            title: '',
            description: ''
        }
        
    }

    componentDidMount(){
        this.handleDataTodo()
    }

    handleDataTodo = () => {
        let dataTodo = this.props.location
        this.setState({
            dataForm: {
                id: dataTodo.state['id'],
                title: dataTodo.state['title'],
                description: dataTodo.state['description'],
                author: dataTodo.state['author']
            }
        })
    }

    updateTodoData = () => {
        const { updateTodo } = mainTodoServices()
        let dataForm = this.state.dataForm
        updateTodo(dataForm,dataForm['id']).then((res) => {
            console.log(res.data)
            this.props.history.goBack()
        }).catch((err) => {
            console.log(err)
        })
    }

    handleOnChange = (event) => {
        let dataFormNew = { ...this.state.dataForm }
        dataFormNew[event.target.name] = event.target.value
        this.setState({
            dataForm: dataFormNew
        })
    }

    validate = () => {
        let titleError = ""
        let descriptionError = ""
        if (!this.state.dataForm['title']) {
            titleError = "Name is required"
        }
        if (!this.state.dataForm['description']) {
            descriptionError = "description is required"
        }
        if (titleError || descriptionError) {
            this.setState({ 
                errorForm:{
                    title: titleError,
                    description: descriptionError
                }
            });
            return false;
        }
        return true
    }

    handleOnSubmit = () => {
        if (this.validate()) {
            this.updateTodoData()
        }
    }

    render() {
        const{errorForm,dataForm} = this.state
        return (
            <Fragment>
                <Container>
                    <h4>Form Update data page</h4>

                    <Form.Group className="mb-3">
                        <Form.Label>Title TODO</Form.Label>
                        <Form.Control type="text" name='title' placeholder="Enter title" value={dataForm['title']} onChange={this.handleOnChange} />                        
                        <span className="text-danger">{errorForm['title']}</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name='description' value={dataForm['description']} placeholder="Enter description" onChange={this.handleOnChange}/>
                        <span className="text-danger">{errorForm['description']}</span>
                    </Form.Group>
                    <Button type='submit' onClick={this.handleOnSubmit}>Submit</Button>

                </Container>
            </Fragment>
        );
    }
}

export default withRouter(FormUpdateData) ;