import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { retrieveTodoApi, updateTodo } from './todo/api/TodoApiService';
import { useAuth } from './todo/security/AuthContext';
import { Formik, Field, Form, ErrorMessage } from 'formik'; 

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
        const todo={
            id : 'id',
            username : 'username',
            description: description,
            targetDate : targetDate,
            done :false
        }
        console.log(todo)
        // updateTodo(username,id,todo)
       } 
       function validate(values){
        let errors = {
            // description : 'Enter a valid description',
            // targetDate : 'Enter a valid date'
        }
        if(values.description.length<5){
            errors.description='Enter atleast 5 characters'

        }
        if(values.targetDate==null){
            errors.targetDate = 'Enter a targetDate'
        }
        console.log(values)
        return errors;
       } 

    

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={{description,targetDate}}
                enableReinitialize={true}
                onSubmit={onSubmit}
                validate={validate}
                validateOnBlur={false}
                validateOnChange={false}>
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage
                                name ="description"
                                component="div"
                                className='alert alert-warning'
                                />

                            <ErrorMessage
                                name ="targetDate"
                                component="div"
                                className='alert alert-warning'
                                />

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