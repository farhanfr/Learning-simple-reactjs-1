import React,{Component, Fragment} from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { mainTodoServices } from '../../services/TodoServices';

class DetailTodo extends Component {

    state = {
        dataDetail:{
            id: 0,
            title:'',
            description:'',
            author:''
        },
        isLoading : true
    }

    componentDidMount(){
        let id = this.props.match.params.id
        this.getDetailTodo(id)
    }

    getDetailTodo = (id) =>{
        const { getDetailTodo } = mainTodoServices()
        getDetailTodo(id).then((res) => {
            this.setState({
                dataDetail: res.data,
                isLoading: false,
            },()=>console.log(this.state.dataDetail))
        }).catch((err) => {
            console.log(err)
        })
    }

    render() { 
        const{isLoading,dataDetail} = this.state
        return (
            <Fragment>
                {
                isLoading  ? <center><Spinner animation='border' /> </center> : 
                <Container>
                    <h2>{dataDetail['title']}</h2>
                    <h3>{dataDetail['description']}</h3>
                </Container>
                
            }
            </Fragment>
            
        );
    }
}
 
export default DetailTodo;
