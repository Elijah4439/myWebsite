import React from 'react'

import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import image_web from "../assets/23826.jpg"
import image_craft from '../assets/textured-background-zoom-calls.jpg'
import { HiOutlineMail } from "react-icons/hi";
import { FaExternalLinkAlt } from "react-icons/fa";

const ServiceCards = () => {
    const customStyle = {
        background: 'var(--color-primary)',
    }



  return (
    <section className='serviceCards'>
        <div className="container serviceCards__container">
            <VerticalTimeline lineColor={'var(--color-secondary)'} layout={'1-column-right'}>
                <div className="serviceCards__wrapper">
                    <VerticalTimelineElement contentStyle = {customStyle}>
                        <div className="serviceCards__serviceCard">
                            <h2>Web Design</h2>
                            <img src={image_web} className='serviceCards__img'></img>
                            <p>Contact 01D5D for your next responsive website! From simple  <a style = {{color: 'var(--color-secondary)'}}>portfolio</a> website to complex <a style = {{color: 'var(--color-secondary)'}}>E-Commerce</a> website, we are here to make your vision come true.</p> 
                            <p>Starting from the competitive rating of <a style = {{color: 'var(--color-secondary)'}}>80 CAD per page</a>, 01D5D provides a wide range of designs. Send an email to discuss more and get an estimate for your website!</p>
                            <div className='serviceCards__socials__container'>
                                <div className="serviceCards__socials">
                                    <a href="mailto:yixie015D5D@gmail.com" target="_blank" rel="noreferrer noopener"><HiOutlineMail /></a>
                                </div>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement contentStyle = {customStyle}>
                        <div className="serviceCards__serviceCard">
                            <h2>LazyBear Handwoven</h2>
                            <img src={image_craft} className='serviceCards__img'></img>
                            <p>Get your next customized hand-made designer basket from LazyBear!</p> 
                            <p>LazyBear is owned by a group of craftswomen based in ChangJiang, HaiNan. Promised to use <a style = {{color: 'var(--color-secondary)'}}>only natural materials</a>, get your next favourite bag and home accessory here!</p>
                            <p>(Currently we are only take customized commission order, please contact use to get more info!)</p>
                            <div className='serviceCards__socials__container'>
                                <div className="serviceCards__socials">
                                    <a href="mailto:yixie015D5D@gmail.com" target="_blank" rel="noreferrer noopener"><HiOutlineMail /></a>
                                    {/* <a href="mailto:yixie015D5D@gmail.com" target="_blank" rel="noreferrer noopener"><FaExternalLinkAlt /></a> */}
                                </div>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                </div>
            </VerticalTimeline>
        </div>
    </section>
  )
}

export default ServiceCards
