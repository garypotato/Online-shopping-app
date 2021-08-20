# A Mobile Shopping App
![](https://img.shields.io/badge/Build-React-green)
![](https://img.shields.io/badge/Build-Redux-green)
![](https://img.shields.io/badge/Build-React--redux-yellowgreen)  
The purpose of developing this app is practising `Redux-middleware`.   
I always use Function Components in web development, in this app I used `Class Component` because I believe some developers are still using it so it is a good opportunity to do some practice.  
Please visit this app in `Mobile Mode` :point_right: https://main.d24qeurrp3ff0q.amplifyapp.com/ 

# UI 
This is the home page of this app. I like the user interface as it is simple and easy to understand. 
![1](https://user-images.githubusercontent.com/72715709/130181184-7056fc64-20f5-4cf0-aef8-0417fc92f5f5.gif)

# Mock Data
All the mock data are stored under the `Public/mock` file which is easy to access.  
`Products` are stored in an `Array`, and the structure of the data will be like that
```
[
  {
    "id": "p-100",
    "shopIds": ["s-100"],
    "shop": "Dancing club",
    "tag": "noBooking",
    "product": "DancingClub",
    "currentPrice": 1,
    "oldPrice": 400,
    "picture": "https://p1.meituan.net/dpdeal/a8eb71748e1f4df175668368e98bb4f868511.jpg.webp@120w_90h_1e_1c_1l|watermark=1&&r=1&p=9&x=20&y=20"
  },
  {...},
  {...}
 ]
```
Array allows me to map and re-structure the data easily. The new data stored in `Object` will be like that
![WeChat Screenshot_20210820151509](https://user-images.githubusercontent.com/72715709/130182911-48a6767d-226e-4e53-83ff-fbdc57efd234.png)  
`Object` allows me to use `Object.keys()` or `Object.values()` to get whatever I need. The data structure of `shops` and `orders` will be the same. 

## url

# Why React-redux
`useContext` + `useReducer` is becoming more and more popular but I stick with `React-redux`. It provides many API can make the code more readable and easy to understand. `Connet()` can easily connect the React component to Redux which is awesome for this application.

# Data Structure
Since I have the mock data, I was thinking how the data should be in `Redux`. After finishing the design of the user interface, I decided the data structure should depends on different pages, while the `entities Module` stored the details.
```
Redux {
  entities: { {products:{p-1:{...}}, shops:{s-1:{...}}, orders: {o-1: {...}}, keywords:{"string", ...} }
  home:{ discounts: {ids:[1, 2, 3]}, likes:{ids:[4,5,6]} }
}
```
## Home page
## reason 
## schema
In home page, there are two components need data. The `discount` section shows the items under discount while `likes` secion presents all the products.  
![WeChat Screenshot_20210820154410](https://user-images.githubusercontent.com/72715709/130185492-537e0d37-b436-4ac8-9785-bc902d4d0457.png)  
An array of `id` will be saved in Redux, there is a possibility that one itme shows in `discount` and `likes` section at the same time. So only `id` is needed because I put the `product detail` in `entities` module.  
![WeChat Screenshot_20210820160111](https://user-images.githubusercontent.com/72715709/130187180-a0c4dcad-9543-4c9d-a851-15ee819a1a71.png)  

## entities Module
`entities module` stored detail of `products`, `shops` and `orders`. Therefore, componts can request the data according to the `product id` and `shop id`.  

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
