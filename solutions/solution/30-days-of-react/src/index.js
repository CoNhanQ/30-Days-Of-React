import React from 'react'
import ReactDOM from 'react-dom'
import road from './images/road.jpg'

const Header = (props) => {
    console.log(props)
    return (
        <header> 
         <div className='header-wrapper'>
            <h1>{props.welcome}</h1>
    <h2>{props.title}</h2>
    <h3>{props.subtitle}</h3>
    <p>
    <small>{props.date}</small>
    </p>
         </div>

        </header>
    )
}

const App = () => {
      <div className='app'>
            <Header welcome='Welcome to 30 Days of React' />
            <

                
      </div>
    
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)