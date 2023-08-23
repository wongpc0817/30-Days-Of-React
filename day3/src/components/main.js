import React from "react";
const ReactSkills = (props) => (
    <ul>
      {props.Skills.map((element) => 
        <li key={element}>{element}</li>
      )}
    </ul>
  );
  const Status = (props)=>{
    let status =props.status?'Old enough to drive': "Too young to drive";
    return <p className='status-content'> 
    {status}
    </p>
  }
export const Main = (props)=> (
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
        {props.data.personAge}
        {props.data.user}
        <Status status={props.data.personAge>=18}/>
      </div>
    </main>
  )