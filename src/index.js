import './scss/style.scss';
import './js/files/script'
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