import React from 'react'
import '../style/Projects.css'
import { FaBootstrap,  FaBug,  FaCode,  FaCss3Alt, FaDatabase, FaGit, FaHtml5, FaJs, FaMobileAlt, FaProjectDiagram, FaQuestionCircle, FaReact, FaTerminal } from 'react-icons/fa';
const Skills = () => {
    const skills =['HTML 5', 'CSS 3','JavaScript','React', 'Bootstrap','Projects Managements',
        'Responsive Design', 'Version control', 'Performance Optimization','API Integration',
        'State Management', 'Build Tools', 'Testing'
    ]
    const skillIcons = {
        'HTML 5': <FaHtml5 size={24} color="#E44D26"/>,
        'CSS 3': <FaCss3Alt size={24} color="#1572B6" />,
        'JavaScript': <FaJs size={24} color="#F7E018" />,
        'React': <FaReact size={24} color='#61dafb'/>,
        'Bootstrap': <FaBootstrap size={24} color="#563D7C"/>,
        'Projects Managements': <FaProjectDiagram size={24} color="#6C757D"/>,
        'Responsive Design': <FaMobileAlt size={24} color="#000000"/>,
        'Version control': <FaGit size={24} color="#F1502F" />,
        'Performance Optimization': <FaCode size={24} color="#4A90E2"/>,
        'API Integration': <FaDatabase size={24}  color="#003A70"/>,
        'State Management': <FaProjectDiagram  size={24} color="#007BFF"/>,
        'Testing':<FaBug size={24} color="#D73A4A" />,
        'Build Tools':<FaTerminal size={24} color="#00A82D"/>

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
