import { GiAbstract047 } from "react-icons/gi";

const SectionHead = ({title, className}) => {
  return (
    <div className={`section__head ${className}`}>
        <span>{<GiAbstract047 />}</span>
        <h2>{title}</h2>
    </div>
  )
}

export default SectionHead
