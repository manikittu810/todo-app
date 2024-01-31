import {useParams, Link } from "react-router-dom";
import axios from 'axios';
import {useState}  from "react";

function WelcomeComponent(){

    const {username} = useParams();

    const [message,setMessage]= useState(null)

function callHelloWorldRestApi(){
    console.log('called');

//the below is an asynchronous approach

axios.get('http://localhost:8080/hello-world')
        .then((response) => successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally(()=>console.log('cleanup'))
}

function callHelloWorldBean(response){
    console.log('bean called')
    axios.get('http://localhost:8080/hello-world-bean')
    .then((response) => successfulResponse(response))
    .catch((error) => errorResponse(error))
    .finally(()=> console.log('cleanUp the bean'))
}

function successfulResponse(response){
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
            <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>call Hello World</button>
        </div>
        <div>
            <button className="btn btn-success m-5" onClick={callHelloWorldBean}>call Hello World Bean</button>
        </div>
       <div className="text-info">{message}</div>
        </div>
    );
}

export default WelcomeComponent