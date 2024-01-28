import './TodoApp.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams,Link } from 'react-router-dom';
export default function TodoApp(){
    return(
        <>
        <div className="TodoApp">

        <BrowserRouter>
        <HeaderComponent />

            <Routes>
                <Route path='/' element={<LoginComponent />}/>
                <Route path='/login' element={<LoginComponent />}/>
                <Route path='/welcome/:username' element={<WelcomeComponent />}/>
                <Route path='/todos' element={<ListTodosComponent />}/>
                <Route path='/logout' element={<LogoutComponent />}/>
                <Route path='/*' element={<ErrorComponent />}/>
                
            </Routes>
            <FooterComponent/>

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
        <div>
            Your Todos <Link to="/todos">Go here !! </Link>
        </div>

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
    const today = new Date();

    const targetDate  = new Date(today.getFullYear()+12,today.getMonth(),today.getDay());

    const todos = [
    {id:1,description:'Learn AWS',done : false,targetDate : targetDate},
    {id:2,description:'Learn GCP',done : false,targetDate : targetDate},
    {id:3,description:'Learn Devops',done : false,targetDate : targetDate},
    {id:4,description:'Learn Full stack',done : false,targetDate : targetDate}
                ]

    return(
        <div className="container">
            <h1>Things you want to Do !</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
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
                                        <td>{todo.targetDate.toDateString()}</td>
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

function HeaderComponent(){
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.linkedin.com/in/msanganabatla/">My_Linkedin</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/SMK">Home</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    );
}

function FooterComponent(){
    return(
        <footer className="footer">
            <div className='container'>
            Your Footer
            </div>
        </footer>
    );
}

function LogoutComponent(){
    return(
        <div className="LogoutComponent">
            <h1>You are logged out</h1>
            <div>
                Thank you for using our app. Come back soon.... !!
            </div>
        </div>
    );
}