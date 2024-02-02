import axios from 'axios';

const apiCleint = axios.create({
    baseURL : "http://localhost:8080"
});

export  const retrieveAllTodosForUsername = (username) => apiCleint.get(`/users/${username}/todos`);