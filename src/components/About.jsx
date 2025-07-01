import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      style={{ padding: '80px 20px', minHeight: '100vh', textAlign: 'center' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{ maxWidth: '700px', margin: '20px auto', lineHeight: '1.8', fontSize: '1.1rem' }}
      >
        Hello! I’m Abhishek Jaybhaye, a passionate and driven Full-Stack Web Developer with a strong
        interest in emerging technologies. I specialize in creating responsive, intuitive user
        interfaces using React and building robust backends with Node.js and Express. I'm also exploring
        the fascinating world of Machine Learning and love integrating smart features into web applications.
        <br /><br />
        Beyond coding, I enjoy solving logical problems, optimizing performance, and collaborating with teams
        to bring creative ideas to life. I believe in continuous learning and strive to write clean,
        scalable, and efficient code. Whether it’s front-end flair or back-end logic, I aim to deliver meaningful
        user experiences that make a difference.
      </motion.p>
    </section>
  );
}

export default About;



