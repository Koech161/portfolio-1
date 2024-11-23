import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h1 className="text-center fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#333' }}>
          About Me
        </h1>
        <h2 className="text-center fw-semibold mb-4" style={{ fontSize: '1.8rem', color: '#555' }}>
          Crafting Digital Experiences: My Story
        </h2>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card shadow-sm border-0 rounded-3 mb-4">
              <div className="card-body p-4" style={{backgroundColor:'#fff'}}>
                <p className="card-text" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
                  I am a <strong>Full Stack Developer</strong> with a passion for creating seamless digital experiences. 
                  With proficiency in <strong>JavaScript</strong> and <strong>Python</strong>, I leverage my skills to build dynamic web applications that are both functional and user-friendly. My expertise spans various frameworks, including 
                  <strong>React</strong> for front-end development and <strong>Flask</strong> for back-end solutions.
                </p>
                <p className="card-text" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
                  I am well-versed in essential web technologies such as <strong>HTML5</strong>, <strong>CSS</strong>, and 
                  <strong>Bootstrap</strong>, enabling me to create responsive and visually appealing designs. I am committed to delivering high-quality web solutions that not only meet user needs but also exceed expectations. My skills in 
                  <strong>SQL</strong>, <strong>PostgreSQL</strong>, and tools like <strong>Git</strong>, <strong>npm</strong>, and <strong>Postman</strong> allow me to efficiently manage databases and collaborate effectively with teams.
                </p>
                <p className="card-text" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
                  With strong soft skills in <strong>teamwork</strong>, <strong>communication</strong>, and <strong>problem-solving</strong>, I thrive in collaborative environments. I am always eager to embrace new challenges and stay updated with industry trends to continuously improve my craft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

