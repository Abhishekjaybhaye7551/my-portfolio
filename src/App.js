import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />

      {/* Home Section */}
      <motion.section
        id="home"
        className="home-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="particles-container">
          <Particles
            id="tsparticles"
            options={{
              background: { color: { value: "#000" } },
              fpsLimit: 60,
              particles: {
                color: { value: "#00bfff" },
                links: { enable: true, color: "#00bfff", distance: 150 },
                move: { enable: true, speed: 1 },
                number: { value: 50 },
                size: { value: 2 },
              },
              fullScreen: { enable: false }
            }}
          />
        </div>

        <div className="home-content">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="profile-img"
          />
          <h1>Hi, I'm Abhishek Jaybhaye</h1>
          <h3>Aspiring Full-Stack Developer</h3>
          <p>
            I create efficient and elegant web solutions using modern tools like React, Python, and MySQL.
            Passionate about solving problems, learning AI, and contributing to meaningful projects.
          </p>
          <div style={{ marginTop: '30px' }}>
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn" style={{ marginLeft: '12px' }}>Contact Me</a>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Projects</h2>
        <ul>
          <li>🌐 <strong>Personal Portfolio Website</strong> – React-based portfolio with animation, skills, and project showcase.</li>
          <li>🍔 <strong>Food Donation Management System</strong> – DBMS project handling donations, requests, and deliveries.</li>
          <li>📱 <strong>Weather Forecast App</strong> – React app using OpenWeather API for real-time weather updates.</li>
          <li>📊 <strong>E-commerce Admin Dashboard</strong> – MERN stack dashboard with product, order, and user management.</li>
          <li>🧠 <strong>AI-Powered Chatbot</strong> – Simple ML-based chatbot using Python and NLTK for basic query handling.</li>
        </ul>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Me</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem' }}>
          Hello! I’m Abhishek Jaybhaye, a passionate and driven Full-Stack Web Developer with a strong
          interest in emerging technologies. I specialize in creating responsive, intuitive user
          interfaces using React and building robust backends with Node.js and Express. I'm also exploring
          the fascinating world of Machine Learning and love integrating smart features into web applications.
          <br /><br />
          I believe in the power of clean, maintainable code and love turning ideas into interactive digital experiences.
          When I’m not coding, I enjoy analyzing problem-solving patterns, reading about tech innovations,
          and contributing to projects that make a real-world impact.
          <br /><br />
          My current focus is on enhancing my backend architecture skills, learning advanced React ecosystem tools,
          and diving deeper into cloud technologies like Firebase and AWS.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Skills</h2>
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
          {[
            { name: 'HTML/CSS', level: '90%' },
            { name: 'JavaScript', level: '85%' },
            { name: 'React', level: '80%' },
            { name: 'Python', level: '75%' },
            { name: 'MySQL', level: '70%' },
            { name: 'Node.js & Express', level: '70%' },
            { name: 'Git & GitHub', level: '80%' },
          ].map((skill) => (
            <div key={skill.name} style={{ marginBottom: '20px' }}>
              <strong>{skill.name}</strong>
              <div className="skill-bar">
                <motion.div
                  className="skill-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Contact</h2>
        <p>Email: <a href="mailto:abhishekjaybhaye2003@gmail.com">abhishekjaybhaye2003@gmail.com</a></p>
        <p>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/abhishek-jaybhaye-b862922ba"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: '8px' }}
          >
            abhishek-jaybhaye
          </a>
        </p>
      </motion.section>
    </div>
  );
}

export default App;








