import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { retrieveTodoApi } from './todo/api/TodoApiService';
import { useAuth } from './todo/security/AuthContext';
import { Formik, Field, Form } from 'formik'; 

function TodoComponent(){

    const [description,setDescription] = useState('')
    const [targetDate,setTargetDate] = useState('')


    const {id} = useParams();

    const authContext = useAuth();

    const username = authContext.username;

    function retrieveTodos(){

        retrieveTodoApi(username,id)
        .then(response => {
            setDescription(response.data.description)
            setTargetDate(response.data.targetDate)
        })
        .catch((error) => console.log('error'))
    }

    useEffect(
        () => retrieveTodos(),[id]
        )

       function onSubmit(values){
        console.log(values)
       } 

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={{description,targetDate}}
                enableReinitialize={true}
                onSubmit={onSubmit}>
                    {
                        (props) => (
                            <Form>
                                <fieldset className='form-group'>
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description"/>
                                </fieldset>

                                <fieldset className='form-group'>
                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate"/>
                                </fieldset>
                                <div>
                                    <button className="btn btn-success" type='submit'>Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

export default TodoComponent