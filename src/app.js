import '../css/style.css'
import {people} from './bar'

const data = document.getElementById('root')

data.innerHTML = '<h1>' + people.name + '</h1>'

