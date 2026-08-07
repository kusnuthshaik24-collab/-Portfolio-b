const express = require('express');
const router = express.Router();
const Project = require('./Project');

// GET all projects from MongoDB
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST route to seed initial projects into MongoDB if database is empty
router.post('/seed', async (req, res) => {
  try {
    await Project.deleteMany({}); // Clears old entries if needed
    const initialProjects = [
      {
        title: "AI Campus Help Desk",
        category: "AI / Web Scraping",
        description: "Built a retrieval-augmented system that scrapes campus web pages to provide real-time, context-aware answers to student and faculty queries.",
        techStack: ["RAG & Web Scraping", "Python", "Google Colab", "RAG", "Web Scraping"],
        githubUrl: "",
        frontendUrl: "",
        backendUrl: "",
        liveUrl: ""
      },
      {
        title: "Predictive Analytics Engine",
        category: "Machine Learning",
        description: "Engineered a predictive model trained on historical data patterns to forecast future trends with high accuracy.",
        techStack: ["Machine Learning", "Python", "ML Models", "Scikit-Learn"],
        githubUrl: "",
        frontendUrl: "",
        backendUrl: "",
        liveUrl: ""
      },
      {
        title: "AI Chatbot Application",
        category: "Generative AI",
        description: "Developed an intelligent chatbot leveraging Natural Language Processing and Google Gemini API for smooth, contextual user interactions.",
        techStack: ["GenAI & NLP", "Python", "Gemini API", "NLP"],
        githubUrl: "",
        frontendUrl: "",
        backendUrl: "",
        liveUrl: ""
      },
      {
        title: "BMI Calculator",
        category: "Full-Stack (MERN)",
        description: "Designed and deployed a full-stack health application featuring a React frontend and Node.js backend for real-time body mass index analytics.",
        techStack: ["Full-Stack Web Dev", "MongoDB", "Express.js", "React.js", "Node.js"],
        githubUrl: "",
        frontendUrl: "",
        backendUrl: "",
        liveUrl: ""
      },
      {
        title: "Movie Recommendation System",
        category: "Data Science",
        description: "Implemented an end-to-end recommendation engine utilizing dataset preprocessing, data visualization, and ML model matching.",
        techStack: ["Data Science & ML", "Python", "Data Preprocessing", "Data Viz", "ML"],
        githubUrl: "",
        frontendUrl: "",
        backendUrl: "",
        liveUrl: ""
      },
      {
        title: "Smart Resource Allocation Platform",
        category: "Web Application",
        description: "Co-developed a collaborative web platform designed to seamlessly connect local community initiatives with active volunteers.",
        techStack: ["Collaborative Web Prototype", "HTML5", "CSS3", "JavaScript"],
        githubUrl: "",
        frontendUrl: "",
        backendUrl: "",
        liveUrl: ""
      }
    ];

    const createdProjects = await Project.insertMany(initialProjects);
    res.status(201).json({ message: "Database seeded successfully!", createdProjects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;