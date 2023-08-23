import React from "react";

export const SubscribeForm= ()=>(
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