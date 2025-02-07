import { Typography } from '@mui/material';
import React from 'react';
import { 
    FaBootstrap, FaBug, FaCode, FaCss3Alt, FaDatabase, 
    FaGit, FaHtml5, FaJs, FaLinux, FaMobileAlt, 
    FaProjectDiagram, FaPython, FaReact, FaTerminal 
} from 'react-icons/fa';

const Skills = () => {
    const skills = {
        backend: [
            'Python', 'Flask', 'SQL', 'SQLAlchemy', 'PostgreSQL', 'Restful Api', 'Performance Optimization', 'Build Tools', 'Linux OS'
        ],
        frontend: [
            'JavaScript', 'React', 'HTML 5', 'CSS 3', 'Bootstrap', 'Responsive Web Design', 'State Management'
        ],
        database: [
            'PostgreSQL', 'SQL', 'SQLAlchemy'
        ]
    };

    const skillIcons = {
        'Python': <FaPython size={30} color="#3572A5"/>, 
        'Flask': <FaPython size={30} color="#4B0082"/>, 
        'SQL': <FaDatabase size={30} color="#003A70"/>, 
        'SQLAlchemy': <FaDatabase size={30} color="#B5B5B5"/>,
        'HTML 5': <FaHtml5 size={30} color="#E44D26"/>,
        'CSS 3': <FaCss3Alt size={30} color="#1572B6"/>,
        'JavaScript': <FaJs size={30} color="#F7E018"/>,
        'React': <FaReact size={30} color='#61dafb'/>,
        'Bootstrap': <FaBootstrap size={30} color="#563D7C"/>,
        'Project Management': <FaProjectDiagram size={30} color="#6C757D"/>,
        'Responsive Web Design': <FaMobileAlt size={30} color="#000000"/>,
        'Version Control': <FaGit size={30} color="#F1502F"/>,
        'Performance Optimization': <FaCode size={30} color="#4A90E2"/>,
        'Restful Api': <FaDatabase size={30} color="#003A70"/>,
        'State Management': <FaProjectDiagram size={30} color="#007BFF"/>,
        'Testing': <FaBug size={30} color="#D73A4A"/>,
        'Build Tools': <FaTerminal size={30} color="#00A82D"/>,
        'Linux OS': <FaLinux size={30} color='#000000'/>,
        'PostgreSQL': <FaDatabase size={30} color='#4B0082' />
    };

    return (
        <section className="py-5" id="skills">
            <div className="container">
                {/* Backend Skills Section */}
                <div className="mb-5">
                    {/* <h1 className="text-center mb-3">Backend Skills</h2> */}
                    
                    <div className="progress mb-4" style={{ height: '10px' }}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '96%' }} aria-valuenow="96" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
                        {skills.backend.map((skill, index) => (
                            <div className="col" key={index}>
                                <div className="card text-center shadow-sm">
                                    <div className="card-body">
                                        <div className="mb-3">
                                            {skillIcons[skill]}
                                        </div>
                                        <h5 className="card-title">{skill}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Frontend Skills Section */}
                <div className="mb-5">
                    <h2 className="text-center mb-3">Frontend Skills</h2>
                    <div className="progress mb-4" style={{ height: '10px' }}>
                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '88%' }} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
                        {skills.frontend.map((skill, index) => (
                            <div className="col" key={index}>
                                <div className="card text-center shadow-sm">
                                    <div className="card-body">
                                        <div className="mb-3">
                                            {skillIcons[skill]}
                                        </div>
                                        <h5 className="card-title">{skill}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Database Skills Section */}
                <div className="mb-5">
                    <h2 className="text-center mb-3">Database Skills</h2>
                    <div className="progress mb-4" style={{ height: '10px' }}>
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
                        {skills.database.map((skill, index) => (
                            <div className="col" key={index}>
                                <div className="card text-center shadow-sm">
                                    <div className="card-body">
                                        <div className="mb-3">
                                            {skillIcons[skill]}
                                        </div>
                                        <h5 className="card-title">{skill}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
