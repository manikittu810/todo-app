import './TodoApp.css';
import { useState } from 'react';

export default function TodoApp(){
    return(
        <>
        <div className="TodoApp">
        <LoginComponent />
        {/* <WelcomeComponent /> */}
        </div>
        </>
    );
}

function LoginComponent(){
const[username,setUsername]=useState('Smk_TodoApp');
const[password,setPassword] = useState('');
const[showSuccessMessage,setShowSuccessMessage] = useState(false);
const[showErrorMessage,setShowErrorMessage] = useState(false);



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
    }
    else{
    console.log("failed");
    setShowSuccessMessage(false);
    setShowErrorMessage(true);

    }
    }

    function SuccessMessageComponent(){
        if(showSuccessMessage){
        return <div className='successMessage'>Authentication  Successfull!!</div>
        }
        return null;
    }
    function ErrorMessageComponent(){
        if(showErrorMessage){
        return <div className='errorMessage' >Authentication  Failed!! Please check your Credentials</div>
        }
        return null;
    }

    return(
        <div className="Login">
           <div className="LoginForm">
            <SuccessMessageComponent />
            <ErrorMessageComponent />
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
    return(
        <div className="Wecome">Welcome component</div>
    );
}