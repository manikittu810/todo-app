import './TodoApp.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
export default function TodoApp(){
    return(
        <>
        <div className="TodoApp">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginComponent />}/>
                <Route path='/login' element={<LoginComponent />}/>
                <Route path='/welcome/:username' element={<WelcomeComponent />}/>
                <Route path='/todos' element={<ListTodosComponent />}/>
                <Route path='/*' element={<ErrorComponent />}/>
                
            </Routes>
        </BrowserRouter>
        
        </div>
        </>
    );
}

function LoginComponent(){
const[username,setUsername]=useState('Smk_TodoApp');
const[password,setPassword] = useState('');
const[showSuccessMessage,setShowSuccessMessage] = useState(false);
const[showErrorMessage,setShowErrorMessage] = useState(false);
const navigate = useNavigate();



function handleUsernameChange(event){
setUsername(event.target.value);
}
function handlePassword(event){
    setPassword(event.target.value);
    }

function handleSubmit(){
    if(username==='Smk_TodoApp' && password==='smk123'){
        console.log("Success");
        setShowSuccessMessage(true);
        setShowErrorMessage(false);
        navigate(`/welcome/${username}`);
    }
    else{
    console.log("failed");
    setShowSuccessMessage(false);
    setShowErrorMessage(true);

    }
    }

    return(
        <div className="Login">
            <h1>Time to login!!</h1>
           <div className="LoginForm">
            {showSuccessMessage && <div className='successMessage'>Authentication  Successfull!!</div>}
            {showErrorMessage && <div className='errorMessage' >Authentication  Failed!! Please check your Credentials</div>}
            <div>
                <label>username </label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label>Password </label>
                <input type="password" name="password" value={password} onChange={handlePassword}/>
            </div>
            <button type="button" name="login" onClick={handleSubmit}>login</button>
           </div>
        </div>
    );
}





function WelcomeComponent(){
    const {username} = useParams();
    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username} !</h1>
        <div>Welcome component</div>

        </div>
    );
}



function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1>We are working really hard!!</h1>
            <div>
                Apologies for the 404. Reach out to our team at smk@help.com.
            </div>
        </div>
    );
}

function ListTodosComponent(){
    const todos = [
    {id:1,description:'Learn AWS'},
    {id:2,description:'Learn GCP'},
    {id:3,description:'Learn Devops'},
    {id:4,description:'Learn Full stack'}
]
    return(
        <div className="ListTodosComponent">
            <h1>Things you want to Do !</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo =>(
                                    <tr key = {todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                    </tr>
                                )
                            )
                        }
                        <tr>
                            <td>{todos.id}</td>
                            <td>{todos.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}