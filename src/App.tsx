import React, { useState } from 'react';
import { 
  Mail, GraduationCap, Briefcase, Award, Github, Linkedin, Download, 
  Code, Cpu, BarChart, Brain, Database, Camera, Globe, Smartphone, Wifi 
} from 'lucide-react';

import { FaRocket } from 'react-icons/fa'; 

function App() {
  const [activeSection, setActiveSection] = useState('about');




  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  


  const skills = [
    // Languages
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
      description: "JavaScript for Frontend and Backend Programming."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      name: "TypeScript",
      description: "TypeScript for Building Large-Scale JavaScript Applications."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      name: "Python",
      description: "Python for General-Purpose Programming and Automation."
    },
  
    // Frameworks
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React.js",
      description: "React.js for Frontend and User-Interface Development."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      name: "Next.js",
      description: "Next.js for Frontend and Backend Both Development."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
      description: "Node.js for Backend Development."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: "Express.js",
      description: "Express.js for Backend API Development."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg",
      name: "Django",
      description: "Django for Backend Development and API Creation."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      name: "Flask",
      description: "Flask for Lightweight Backend API Development."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      name: "WordPress",
      description: "WordPress for Website Development and Content Management."
    },
  
    // Databases
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
      description: "MongoDB for NoSQL Database Management."
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      name: "PostgreSQL",
      description: "PostgreSQL for Relational Database Management."
    }
  ];
  

  const projects = [
    {
      title: "GrocerU Inventory App",
      description: "Full-stack app to manage grocery items with AI-powered categorization",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Flask", "SQLite", "AI", "HTML", "CSS", "Bootstrap", "Javascript", "Python"],
      link: "https://charles167.github.io/crownnygold/"
    },
    {
      title: "Personal Portfolio Website",
      description: "Enhanced site performance with responsive design and dynamic project data",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000",
      technologies: ["React.js", "Node.js", "TailwindCSS", "APIs", "JavaScript", "TypeScript", "Vite"],
      link: "https://charles167.github.io/crownnygold/"
    },
    {
      title: "Climate Change Awareness Website",
      description: "Increased user engagement by 30% through responsive design and dynamic features",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      technologies: ["HTML", "CSS", "JavaScript"],
     link: "https://charles167.github.io/crownnygold/"
    },
   
      {
        title: "Predicting Spotify Track Popularity Based on Key Audio Features",
        description: "Analyzed Spotify dataset to predict track popularity using machine learning models",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1000",
        technologies: ["Python", "Pandas", "Scikit-learn", "SMOTE", "Matplotlib", "Kaggle Dataset"],
        link: "https://charles167.github.io/real-estate/"
      },
      {
        title: "CareerLaunch: AI-powered Cover Letter Generator",
        description: "Full-stack app that generates professional cover letters using AI",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
        technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Gemini API"],
        link: "https://charles167.github.io/nethinxsolution/Page%20Loading.html"
      },
      {
        title: "MathApp: Enhance Your Math Skills",
        description: "Math skills enhancement app with two game modes and real-time scoring",
        image: "/images/math.png",
        technologies: ["Next.js", "React", "Tailwind CSS", "Jest", "React Testing Library"],
        link: "https://charles167.github.io/data-base/"
      }
    ];
    

  
  const technicalSkills = [
    ["Languages", "C++", "Python", "Java", "SQL", "NoSQL", "Swift", "JavaScript", "TypeScript"],
    ["Frameworks & Libraries", "React.js", "Next.js", "React Native", "Angular", "Vue", "Bootstrap"],
    ["Cloud & Databases", "AWS", "Google Cloud", "PostgreSQL", "MySQL", "PgAgent", "MongoDB"],
    ["Version Control & Tools", "Git", "GitHub", "Bitbucket", "Jira"],
    ["Development Tools", "Visual Studio Code", "Gradle", "Docker", "Postman"],
    ["APIs", "REST APIs", "GraphQL"],
    ["Testing", "Jest", "Mocha", "Chai", "JUnit", "TypeScript Testing", "Cypress"],
    ["CI/CD", "Jenkins", "GitLab CI", "CircleCI", "Travis CI", "GitHub Actions", "Docker CI/CD"],
    ["Mobile Development", "React Native", "Expo", "SwiftUI", "Objective-C", "Xcode", "React Navigation"],
 [ "Problem-solving",
      "Critical Thinking",
      "Integrity",
      "Self-learning",
      "Leadership",
      "Communication"
    ]
  ];
  
  
  const softSkills = [
   
      "  Website Front-end developmeent and Graphics DESIGN  (COVENANT UNIVERSITY)",
      " The Complete 2024 WebDevelopment Bootcamp  (udemy)",
      " Mobile developer (CUSCAF)",
      "Programming Foundations: Version Control with Git (LinkedIn Learning)",
      "Become a Full-Stack Web Developer & SEO (LinkedIn Learning)",
      "Amazon Web Services Training",
      "PostgreSQL Certified Professional",
      "CI/CD Pipelines with Jenkins Certification",
      "Dean's List Certification (Excellence in Academic Performance)"
    
    
  ];
  
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[600px] h-[600px]">
              {/* Rotating Skills Circle */}
              <div className="absolute inset-0 animate-spin-slow">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-8 h-8"
                    style={{
                      transform: `rotate(${i * 30}deg) translateY(-240px)`
                    }}
                  >
                    <div className="w-8 h-8 bg-blue-400/20 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
