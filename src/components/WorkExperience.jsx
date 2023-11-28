import SectionHead from './SectionHead'
import { experiences } from '../data'
import Dropdown from '../UI/Dropdown'


import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"


const WorkExperience = () => {
  return (
    <section className='experiences'>
        <div className='container experiences__container'>
            <SectionHead title="Experiences"></SectionHead>
            {/*<div className='experiences__left'>
                <ul className='bar'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <SectionHead title="Experiences"></SectionHead>
            </div>*/}
            <VerticalTimeline lineColor={'var(--color-secondary)'}>
                <div className='experiences__wrapper'>
                    {
                        experiences.map(({id, title, desc}) => {
                            {
                                let arr = desc.split("\n");
                                //console.log(arr);
                                return <VerticalTimelineElement contentStyle = {{background: 'var(--color-grey-200)'}}  iconStyle={{color: 'var(--color-secondary)'}} >
                                    <Dropdown key={id} title={title} desc = {arr}></Dropdown>
                                </VerticalTimelineElement>
                             }
                        })
                    }
                </div>
            </VerticalTimeline>
        </div>
    </section>
  )
}

export default WorkExperience
