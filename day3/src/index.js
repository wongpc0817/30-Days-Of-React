// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Po Chai',
  lastName: 'Wong',
}
const date = 'Aug 23, 2023'

// JSX element, header
const Header = ()=> (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 2000
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
  <div>
    <h3>This is supposed to be an image.</h3>
  </div>
)

// JSX element, main
const Main = ()=> (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const Footer = ()=>(
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

const User_info = ()=> (
  <div className='user-info-wrapper'>

  <div className='user-info-container'>
    <h2 className='user-info-title'>SKILLS</h2>
    <div className='user-skill-container'>
      <div className='user-skill-item' id='html'>HTML</div>
      <div className='user-skill-item' id='CSS'>CSS</div>
      <div className='user-skill-item' id='python'>Python</div>
      <div className='user-skill-item' id='django'>Django</div>
      <div className='user-skill-item' id='pandas'>Pandas</div>
      <div className='user-skill-item' id='mysql'>MySQL</div>
      <div className='user-skill-item' id='react'>React</div>
      <div className='user-skill-item' id='tensorflow'>Tensorflow</div>
      <div className='user-skill-item' id='matplotlib'>Matplotlib</div>
      <div className='user-skill-item' id='numpy'>Numpy</div>
    </div>
  </div>

  </div>
)

const Subscribe_form= ()=>(
  <div className='subscribe-container'>
    <div className='subscribe-form'>
      <h2 className='subscribe-title'>SUBSCRIBE</h2>
      <h4 className='subscribe-content'>Sign up with your email address to receive news and updates.</h4>
      <div className='form-content'>
        <input type='text' className='input-firstname' name='firstname' id='firstname' placeholder='First Name'/>
        <input type='text' name='lastname' id='lastname' placeholder='Last Name' className='input-lastname' />
        <input className='input-email' type='text' name='email' id='email' placeholder='Email'
        />
      </div>
      <button className='subscribe-button'
      type='submit'>
        Subscribe
      </button>

    </div>
  </div>
)

const App = ()=>(
  <div className='app'>
    <Header/>
    <Main/>
    <User_info/>
    <Subscribe_form/>
    <Footer/>
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App/>, rootElement)