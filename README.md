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

# Fetch API
`Axios` is definetly the best option but I insisted using `Fetch`, because it is built into most modern browsers and no installation is required as such. Another reason is that I don't need XSRF protection and interceptor.  
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
```
What I need to just make sure is that it provide and accept entities as `JSON`.


# Why React-redux
`useContext` + `useReducer` is becoming more and more popular but I stick with `React-redux`. It provides many API can make the code more readable and easy to understand. `Connet()` can easily connect the React component to Redux which is awesome for this application.


# Data Structure
The data can divided into to two parts. The first part is `entites`, which stored product details, shope details, user orders and search history. The second part is the state based on each pages like home, producet detils, login, user information, purchase and so on.  
![WeChat Screenshot_20210820195127](https://user-images.githubusercontent.com/72715709/130215527-57aca5ab-4b64-4a86-a147-643bc11f78bf.png)
## entities
`entities` includes multiple state, and each state has its own `schema` which describes the shape of the state.  
![WeChat Screenshot_20210820195834](https://user-images.githubusercontent.com/72715709/130216507-d7fe3e8e-a0e1-40bc-ba40-138618d2302e.png)
![WeChat Screenshot_20210820200122](https://user-images.githubusercontent.com/72715709/130216980-67ecfb8e-4e9f-4257-b6bf-68f2f50964dd.png)
![WeChat Screenshot_20210820200229](https://user-images.githubusercontent.com/72715709/130217076-401db351-f1ce-4212-916d-8b5f889e985a.png)  
After receiving response, the response data will be `normalized` and return a new form  
```
const normalizeData = (data, schema) => {
  const {id, name} = schema
  let kvObj = {}
  let ids = []
  if(Array.isArray(data)) {
    data.forEach(item => {
      kvObj[item[id]] = item
      ids.push(item[id])
    })
  } else {
    kvObj[data[id]] = data
    ids.push(data[id])
  }
  return {
    [name]: kvObj,
    ids
  }
}
```
`[name]: kvObj` will be the state for `[name] entity`(for example 'shop') while `ids` array will be the state for different pages like `home` page.  
The `state` stored in entity  
![WeChat Screenshot_20210820202026](https://user-images.githubusercontent.com/72715709/130219330-cd45e958-60d3-4314-a66b-f55a2e0076ac.png)
![WeChat Screenshot_20210820202059](https://user-images.githubusercontent.com/72715709/130219378-a432df01-46cd-4b3f-8cd3-e4b1c3aa4235.png)  
The `state` stored in pages, for example `home pages`. In this page, I just need to know which item is under discount or user will like. Therefore, an array of `id` is the best way to let the app know which item should go which section.  
![WeChat Screenshot_20210820202340](https://user-images.githubusercontent.com/72715709/130219730-3e73933d-4555-48fa-a546-3ccd92f12138.png)  
## other state
Beside `entities`, the rest of state will be divided to multiple parts according to the pages.  
```
home - item id array
detail - selected item detail
login - if user is login the app user information
user - user's order
```

# Redux Middelware
The reason I used `redux-middleware` is `DRY Priciple`. In this app, same logic will go again and again and I am tired of writing the same code. Another important thing is it is hard to maintain so I decieded to use `middleware`.
## define an action
The action is named in `[FETCH_DATA]`. `endpoint` will be the `url` while the `schema` describes the shape of the data will be.
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
## check the action in middleware
This middleware will be called when an action comes with `[FETCH_DATA]`
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
## pass to next middleware
```
const actionWith = data => {
    const finalAction = {...action, ...data}
    delete finalAction[FETCH_DATA]
    return finalAction
  }

  const [requestType, successType, failureType] = types

  next(actionWith({type: requestType}))
  return fetchData(endpoint, schema).then(
    response => next(actionWith({
      type: successType,
      response 
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'data fetching failed'
    }))
  )
```

# Enhance user experience
when user scroll to the bottom, it will immediately fetch new data.
![2](https://user-images.githubusercontent.com/72715709/130226029-43dd0007-fcc9-441a-ba92-0f8a6c87b010.gif)

