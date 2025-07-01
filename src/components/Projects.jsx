import { motion } from "framer-motion";

function Projects() {
  const projectList = [
    "Food Donation Management System",
    "Personal Portfolio Website (this one!)",
    "E-commerce Admin Dashboard",
    "Weather App using API",
    "Real-Time Chat Application using Socket.io",
    "Student Result Management System in C++",
    "Machine Learning Disease Prediction Model",
    "Todo App with React and LocalStorage",
    "Blog Website with Markdown Support",
    "Authentication System with JWT and MongoDB",
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "80px 20px",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "10px" }}
      >
        My Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ marginBottom: "30px" }}
      >
        Here are some of the projects I’ve worked on:
      </motion.p>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        style={{ listStyle: "none", padding: 0 }}
      >
        {projectList.map((project, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            style={{
              fontSize: "18px",
              marginBottom: "12px",
              fontWeight: "500",
              color: "#333",
            }}
          >
            • {project}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default Projects;


