import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" style={{ padding: '80px 20px', minHeight: '100vh', textAlign: 'center' }}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Email: abhishekjaybhaye2003@gmail.com
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Phone: +91 7249675668
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        LinkedIn: <a href="https://www.linkedin.com/in/abhishek-jaybhaye-b862922ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Your LinkedIn</a>
      </motion.p>
    </section>
  );
}

export default Contact;

