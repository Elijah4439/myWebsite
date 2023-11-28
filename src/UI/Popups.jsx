import React from 'react'
import '../UI/popups.css'


// const Popups = ({id, trigger, setTrigger, title, skill, time, info, path}) => {
// //   {console.log(typeof({id}));}
//    return (trigger)?(
const Popups = (display) => {
  return (display)?(
    <div className='popup'>
      <div className='popup-inner'>
        {/* <h3><a href={path} rel="noreferrer">{title}</a></h3>
        <h5>{skill} | {time}</h5>
        <p>{info}</p>  */}
        {/* <button className='btn-md-popup' onClick={() => setTrigger(false)}>Back</button> */}
      </div>
    </div>
  ) : "";
}

export default Popups
