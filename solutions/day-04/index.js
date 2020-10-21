import React from 'react'
import ReactDOM from 'react-dom'
import road from './images/road.jpg'


const Header = () => (
    <header>
        <div className='jeader-wrapper'>
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
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
    <Footer />
   </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