<div className="relative max-w-7xl mx-auto px-4 py-32 flex flex-col md:flex-row items-center justify-between gap-10">

{/* Left Side: Text Content */}
<div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
  
  <div className="inline-block bg-[#151B2B]/60 backdrop-blur-lg rounded-full px-6 py-3 mb-8 shadow-lg">
  </div>

  <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
    I'm <span className="gradient-text">Charles Ablanya</span>
  </h1>

  <h2 className="text-4xl text-gray-300 mb-8 font-medium">
    Full Stack Developer & Tech Enthusiast
  </h2>

  <p className="max-w-2xl text-gray-400 mb-12 leading-relaxed">
    Welcome to my portfolio, where I share my journey as a developer and the projects I’m passionate about!
  </p>

  <div className="flex gap-6 mb-12 justify-center md:justify-start">
  <a 
    href="/Portfolio/images/CharlesAblanyaResume.pdf" 
    download="My_CV.pdf" 
    className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 transition px-6 py-3 rounded-full text-white font-semibold shadow-md transform hover:scale-105"
  >
    Download CV
  </a>
</div>


  <div className="flex gap-6 justify-center md:justify-start">
    <a href="https://github.com/charles167" className="text-gray-400 hover:text-white transition">
      <Github className="w-8 h-8" />
    </a>
    <a href="https://www.linkedin.com/in/ablanya-charles/" className="text-gray-400 hover:text-white transition">
      <Linkedin className="w-8 h-8" />
    </a>
  </div>
</div>  

{/* Right Side: Profile Image (Fix Position) */}
{/* Right Side: Circular Fancy Profile Image */}
<div className="w-full md:w-1/2 flex justify-center md:justify-end md:items-center">
  <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-blue-500 shadow-lg rounded-full overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:border-purple-400">
    
    {/* Glowing Border Effect */}
    <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse"></div>

    {/* Profile Image */}
    <img 
      src="/images/WhatsApp Image .jpg" 
      alt="Suvesha Upreti" 
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>


</div>

      </div>

      <nav className="fixed top-0 w-full bg-[#151B2B] z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold gradient-text">CHARLES ABLANYA </h1>
            <div className="flex space-x-8">
  {['about', 'skills', 'projects'].map((section) => (
    <button
      key={section}
      onClick={() => {
        setActiveSection(section);
        setTimeout(() => scrollToSection(section), 100); // Delay ensures section is updated
      }}
      className={`text-sm font-medium transition-colors ${
        activeSection === section ? 'text-blue-400' : 'text-gray-400 hover:text-white'
      }`}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </button>
  ))}
