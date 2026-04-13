// Js -> browser (console) 

// variables
let name = 'Haseeb' //strings
let age = 20 //integer
let city = 'Lahore' //strings
let marks = 90.5 //float
let status = false //boolean

// output
console.log(name)
console.log(age)

// operators: 
// arithmetic(+, -, *, /)
// assignment(=, +=, -=)
// comparison(> , < , ==) x > y
// logical (and, or , not)

// functions

// definin a function
// function greet(){
//     // block
//     console.log('Hello, Guest')
// }

// calling a function
// greet()

// function to add two numbers

// function addValues(a, b){ //parameters
//     console.log(a + b)
// }
// addValues(5, 10) //arguments
// addValues(2, 4)


// JS HTML DOM

// fetching an element
// document.getElementById('text').innerHTML = 'Text written <span>by JS</span>'
// document.querySelector('h1').innerText = 'Text written by JS'

// changing styles using JS
// document.getElementById('text').style.color = 'blue'

// changing color with user input
// let color = document.getElementById('color')
// function changeColor(){
//     // document.getElementById('text').style.color = 'blue'
//     document.getElementById('text').style.color = color.value
// }

// document.querySelector('#btn').addEventListener('click', changeColor)

// multiple styles with events

// let btn = document.getElementById('btn')
// let text = document.getElementById('text')
 

// btn.addEventListener('click', function(){
//     text.style.color = 'yellow'
//     text.style.backgroundColor = 'black'
//     text.style.textDecoration = 'underline'
// })

// a function with params and args
// function greet(name){
//     console.log('Hello, ' + name)
// }
// greet('Ahmed')

// function addValues(x, y){
//     console.log(x + y)
// }
// addValues(2, 4)

// arrow function (anonymous, inline function)

// let greet = (name) => console.log('Hello,' + name)
// greet('Ahmed')


// btn.addEventListener('click', () =>{
//     text.style.fontWeight = 'lighter'
// })


// arrays
// city = 'Lahore'
// cities = ['Lahore', 'Karachi', 'Multan', 'Quetta', 'Nankana'] //array of strings
// console.log(cities)

// accessing specific values in an array
// indexing

// console.log(cities[1])
// let x = cities[0]
// console.log(x)

// assigning a new value
// cities[2] = 'Sialkot' 
// console.log(cities)

// properties and methods
// console.log(cities.length) //property
// cities.push('Gujranwala') //method
// let y = cities.pop() //returned value
// console.log(cities)
// console.log(y)

// loops



// Calcultor using html, tailwind and js

function calculator(operator){
    let n1 = parseFloat(document.getElementById('num1').value)
    let n2 = parseFloat(document.getElementById('num2').value)
    let result = 0

    if(operator === '+') result = n1 + n2
    else if(operator === '-') result = n1 - n2
    else if(operator === 'x') result = n1 * n2
    else if(operator === '/') result = n1 / n2
    else result = 'Error: Operator not valid'

    document.getElementById('result').innerText = result

}

function clear(){
        document.getElementById('num1').value = 0
        document.getElementById('num2').innerText = 0
}


