import Header from '../../components/SkillsHeader'
import HeaderImage from '../../assets/9285000.jpg'
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";




import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image = {HeaderImage}>
    </Header>
    <section className='contact'>
      <div className='container contact__container'>
        <div className='contact__wrapper'>
          <p>Please feel free to contact me if you have any questions :D.</p>
        </div>
      </div>
    </section>
    <section className='contact'>
      <div className='container contact__container'>
        <div className='contact__wrapper'>
          <a href="mailto:yixie015D5D@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="https://wa.me/+12502178490" target="_blank" rel="noreferrer noopener"><RiWhatsappFill /></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