</div>



          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-20 space-y-32">
        {/* About Section */}
        {activeSection === 'about' && (
          <section id="about" className="space-y-16 animate-fade-in">
            <div className="text-center space-y-6">
              <h2 className="text-5xl font-bold gradient-text">About Me</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-400 leading-relaxed">
                I am a Full-Stack Software Engineer with 5+ years of experience in building scalable web applications. I specialize in React, Angular, Node.js, NestJS, and databases like PostgreSQL and MongoDB. Skilled in AWS deployment, CI/CD pipelines, and Git, I deliver efficient, maintainable code while mentoring developers and staying updated with industry trends.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="gradient-border-top bg-[#151B2B] rounded-lg p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
  <div>
    <p className="text-blue-400">2022 - 2026 (Expected)</p>
    <h4 className="text-xl font-medium">Bachelor of Science in Computer Science</h4>
    <p className="text-gray-400">Crawford University</p>
    <p className="text-sm text-gray-500">CONAS STUDENTS</p>
  </div>

  {/* Relevant Coursework */}
  {/* Relevant Coursework */}
<div className="mt-6">
  <h4 className="text-xl font-bold text-blue-400 flex items-center gap-2">
    <GraduationCap className="w-6 h-6 text-blue-400" />
    Coursework
  </h4>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-sm text-gray-400">
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Briefcase className="w-4 h-4 text-blue-400" />
      <span>Software Engineering Principles</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Code className="w-4 h-4 text-blue-400" />
      <span>Data Structures & Algorithms</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Cpu className="w-4 h-4 text-blue-400" />
      <span>Computer Architecture</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <BarChart className="w-4 h-4 text-blue-400" />
      <span>Probability & Statistics</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Brain className="w-4 h-4 text-blue-400" />
      <span>Machine Learning</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Database className="w-4 h-4 text-blue-400" />
      <span>Database Management Systems (DBMS)</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Camera className="w-4 h-4 text-blue-400" />
      <span>Computer Vision</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Code className="w-4 h-4 text-blue-400" />
      <span>Object-Oriented Programming (OOP)</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Globe className="w-4 h-4 text-blue-400" />
      <span>Web Development (Frontend & Backend)</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Smartphone className="w-4 h-4 text-blue-400" />
      <span>Mobile App Development (iOS/Android)</span>
    </div>
    <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
      <Wifi className="w-4 h-4 text-blue-400" />
      <span>Computer Networks</span>
    </div>
  </div>
  </div>

  </div>





              </div>

              {/* Experience */}
<div className="gradient-border-top bg-[#151B2B] rounded-lg p-8 space-y-6">
  <div className="flex items-center space-x-3">
    <Briefcase className="w-6 h-6 text-blue-400" />
    <h3 className="text-2xl font-semibold">Experience</h3>
  </div>

  <div className="space-y-8">

    {/* DXC Technology Internship */}
    <div>
  {/* Full-Stack Developer Intern */}
  <div>
    <p className="text-blue-400">June 2023 - August 2023</p>
    <h4 className="text-xl font-medium">Full-Stack Developer Intern</h4>
    <p className="text-gray-400">DXC Technology (New Orleans, LA)</p>

    {/* Key Skills */}
    <div className="flex flex-wrap gap-2 mt-2">
      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">React</span>
      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">Node.js</span>
      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">MongoDB</span>
      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">AWS</span>
      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">Cloud Computing</span>
    </div>

    {/* Responsibilities */}
    <ul className="mt-3 text-sm text-gray-400 space-y-2">
      <li>Built a React-based web application to automate data visualization, improving decision-making efficiency.</li>
      <li>Developed RESTful APIs using Node.js and Express, optimizing performance for scalable backend operations.</li>
      <li>Designed and implemented a MongoDB database schema to handle dynamic data efficiently.</li>
      <li>Deployed the application on AWS EC2 and S3, ensuring reliability and scalability.</li>
      <li>Worked on cloud security best practices and IAM roles to protect sensitive data.</li>
    </ul>
  </div>

  {/* Software Engineering Instructor */}
  <div className="mt-8">
    <p className="text-blue-400">September 2021 - Present</p>
    <h4 className="text-xl font-medium">Software Engineering Instructor</h4>
    <p className="text-gray-400">Texas State University</p>

    {/* Key Skills */}
    <div className="flex flex-wrap gap-2 mt-2">
      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">React</span>
      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">AWS</span>
      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">MongoDB</span>
      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">Problem-Solving</span>
    </div>

    {/* Responsibilities */}
    <ul className="mt-3 text-sm text-gray-400 space-y-2">
      <li>Instructed students on modern React development and backend architecture using Node.js.</li>
      <li>Guided students through setting up cloud infrastructure on AWS, focusing on EC2, S3, and Lambda functions.</li>
      <li>Mentored students in database design using MongoDB, covering aggregation and indexing for performance optimization.</li>
    </ul>
  </div>
</div>


  </div>
</div>

            </div>

            {/* Contact */}
            <div className="gradient-border-top bg-[#151B2B] rounded-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold">Contact</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-400">Personal Email</p>
                  <a href="mailto:charlesablanya@gmail.com" className="text-blue-400 hover:text-blue-300">
                    charlesablanya@gmail.com
                  </a>
                </div>
                <div>
                <p className="text-gray-400">WhatsApp</p>
                <a 
  href="https://wa.me/2348160609012" 
  className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
  target="_blank" 
  rel="noopener noreferrer"
>
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .5a11.5 11.5 0 0 0-9.13 18.68L.54 23.46a.75.75 0 0 0 .94.94l4.28-2.33A11.5 11.5 0 1 0 12 .5Zm0 21a9.47 9.47 0 0 1-5.14-1.5l-.37-.24-3.19 1.72 1.27-3.66-.24-.37A9.48 9.48 0 1 1 12 21Zm5.16-6.8c-.28-.14-1.66-.82-1.91-.91s-.44-.14-.63.14c-.19.28-.73.91-.91 1.1-.17.19-.33.21-.61.07a7.77 7.77 0 0 1-2.22-1.37 8.42 8.42 0 0 1-1.57-1.92c-.16-.28 0-.42.12-.58l.52-.65c.07-.09.14-.19.21-.3s.12-.21.19-.35a.54.54 0 0 0 0-.51c-.07-.14-.63-1.52-.87-2.08s-.46-.49-.63-.5H7.31a1.2 1.2 0 0 0-.86.4c-.28.28-1.07 1.05-1.07 2.55s1.09 2.96 1.24 3.17 2.14 3.42 5.2 4.8c1.93.83 2.69.9 3.66.76a3.36 3.36 0 0 0 2.21-1.54 2.67 2.67 0 0 0 .19-1.54c-.14-.13-.4-.2-.68-.34Z" />
  </svg>
  +234 816 060 9012
</a>


                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section id="skills" className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold gradient-text">Skills & Services</h2>
              <p className="text-gray-400 text-lg">
                These are my working Skills & Services I have done.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="gradient-border-top bg-[#151B2B] rounded-lg p-8 flex flex-col items-center text-center space-y-4"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16"
                  />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="gradient-border-top bg-[#151B2B] rounded-lg p-8 space-y-6">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-400" />
                  Technical Skills
                </h3>
                <div className="space-y-4">
                {technicalSkills.map((skillGroup, index) => (
  <div key={index} className="flex flex-wrap items-center gap-2">
    {/* Category Title */}
    <span className="font-bold text-blue-400">{skillGroup[0]}:</span>
    
    {/* Skills */}
    {skillGroup.slice(1).map((skill, skillIndex) => (
      <span
        key={skillIndex}
        className="px-3 py-1 bg-blue-500/10 text-white-400 rounded-full text-sm"
      >
        {skill}
      </span>
    ))}
  </div>
))}

                </div>
              </div>

              <div className="gradient-border-top bg-[#151B2B] rounded-lg p-8 space-y-6">
  <h3 className="text-2xl font-semibold flex items-center gap-3 text-blue-400">
    <Award className="w-6 h-6 text-blue-400" />
    Certifications
  </h3>
  
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {softSkills.map((cert, index) => (
      <div
        key={index}
        className="bg-blue-500/10 text-white-400 rounded-lg p-4 text-sm font-medium"
      >
        {cert}
      </div>
    ))}
  </div>
</div>

            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section id="projects" className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold">
                <span className="gradient-text">My</span> Projects
              </h2>
              <p className="text-gray-400 text-lg">
              <h3 className="text-2xl font-semibold flex items-center gap-3 text-blue-400">
    <FaRocket className="w-6 h-6 text-blue-400" />
    Here are some of my Projects
  </h3>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  className="project-card block group"
                >
                  <div className="bg-[#151B2B] rounded-lg overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151B2B] to-transparent opacity-60" />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
      <footer className="text-center text-gray-500 py-4">
  © {new Date().getFullYear()} ABLANYA TECH. All rights reserved. 
  <a href="/terms" className="text-blue-400 hover:underline mx-2">Terms</a> | 
  <a href="/privacy" className="text-blue-400 hover:underline mx-2">Privacy</a>
</footer>

    </div>
    
  );
}

export default App;