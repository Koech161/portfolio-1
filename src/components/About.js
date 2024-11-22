
import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        padding: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          fontSize: '2.5rem',
          color: '#333',
          textAlign: 'center',
          marginBottom: 3,
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 600,
          fontSize: '1.8rem',
          color: '#555',
          textAlign: 'center',
          marginBottom: 4,
        }}
      >
        Crafting Digital Experiences: My Story
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              padding: 4,
              backgroundColor: '#ffffff',
              boxShadow: '0 6px 10px rgba(0,0,0,0.1)',
              borderRadius: 2,
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 15px rgba(0,0,0,0.15)',
              },
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#333',
                  marginBottom: 2,
                }}
              >
                I am a <strong>Full Stack Developer</strong> with a passion for creating seamless digital experiences. With proficiency in{' '}
                <strong>JavaScript</strong> and <strong>Python</strong>, I leverage my skills to build dynamic web applications that are both functional and user-friendly. My expertise spans various frameworks, including{' '}
                <strong>React</strong> for front-end development and <strong>Flask</strong> for back-end solutions.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#333',
                  marginBottom: 2,
                }}
              >
                I am well-versed in essential web technologies such as <strong>HTML5</strong>, <strong>CSS</strong>, and{' '}
                <strong>Bootstrap</strong>, enabling me to create responsive and visually appealing designs. I am committed to delivering high-quality web solutions that not only meet user needs but also exceed expectations. My skills in{' '}
                <strong>SQL</strong>, <strong>PostgreSQL</strong>, and tools like <strong>Git</strong>, <strong>npm</strong>, and <strong>Postman</strong> allow me to efficiently manage databases and collaborate effectively with teams.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#333',
                  marginBottom: 2,
                }}
              >
                With strong soft skills in <strong>teamwork</strong>, <strong>communication</strong>, and <strong>problem-solving</strong>, I thrive in collaborative environments. I am always eager to embrace new challenges and stay updated with industry trends to continuously improve my craft.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
