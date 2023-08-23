// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import {tenHighestPopulation} from './ten_most_highest_populations';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';
import { UserInfo } from './components/userinfo';
import {NumberGenerator} from './components/number_generator';
import { SubscribeForm } from './components/subscribe';
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
        techs:['HTML', 'CSS', 'JavaScript'],
        user:(
          <div>
            <h3>This is supposed to be an image.</h3>
          </div>
        ),
        personAge:new Date().getFullYear()-2000,
      }
    }/>
    <UserInfo/>
    <NumberGenerator/>
    <SubscribeForm/>
    <Footer/>
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App/>, rootElement)