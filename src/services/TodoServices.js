import axios from "axios"
// import Todo from "../entities/Todo"
import { baseUrl } from "../utils"

const mainTodoServices = () => {
    const getTodo = async () => await axios.get(`${baseUrl}/posts`)
    const addTodo = async (dataForm) => await axios.post(`${baseUrl}/posts`,dataForm)
    return { getTodo, addTodo }
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

