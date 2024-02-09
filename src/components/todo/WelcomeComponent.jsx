import {useParams, Link } from "react-router-dom";
import {useState}  from "react";
import {retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";
function WelcomeComponent(){

    const {username} = useParams();

    const [message,setMessage]= useState(null)

    const authContext = useAuth()



function callHelloWorldPathVariable(response){
    //below is an asynchronous approach 
    console.log('path variable called')
    retrieveHelloWorldPathVariable('SMK',authContext.token)
    .then((response) => successfulResponse2(response))
    .catch((error) => errorResponse(error))
    .finally(()=> console.log('cleanUp the bean'))
}

function successfulResponse2(response){
    console.log(response);
    setMessage(response.data.message)
}

function errorResponse(error){
    console.log(error);
}

    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username} !</h1>
        <div>
            Your Todos <Link to="/todos">Go here !! </Link>
        </div>
        <div>
            <button className="btn btn-success m-5" onClick={callHelloWorldPathVariable}>call Path variable</button>
        </div>
       <div className="text-info">{message}</div>
        </div>
    );
}

export default WelcomeComponent