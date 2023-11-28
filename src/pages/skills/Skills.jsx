import SkillsHeader from '../../components/SkillsHeader'
import HeaderImage from '../../assets/4002676.jpg'
import PastProjects from '../../components/PastProjects'
import SkillsFilter from '../../components/SkillsFilter'
import WorkExperience from '../../components/WorkExperience'


const Skills = () => {
  return (
    <>
    <SkillsHeader title="PORTFOLIO" image={HeaderImage}>
      <p>With a Bachlor's Degree in Computer Science and Mathematics and experiences with multiple companies, I've gained many professional skills as developer and analyst.</p>
    </SkillsHeader>
    <SkillsFilter/>
    <PastProjects/>
    <WorkExperience/>
    </>
  )
}

export default Skills
