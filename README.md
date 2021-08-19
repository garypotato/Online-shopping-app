# A Mobile Shopping App
![](https://img.shields.io/badge/Build-React-green)
![](https://img.shields.io/badge/Build-Redux-green)
![](https://img.shields.io/badge/Build-React--redux-yellowgreen)  
The purpose of developing this app is practising `Redux-middleware`.   
I always use Function Components in web development, in this app I used `Class Component` because I believe some developers are still using it so it is a good opportunity to do some practice.  

# Why Redux
`useContext` + `useReducer` is becoming more and more popular but I stick with `Redux` since I wanted to have customzied Redux-middleware in this app, which allows me to do something before a action arrives Reducer.

# Redux Middelware
## reason: 1. too many fetch and too many same logic 2.simpliced code
## how
1. define an action
```
{
  [FETCH_DATA]: {
    types: [
      types.FETCH_LIKES_REQUEST,
      types.FETCH_LIKES_SUCCESS,
      types.FETCH_LIKES_FAILURE
    ],
    endpoint,
    schema
  }
}
```
2. check the action in middleware
```
const callAPI = action[FETCH_DATA]
  if(typeof callAPI === 'undefined') {
    return next(action)
  }

  const { endpoint, schema, types } = callAPI
  if(typeof endpoint !== 'string') {
    throw new Error('endpoint must be a string type URL')
  }
  if(!schema) {
    throw new Error('undefined schema')
  }
  if(!Array.isArray(types) && types.length !== 3) {
    throw new Error('must be an array with 3 action types')
  }
  if(!types.every(type => typeof type === 'string')) {
    throw new Error('action type must be string type')
  }
```
3. 增強中間件

# Data structure
## reason 
## how
## schema

# request
use json格式

# Using Fetch
I used `Fetch API` because it is a browser in-built web API. It works similar with `Aioxs`, but I think Fetch can handle it as it is easier to wrap into a Function and no interceptor is needed.
```
const headers = new Headers({
  "Accept": "application/json",
  "Content-Type": "application/json"
})
function get(url) {
  return fetch(url, {
    method: "GET",
    headers: headers
  }).then(response => {
    return handleResponse(url, response);
  }).catch(error => {
    return Promise.reject({error: {message: "Request failed."}})
  })
}
function post(url, data) {
  return fetch(url, {
    method: "POST",
    headers: headers,
    body: data
  }).then(response => {
    return handleResponse(url, response);
  }).catch(error => {
    return Promise.reject({error: {message: "Request failed."}})
  })
}

function handleResponse(url, response) {
  if(response.status === 200) {
    return response.json();
  } else {
    return Promise.reject({error: {message: "Request failed due to server error"}})
  }
}

export {get, post}
```

# auto load
