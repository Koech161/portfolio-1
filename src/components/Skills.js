import React from 'react'
import '../style/Projects.css'
import { FaBootstrap, FaCode, FaCss3Alt, FaDatabase, FaGit, FaHtml5, FaJs, FaMobileAlt, FaProjectDiagram, FaReact } from 'react-icons/fa';
const Skills = () => {
    const skills =['HTML 5', 'CSS 3','JavaScript','React', 'Bootstrap','Projects Managements',
        'Responsive Design', 'Version control', 'Performance Optimization','API Intergration',
        'State Management', 'Build Tools', 'Testing'
    ]
    const skillIcons = {
        'HTML 5': <FaHtml5/>,
        'CSS 3': <FaCss3Alt/>,
        'JavaScript': <FaJs/>,
        'React': <FaReact/>,
        'Bootstrap': <FaBootstrap/>,
        'Projects Managements': <FaProjectDiagram/>,
        'Responsive Design': <FaMobileAlt />,
        'Version control': <FaGit/>,
        'Performance Optimization': <FaCode/>,
        'API Intergration': <FaDatabase />,
        'State Management': <FaProjectDiagram />,
        'Testing':<FaDatabase />,
        'Build Tools':<FaCode/>

      };
  return (
    <div className='skill'>
      {
        skills.length > 0 && (
            <>
            {skills.map((skill,index)=>(
                <div className='skill-card card' key={index}>
                    
                    <span className='skill-name  ' >{skillIcons[skill]} {skill}</span>
                </div>
                
            ))}
            </>
        )
      }
    </div>
  )
}

export default Skills
