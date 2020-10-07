import '../css/style.css'
import {people} from './bar'
// const bar = require('./bar')

const data = document.getElementById('root')

data.innerHTML = '<h1>' + people.name + '</h1>'

// console.log(JSON.stringify(people , null , 2))
