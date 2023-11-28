import SectionHead from './SectionHead'
import {projects} from '../data'
import Card from '../UI/Card'
import Popups from '../UI/Popups';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
//import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';
import Modal from 'react-modal';


import '../UI/popups.css'



const PastProjects = () => {
  //const [modalShow, setModalShow] = useState(false);
  const [modalShow, setModalShow] = useState();
  const width_proportion = '50%';
  const height_proportion = '50%';

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.2)'
    },
    content: {
      position: 'fixed',
      width: width_proportion,
      height: height_proportion,
      backgroundColor:'rgba(0,0,0,0)',
      border: 'none'
    }
  };


  return (
    <section className="projects">
      <div className='container programs__container'>
        <SectionHead title = "Projects"/>
        <div className="projects__wrapper">
          {
            projects.map(({id, skill, title, time, info, path}) => {
              const arr = info.split("\n");
              return(
                <Card className = "projects__project" key={id}>
                  <h3>{title}</h3>
                  <h5>{skill}</h5>
                  <p>{time}</p>

                  <Button variant="primary" className = 'btn md' onClick={()=>{setModalShow(id);}}>
                    Learn More
                  </Button>

                  {/* <Popups key = {id} trigger = {modalShow} setTrigger = {setModalShow} title = {title} skill = {skill} time = {time} info = {info} path = {path}>
                  </Popups> */}
                  
                  <Modal isOpen={modalShow === id} onClose={() => setModalShow(undefined)}  style={customStyles} >
                    <div className='popup'>
                      <div className='popup-inner'>
                        <h3><a href={path} rel="noreferrer">{title}</a></h3>
                        <h5>{skill} | {time}</h5>
                        <p> 
                          <ul>
                            {
                              arr.map((arr,index)=>{
                                return <li key={index}>{arr}</li>
                              })
                            }
                          </ul>
                        </p>
                        <h3><button className='btn-md-popup' onClick={() => setModalShow(undefined)}>Back</button></h3>
                      </div>
                    </div>
                  </Modal>

                </Card>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}



export default PastProjects
