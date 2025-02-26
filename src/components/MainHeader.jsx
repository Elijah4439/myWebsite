import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/7392521.jpg'

const MainHeader = () => {
  return (
    <header className = "main__header">
        <div className='container main__header-container'>
            <div className='main__header-left'>
                <h4>Hello. You've entered the home of</h4>
                <h1>01D5D(s)</h1>
                <p>
                    &nbsp;&nbsp;My name is Yi Xie, I'm passionate about game and web development. Dear recruiters, please checkout my Skills and Experiences pages.
                </p>
                <p>
                    &nbsp;&nbsp;I'm currently working on a 2D pixel game project, demo avaliable on the demo page!
                </p>
                <p>
                    &nbsp;&nbsp;If you are here to checkout options for your new personal website or your new handmade fashion options by LuluFleur, Rigil or LazyBear, please feel free to contact me.
                </p>
                <h5>
                    Oh I also take wild rift ranking comissions just so you know...
                </h5>
                {/*<Link to="/plans" className='btn lg'>Get Started</Link>*/}
            </div>
            <div className='main__header-right'>
                <div className="main__header-circle"></div>
                {/*<div className="main__header-image">
                    <img src={Image} alt = "Main Header Image" />
                </div>*/}
            </div>
        </div>
    </header>
  )
}

export default MainHeader
