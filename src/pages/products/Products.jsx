import SkillsHeader from '../../components/SkillsHeader'
import HeaderImage from '../../assets/spice-up-autumn-table-decor-with-oranges-generated-by-ai.jpg'
import ServiceCards from '../../components/ServiceCards'

import './products.css'

const Products = () => {
  return (
    <>
    <SkillsHeader title="Services" image={HeaderImage}>
      <p>01D5D provides services from building your protfolio website to making your dream game live. Please checkout the sections down below for more information.</p>
    </SkillsHeader>
    <ServiceCards/>
    </>
  )
}

export default Products
