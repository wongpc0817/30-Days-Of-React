// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
const ShowDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}


// JSX element, header
const Header = (props) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
          {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>{ShowDate(props.data.date)}</small>
      </div>
    </header>
  )
}

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)


// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']


const user = (
  <div>
    <h3>This is supposed to be an image.</h3>
  </div>
)
const ReactSkills = (props) => (
  <ul>
    {props.Skills.map((element) => 
      <li key={element}>{element}</li>
    )}
  </ul>
);
// JSX element, main
const Main = (props)=> (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ReactSkills Skills={props.data.techs}/>
      {props.data.result}
      {props.data.personAge}
      {props.data.user}
      <Status status={props.data.personAge>=18}/>
    </div>
  </main>
)

const personAge = new Date().getFullYear()-2000

const copyRight = 'Copyright 2020'

// JSX element, footer
const Footer = ()=>(
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)
const UserInfoSkillItem = (props)=>(
  <div className='user-skill-item'
  id={props.skill.toLowerCase()}>{props.skill}
  </div>
)

const Status = (props)=>{
  let status =props.status?'Old enough to drive': "Too young to drive";
  return <p className='status-content'> 
  {status}
  </p>
}


const UserInfo = ()=> (
  <div className='user-info-wrapper'>

  <div className='user-info-container'>
    <h2 className='user-info-title'>SKILLS</h2>
    <div className='user-skill-container'>
      <UserInfoSkillItem skill='HTML'/>
      <UserInfoSkillItem skill='CSS'/>
      <UserInfoSkillItem skill='Python'/>
      <UserInfoSkillItem skill='Django'/>
      <UserInfoSkillItem skill='Pandas'/>
      <UserInfoSkillItem skill='MySQL'/>
      <UserInfoSkillItem skill='React'/>
      <UserInfoSkillItem skill='Tensorflow'/>
      <UserInfoSkillItem skill='Matplotlib'/>
      <UserInfoSkillItem skill='Numpy'/>
      <UserInfoSkillItem skill='Scipy'/>
      <UserInfoSkillItem skill='Seaborn'/>
      
    </div>
    
  </div>

  </div>
)
const Button = (props)=><button onClick={props.onClick}>{props.text}</button>
const SubscribeForm= ()=>(
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
    <Header data={
      {welcome:'Welcome to 30 Days of React',
      title:'Gettting Started React',
      subtitle:'JavaScript Library',
      author:{
        firstName:'Po Chai',
        lastName:'Wong',
      },
      date: new Date(),}
    }/>
    <Main data={
      {
        techs:techs,
        results:result,
        user:user,
        personAge:personAge,
      }
    }/>
    <UserInfo/>
    <SubscribeForm/>
    <Footer/>
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App/>, rootElement)