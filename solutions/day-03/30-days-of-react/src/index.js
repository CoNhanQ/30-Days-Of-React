import React from 'react'
import ReactDOM from 'react-dom'
import road from './images/road.jpg'

const welcome = 'Welcome to 30 Days of React'
const title = 'Getting Started React'

const Header = () => (
    <header>
        <div className='jeader-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>JavaScript Library</h3>
            <p>Co Nhan</p>
            <small>Oct 4, 2020</small>

        </div>
    </header>

)

// User Card Component

const UserCard = () => (
    <div className = 'user-card'>
        <img src={road} alt='road' />
        <h2>Co Nhan</h2>
    </div>
)


const TechList = () => {
    const techs = ['Html', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li key = {tech}>{tech} </li>)
    return techsFormatted
}

// button
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0,255,0)',
  border: 'none',
  borderRadius: 5,
}

const Button = () => <button style = {buttonStyles}> action </button>

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div>{hexaColor()}</div>


// Main Component

const Main = () => (
    <main>
        <div className='main-wrapper'>
            <p>Prerequisite to get started react.js</p>
            <ul>
                <TechList />
            </ul>
                <UserCard />
        </div>
    </main>
)

// Footer component

const Footer = () => (
    <footer>
        <div className = 'footer-wrapper'>
        <p>Cppyright 2020</p>
        </div>
    </footer>
    )

// The App
const App = () => (
  <div className ='app'>
    <Header />
    <Main />
    <Button />
    <HexaColor />
    <Footer />
   </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
