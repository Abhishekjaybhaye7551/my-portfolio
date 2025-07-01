import './Navbar.css';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <a href="#home" aria-label="Home section">Home</a>
      <a href="#projects" aria-label="Projects section">Projects</a>
      <a href="#about" aria-label="About section">About</a>
      <a href="#contact" aria-label="Contact section">Contact</a>
    </motion.nav>
  );
}

export default Navbar;

