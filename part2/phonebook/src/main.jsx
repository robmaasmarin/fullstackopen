import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import axios from 'axios'
/*
const promise = axios
  .get('http://localhost:3001/persons')
  promise.then(response => {
  const persons = response.data
  console.log(persons)
})*/
/*
const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)*/
/*
const persons = [
  {
    id: 1,
    name: 'Rob',
    
  },
  {
    id: 2,
    name: 'Bob',
    
  },
  {
    id: 3,
    name: 'Robbie',
    
  }
]
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <App  />
)