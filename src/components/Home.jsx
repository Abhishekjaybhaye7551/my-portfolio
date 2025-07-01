import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "../index.css";
import profile from "../assets/profile.jpg";
import bg from "../assets/bg.jpg"; // NEW: Background image

function Home() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        textAlign: "center"
      }}
    >
      <motion.div
        className="home-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <motion.img
          src={profile}
          alt="Profile"
          className="profile-img"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hi, I'm Abhishek Jaybhaye
        </motion.h2>

        {/* Typewriter Role Animation */}
        <motion.h4
          className="highlight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Typewriter
            words={["Aspiring Full-Stack Developer", "Problem Solver", "AI Enthusiast"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </motion.h4>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          I create efficient and elegant web solutions using modern tools like React, Python, and MySQL.
          Passionate about solving problems, learning AI, and contributing to meaningful projects.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="button-group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn">Contact Me</a>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          className="scroll-down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;








