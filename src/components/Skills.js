import React from 'react'
import '../style/Projects.css'
import { FaBootstrap,  FaBug,  FaCode,  FaCss3Alt, FaDatabase, FaGit, FaHtml5, FaJs, FaMobileAlt, FaProjectDiagram, FaQuestionCircle, FaReact, FaTerminal } from 'react-icons/fa';
const Skills = () => {
    const skills =['HTML 5', 'CSS 3','JavaScript','React', 'Bootstrap','Projects Managements',
        'Responsive Design', 'Version control', 'Performance Optimization','API Integration',
        'State Management', 'Build Tools', 'Testing'
    ]
    const skillIcons = {
        'HTML 5': <FaHtml5 size={24}/>,
        'CSS 3': <FaCss3Alt size={24}/>,
        'JavaScript': <FaJs size={24}/>,
        'React': <FaReact size={24}/>,
        'Bootstrap': <FaBootstrap size={24}/>,
        'Projects Managements': <FaProjectDiagram size={24}/>,
        'Responsive Design': <FaMobileAlt size={24} />,
        'Version control': <FaGit size={24}/>,
        'Performance Optimization': <FaCode size={24}/>,
        'API Integration': <FaDatabase size={24} />,
        'State Management': <FaProjectDiagram  size={24}/>,
        'Testing':<FaBug size={24}/>,
        'Build Tools':<FaTerminal size={24}/>

      };
  return (
    <div className='skill'>
      {
        skills.length > 0 && (
            <>
            {skills.map((skill,index)=>(
                <div className='skill-card card' key={index}>
                    
                    <span className='skill-name  ' >{skillIcons[skill] || <FaQuestionCircle/>} {skill}</span>
                </div>
                
            ))}
            </>
        )
      }
    </div>
  )
}

export default Skills
