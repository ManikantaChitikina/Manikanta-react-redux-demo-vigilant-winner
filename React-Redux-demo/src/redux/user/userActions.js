import axios from 'axios';
// import https from 'https';

import { FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE } from "./userTypes"
export const fetchUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess=users=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
export const fetchUsersFailure=error=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}
export const fetchUsers=()=>{
   
    return (dispatch)=>{
        dispatch(fetchUsersRequest());
        axios.get('https://your-server-url.com/api/users').then(response=>{
            const users=response.data;
            dispatch(fetchUsersSuccess(users));
        })
        // .catch(error=>{
        // const errorMsg=error.message
        // dispatch(fetchUsersFailure(errorMsg));
        // })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Response Error:', error.response.data);
                console.error('Status Code:', error.response.status);
                console.error('Headers:', error.response.headers);
                dispatch(fetchUsersFailure(error.response.data));
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Request Error:', error.request);
                dispatch(fetchUsersFailure('Request error: No response received'));
            } else {
                // Something else happened in making the request
                console.error('Error:', error.message);
                dispatch(fetchUsersFailure(error.message));
            }
        });
    }
}
