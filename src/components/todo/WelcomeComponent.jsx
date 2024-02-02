import {useParams, Link } from "react-router-dom";
import {useState}  from "react";
import { retrieveHelloWorldBean,retrieveHelloWorld,retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";
function WelcomeComponent(){

    const {username} = useParams();

    const [message,setMessage]= useState(null)

function callHelloWorldRestApi(){

//the below is an asynchronous approach

        console.log('called');

        retrieveHelloWorld()
        .then((response) => successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally(()=>console.log('cleanup'))
}

function callHelloWorldBean(response){

    console.log('bean called')

    retrieveHelloWorldBean()
    .then((response) => successfulResponse1(response))
    .catch((error) => errorResponse(error))
    .finally(()=> console.log('cleanUp the bean'))
}

function callHelloWorldPathVariable(response){
    console.log('path variable called')
    retrieveHelloWorldPathVariable('SMK')
    .then((response) => successfulResponse2(response))
    .catch((error) => errorResponse(error))
    .finally(()=> console.log('cleanUp the bean'))
}

function successfulResponse(response){
    console.log(response);
    setMessage(response.data)
}

function successfulResponse1(response){
    console.log(response);
    setMessage(response.data.message)
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
            <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>call Hello World</button>
        </div>
        <div>
            <button className="btn btn-success m-5" onClick={callHelloWorldBean}>call Hello World Bean</button>
        </div>
        <div>
            <button className="btn btn-success m-5" onClick={callHelloWorldPathVariable}>call Path variable</button>
        </div>
       <div className="text-info">{message}</div>
        </div>
    );
}

export default WelcomeComponent