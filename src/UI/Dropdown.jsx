import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from 'react';

const Dropdown = ({id, title, desc}) => {
    const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
//    <article className='dropdown' onClick={() => setIsAnswerShowing(prev => !prev)}>
  <article className='dropdown'>
    <div>
        <h4>{title}</h4>
        <button className="dropdown__icon">
            {
                isAnswerShowing ? <FaMinus onClick={() => setIsAnswerShowing(prev => !prev)}/> : <FaPlus  onClick={() => setIsAnswerShowing(prev => !prev)}/>
            }
        </button>
    </div>
    {isAnswerShowing && <p>
        <ul>
            {desc.map((desc,index)=>{
                return <li key={index}>{desc}</li>
            })}
        </ul>
    </p>}
   </article>
  )
}

export default Dropdown
