import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useAuth } from './security/AuthContext';

function LoginComponent(){
    const[username,setUsername]=useState('');
    const[password,setPassword] = useState('');
    const[showErrorMessage,setShowErrorMessage] = useState(false);
    const navigate = useNavigate();
    const authContext = useAuth();
    
    
    
    function handleUsernameChange(event){
    setUsername(event.target.value);
    }
    function handlePassword(event){
        setPassword(event.target.value);
        }
    
    async function handleSubmit(){
        if(await authContext.login(username,password)){
            navigate(`/welcome/${username}`);
        }
        else{
            setShowErrorMessage(true);
        }
        }
    
        return(
            <div className="Login">
                <h1>Time to login!!</h1>
               <div className="LoginForm">
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

    export default LoginComponent