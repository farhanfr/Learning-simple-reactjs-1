import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { CardHomeContent, DefaultCard } from '../../components';
import { mainTodoServices } from '../../services/TodoServices';

class Home extends Component {

    state = {
        todoData: [],
        totalTodoData: 0,
        isLoading: true
    }

    componentDidMount() {
        this.getAllTodo()
    }

    handleToDetailPage = (id) => {
        this.props.history.push(`/todo/${id}`)
    }

    handleToFormUpdate = (data) => {
        console.log(data)
        this.props.history.push(`/updatedata`,{
            id : data['id'],
            title : data['title'],
            description : data['description'],
            author : data['author']
        })
    }

    getAllTodo = () => {
        const { getTodo } = mainTodoServices()
        getTodo().then((res) => {
            this.setState({
                todoData: res.data,
                totalTodoData: res.data.length,
                isLoading: false,
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    deleteSelectedTodo = (id) => {
        const { deleteSelectedTodo } = mainTodoServices()
        deleteSelectedTodo(id).then((res) => {
            console.log(res.data)
            this.getAllTodo()
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.isLoading ? <center><Spinner animation='border' /> </center> :
                        <Container>
                            <br />
                            <h2>List of Todo : {this.state.totalTodoData}</h2>
                            <hr />
                            <Button className='btn btn-success' href='/createdata'>Add Todo</Button>
                            <br />
                            <br />
                            <Row sm={2} md={3}>
                                {
                                    this.state.todoData.length > 0 ?
                                        this.state.todoData.map((data, index) => {
                                            return <Col key={data.id}>
                                                <DefaultCard>
                                                    <CardHomeContent 
                                                    todo={data} 
                                                    handleDeleteTodo={this.deleteSelectedTodo} 
                                                    handleToDetailPage={this.handleToDetailPage}
                                                    handleToFormUpdate={this.handleToFormUpdate} />
                                                </DefaultCard>
                                                <br />
                                            </Col>
                                        }) : <h3>Empty todo</h3>
                                }
                            </Row>
                        </Container>
                }
            </Fragment>
        );
    }
}

export default withRouter(Home) 