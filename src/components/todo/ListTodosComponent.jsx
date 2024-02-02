import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsername } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";

function ListTodosComponent(){
    // const today = new Date();

    // const targetDate  = new Date(today.getFullYear()+12,today.getMonth(),today.getDay());

    const [todos,setTodos] =useState([]);
    const[message,setMessage] = useState(null);
    const authContext = useAuth();
    const username =authContext.username;

    useEffect(
        ()=>refreshTodos(),[]
    );

    function refreshTodos(){

        retrieveAllTodosForUsername(username)
        .then(response => {
            setTodos(response.data)
        })
        .catch((error) => console.log('error'))
    }

    function deleteTodo(id){
        console.log("clicked" + id)
        deleteTodoApi(username,id)
        .then(() =>{
            setMessage(`Delete of todo with ${id} is successfull`)
                refreshTodos()
        })
        .catch((error) => console.log("error"))
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

                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListTodosComponent