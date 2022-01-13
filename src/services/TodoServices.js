import axios from "axios"
// import Todo from "../entities/Todo"
import { baseUrl } from "../utils"

const mainTodoServices = () => {
    const getTodo = async () => await axios.get(`${baseUrl}/posts`)
    const getDetailTodo = async (id) => await axios.get(`${baseUrl}/posts/${id}`)
    const addTodo = async (dataForm) => await axios.post(`${baseUrl}/posts`,dataForm)
    const deleteSelectedTodo = async (id) => await axios.delete(`${baseUrl}/posts/${id}`)
    const updateTodo = async (dataForm,id) => await axios.put(`${baseUrl}/posts/${id}`,dataForm)
    return { getTodo, addTodo, deleteSelectedTodo, getDetailTodo, updateTodo }
}
// const getTodo = async() =>{
//     let data = []
//      await axios.get(`${baseUrl}/posts`).then((res)=>{
//         for (let i = 0; i < res.data.length; i++) {
//             data.push(new Todo(res.data[i].id,res.data[i].title,res.data[i].description,""))
//         }
//     })
//     return data
// } 

export { mainTodoServices }

