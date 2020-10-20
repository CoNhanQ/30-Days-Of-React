import React from 'react';
import ReactDOM from 'react-dom';
import roadimage from './images/road.jpg'

//JSX element, Header

const welcome = 'Welcome to 30 Days of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Co',
  lastName: 'Nhan'
}
const date = 'Oct 3, 2020'

const header = (
  <header>
    <div className='header-wrapper'>
     <h1>{welcome}</h1>
<h2>{title}</h2>
<h3>{subtitle}</h3>
<p>Instructor: {author.firstName} {author.lastName}</p>
     <small>Oct 3, 2020</small>
    </div>
  </header>
)

// JSX element, main

const yearBorn = 1996
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)


const main = (
  <main>
   <div className ='main-wrapper'> 
     <img src={roadimage} alt="road" />
    <p> Prerequisite to get started {' '}
        <strong>
          <em>react.js</em>
        </strong>
        .
        .
    </p>
    <ul>
      {techsFormatted}
    </ul>
    {personAge}
   </div> 
  </main>
)


// JSX element, footer
const copyRight = 'Copyright 2020'

const footer = (
  <footer>
   <div className = 'footer-wrapper'>
<p>{copyRight}</p>
   </div>
  </footer>
)

// JSX element, app, a container or a parent

const app = (
  <div> 
    {header}
    {main}
    {footer}
  </div>
)


const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)

