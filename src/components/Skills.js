import React from 'react';
import { 
    FaBootstrap, FaBug, FaCode, FaCss3Alt, FaDatabase, 
    FaGit, FaHtml5, FaJs, FaLinux, FaMobileAlt, 
    FaProjectDiagram, FaPython, FaReact, FaTerminal 
} from 'react-icons/fa';

import { Grid, Card, CardContent, Box, LinearProgress } from '@mui/material';
import Typography from '@mui/material/Typography';

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
        <Box sx={{ my: 5 }}>
           

            {/* Backend Skills Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Backend Skills
                </Typography>
                <LinearProgress variant="determinate" value={96} sx={{ mb: 3 }} color="secondary" />
                <Grid container spacing={4} justifyContent="center">
                    {skills.backend.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card 
                                sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center', 
                                    padding: 2, 
                                    '&:hover': { transform: 'scale(1.05)', boxShadow: 4 } 
                                }}
                            >
                                <CardContent>
                                    <Box mb={2}>
                                        {skillIcons[skill]}
                                    </Box>
                                    <Typography variant="h6">{skill}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Frontend Skills Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Frontend Skills
                </Typography>
                <LinearProgress variant="determinate" value={88} sx={{ mb: 3 }} color="primary" />
                <Grid container spacing={4} justifyContent="center">
                    {skills.frontend.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card 
                                sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center', 
                                    padding: 2, 
                                    '&:hover': { transform: 'scale(1.05)', boxShadow: 4 } 
                                }}
                            >
                                <CardContent>
                                    <Box mb={2}>
                                        {skillIcons[skill]}
                                    </Box>
                                    <Typography variant="h6">{skill}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Database Skills Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Database Skills
                </Typography>
                <LinearProgress variant="determinate" value={90} sx={{ mb: 3 }} color="success" />
                <Grid container spacing={4} justifyContent="center">
                    {skills.database.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card 
                                sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center', 
                                    padding: 2, 
                                    '&:hover': { transform: 'scale(1.05)', boxShadow: 4 } 
                                }}
                            >
                                <CardContent>
                                    <Box mb={2}>
                                        {skillIcons[skill]}
                                    </Box>
                                    <Typography variant="h6">{skill}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Skills;

                   