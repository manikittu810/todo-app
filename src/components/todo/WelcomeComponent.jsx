import {useParams, Link } from "react-router-dom";
import axios from 'axios';

function callHelloWorldRestApi(){
console.log('called');

//the below is an asynchronous approach

axios.get('http://localhost:8080/hello-world')
        .then((response) => successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally(()=>console.log('cleanup'))
}
function successfulResponse(response){
    console.log(response);
}
function errorResponse(error){
    console.log(error);
}

function WelcomeComponent(){
    const {username} = useParams();
    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username} !</h1>
        <div>
            Your Todos <Link to="/todos">Go here !! </Link>
        </div>
        <div>
            <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>call Hello World</button>
        </div>

        </div>
    );
}

export default WelcomeComponent