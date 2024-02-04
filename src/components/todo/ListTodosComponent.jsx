import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsername } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import {useNavigate} from 'react-router-dom';

function ListTodosComponent(){

    const authContext = useAuth()

    const username = authContext.username

    // const today = new Date();
    // const targetDate  = new Date(today.getFullYear()+12,today.getMonth(),today.getDay());

    const [todos,setTodos] =useState([]);

    const[message,setMessage] = useState(null);

    const navigate=useNavigate() ;

    useEffect(
        ()=>refreshTodos(),[]
    );

    function refreshTodos(){

        retrieveAllTodosForUsername('in28minutes')
        .then(response => {
            setTodos(response.data)
        })
        .catch(error => console.log('error'))
    }

    function deleteTodo(id){
        console.log("clicked" + id)
        deleteTodoApi('in28minutes',id)
        .then(() =>{
            setMessage(`Delete of todo with id = ${id} is successfull`)
            refreshTodos()
        })
        .catch((error) => console.log("error"))
    }
    function updateTodo(id){
        console.log("clicked" + id)
        navigate(`/todos/${id}`)
       
    }

    function addNewTodo(){
        navigate(`/todo/-1`)
    }

    return(
        <div className="container">
            {message && <div className="alert alert-warning">{message}</div>}
            <h1>Things you want to Do !</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo =>(
                                    <tr key = {todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td> <button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}> Delete</button></td>
                                        <td> <button className="btn btn-success" onClick={()=>updateTodo(todo.id)}> Update</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success" onClick={addNewTodo}>Add New Todo</div>
        </div>
    );
}

export default ListTodosComponent

