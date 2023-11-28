import {Link} from 'react-router-dom'
import Logo from '../assets/images/icon1.png'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className='container footer__container'>
        <article>
          <Link to="/" className='logo'>
            <img src={Logo} alt="Footer Logo"></img>
          </Link>
          <div className="footer__socials">
            <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'>
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="https://github.com/Elijah4439?tab=repositories" target="_blank" rel='noreferrer noopener'>
              <FaGithub></FaGithub>
            </a>
          </div>
        </article>
        <article>
          <h4>Explore</h4>
          <Link to="/skills">Skills</Link>
          <Link to='/products'>Products</Link>
          {/* <Link to='/lazybear'>Lazybear Handwoven</Link> */}
          <Link to="/contact">Contact</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small><a>2023 01D5D</a> &copy; All Rights Reserved</small>
        <small> | </small>
        <small>
          Image by <a href="https://www.freepik.com/free-vector/pixel-art-rural-landscape-background_49685499.htm#position=2">pikisuperstar </a>
          <a href="https://www.freepik.com/free-vector/tropical-leaves-background-zoom_8851807.htm#position=4">Freepik </a>
          <a href="https://www.freepik.com/free-vector/abstract-mosaic-style-business-blue-background_6975295.htm#position=1">starline </a>
          <a href="https://www.freepik.com/free-photo/spice-up-autumn-table-decor-with-oranges-generated-by-ai_40969316.htm#page=2&query=orange%20leaves%20free&position=17&from_view=search&track=ais&uuid=847a1e62-5e13-4a38-ac72-0faa973ed8ed">vecstock </a>
          on Freepik
        </small>
      </div>
    </footer>
  )
}

export default Footer
