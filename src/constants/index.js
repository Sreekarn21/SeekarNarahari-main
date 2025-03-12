import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpeg"; // Fixed extension
import project6 from "../assets/projects/project-6.JPG";  // Fixed extension
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.png"; // Fixed extension

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like HTML and CSS.js, as well as back-end technologies like MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `A dedicated tech enthusiast with a focus on Data Science, Machine Learning, and Robotic Process Automation (RPA), I’m skilled in building intelligent solutions across domains like predictive modeling, survey analysis, and automation. With a foundation in hands-on projects and certifications, including the IBM Machine Learning Specialization, my work spans dynamic roles such as Data Science Intern, RPA Developer, Software Developer, and AI Specialist at Kvanttik Solutions. My portfolio showcases a balance of cutting-edge technologies and real-world impact, from ML-based forecasting systems to autonomous solutions with ESP32 sensors. Driven to innovate, I thrive on creating seamless, scalable systems that enhance user experience and optimize performance.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2024",
    role: "Frontend Developer",
    company: "MarkWiz",
    description: `Designed and developed user interfaces for web applications using HTML and CSS. Worked closely with backend developers to integrate frontend components. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "MySQL"],
  },
  {
    year: "2024 - Present",
    role: "AI Specialist",
    company: "Kvanttik Solutions",
    description: `Working on AI-driven solutions across multiple domains, including deep learning, machine learning, and automation. Developing and optimizing intelligent models for business applications.`,
    technologies: ["AI", "Machine Learning", "Deep Learning", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "EASY TRANSLATE",
    image: project1, // Fixed image reference
    description:
      "Revolutionary translation platform designed to break down language barriers worldwide aims to connect the world through language, making communication across borders effortless and effective.",
    technologies: ["HTML", "CSS", "Python"],
  },
  {
    title: "FRUITSLICECAM",
    image: project2, // Fixed image reference
    description:
      "Interactive game that lets users slice virtual fruits in real time using camera input and OpenCV.",
    technologies: ["OpenCV", "Python", "Firebase"],
  },
  {
    title: "Heart Disease Prediction",
    image: project3,
    description:
      "I developed a heart disease prediction model using Python, scikit-learn, and Flask/Django.",
    technologies: ["HTML", "CSS", "Machine Learning", "Python", "Django"],
  },
  {
    title: "Lung Cancer Detection using Deep Learning",
    image: project4,
    description:
      "A deep learning model designed to detect lung cancer from medical imaging data using CNNs.",
    technologies: ["TensorFlow", "Keras", "Python"],
  },
  {
    title: "AI Voice assistant for Laptops",
    image: project5,
    description:
      "A custom-built AI assistant for laptops capable of handling voice commands and automating tasks.",
    technologies: ["Python", "Speech Recognition", "NLP"],
  },
  {
    title: "Tech Weed Educational Website",
    image: project6,
    description:
      "A Next.js and MongoDB-powered educational platform where students can register, log in, and enroll in courses.",
    technologies: ["Next.js", "MongoDB", "React"],
  },
  {
    title: "Customer Churn Prediction",
    image: project7,
    description:
      "A machine learning model to predict customer churn based on behavioral and transactional data.",
    technologies: ["Python", "scikit-learn", "Pandas"],
  },
  {
    title: "Attendance Using Face Recognition",
    image: project8,
    description:
      "An AI-powered attendance system that uses facial recognition for automated student check-ins.",
    technologies: ["OpenCV", "Python", "Deep Learning"],
  },
  {
    title: "Resume Score Checker",
    image: project9,
    description:
      "A web-based tool that evaluates and scores resumes based on predefined criteria using NLP techniques.",
    technologies: ["Python", "Flask", "NLP"],
  },
];

export const CONTACT = {
  address: "42-271-6/c, Nandhi Hills, Wanaparthy",
  phoneNo: "+91 9059447621",
  email: "naninarahari04@gmail.com",
};
