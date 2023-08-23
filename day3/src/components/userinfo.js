import React from "react";

const UserInfoSkillItem = (props)=>(
    <div className='user-skill-item'
    id={props.skill.toLowerCase()}>{props.skill}
    </div>
  )
  
  
  
const UserSkills = ({skills})=>(skills.map((element, index)=><UserInfoSkillItem skill={element} key={index}/>))

export const UserInfo = ()=> {
    const user_skills = ['HTML','CSS','Python','Django','Pandas','MySQL','React','Tensorflow','Matplotlib','Numpy','Scipy','Seaborn'];
    return (
    <div className='user-info-wrapper'>

    <div className='user-info-container'>
        <h2 className='user-info-title'>SKILLS</h2>
        <div className='user-skill-container'>
        <UserSkills skills={user_skills}/>
        
        </div>
        
    </div>

    </div>)
}