const title = <h2>Getting Started React </h2>


const welcome = 'Welcome to 30 Days Of React'
const subtitle = 'Javascript Library'
const authorFirstName = 'Co'
const authorLastName = 'Nhan' 
const date = 'Oct 2, 2020'

const header = (
  <header>
    <div className='header-wrapper'>
    <h1>{welcome}</h1>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p>
      Instructor: {authorFirstName} {authorLastName}
    </p>
<small>Date: {date}</small>
    </div>
  </header>
)


// main 
const tech = ['HTML', 'CSS', 'Javascript']
const main = (
  <main>
    <p>Prerequisite to get started react.js</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
  
)

const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)