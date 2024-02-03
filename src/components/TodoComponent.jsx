import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { retrieveTodoApi } from './todo/api/TodoApiService';
import { useAuth } from './todo/security/AuthContext';

function TodoComponent(){

    const [description,setDescription] = useState('')

    const {id} = useParams();

    const authContext = useAuth();

    const username = authContext.username;

    function retrieveTodos(){

        retrieveTodoApi(username,id)
        .then(response => {
            setDescription(response.data.description)
        })
        .catch((error) => console.log('error'))
    }

    useEffect(
        () => retrieveTodos(),[id]
        )

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                description :{description}
            </div>
        </div>
    );
}

export default TodoComponent