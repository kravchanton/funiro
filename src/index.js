import './scss/style.scss';
import $ from 'jquery'

const userStack = {
    language: 'JavaScript',
}

const user = {
    name: Anton,
    age: 26,
    ...userStack
}

console.log(user)