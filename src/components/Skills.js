import React from 'react';
import { 
    FaBootstrap, FaBug, FaCode, FaCss3Alt, FaDatabase, 
    FaFlask, 
    FaGit, FaHtml5, FaJs, FaLinux, FaMobileAlt, 
    FaProjectDiagram, FaPython, FaQuestionCircle, FaReact, FaTerminal 
} from 'react-icons/fa';

const Skills = () => {
    const skills = [
        'HTML 5', 'CSS 3', 'JavaScript', 'React', 
        'Bootstrap', 'Project Management', 'Responsive Web Design', 
        'Version Control', 'Performance Optimization', 
        'API Integration', 'State Management', 'Testing', 
        'Build Tools', 'Linux OS', 'Python', 'Flask', 'SQL', 'SQLAlchemy'
    ];

    const skillIcons = {
        'HTML 5': <FaHtml5 size={24} color="#E44D26"/>,
        'CSS 3': <FaCss3Alt size={24} color="#1572B6"/>,
        'JavaScript': <FaJs size={24} color="#F7E018"/>,
        'React': <FaReact size={24} color='#61dafb'/>,
        'Bootstrap': <FaBootstrap size={24} color="#563D7C"/>,
        'Project Management': <FaProjectDiagram size={24} color="#6C757D"/>,
        'Responsive Web Design': <FaMobileAlt size={24} color="#000000"/>,
        'Version Control': <FaGit size={24} color="#F1502F"/>,
        'Performance Optimization': <FaCode size={24} color="#4A90E2"/>,
        'API Integration': <FaDatabase size={24} color="#003A70"/>,
        'State Management': <FaProjectDiagram size={24} color="#007BFF"/>,
        'Testing': <FaBug size={24} color="#D73A4A"/>,
        'Build Tools': <FaTerminal size={24} color="#00A82D"/>,
        'Linux OS': <FaLinux size={24} color='#000000'/>,
        'Python': <FaPython size={24} color="#3572A5"/>, 
        'Flask': <FaPython size={24} color="#4B0082"/>, 
        'SQL': <FaDatabase size={24} color="#003A70"/>, 
        'SQLAlchemy': <FaDatabase size={24} color="#B5B5B5"/> 
    };

    return (
        <div className='container my-5'>
            <h2 className='text-center mb-4'>My Skills</h2>
            <div className='row'>
                {skills.map((skill, index) => (
                    <div className='col-md-3 col-sm-6 justify-content-center d-flex mb-4' key={index}>
                        <div className='card text-center'>
                            <div className='card-body'>
                                <div className='mb-3'>
                                    {skillIcons[skill] || <FaQuestionCircle size={24} />}
                                </div>
                                <h5 className='card-title'>{skill}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
