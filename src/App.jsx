import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Simulate visitor counter
    const count = Math.floor(Math.random() * 99999) + 10000
    setVisitorCount(count)
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo">ANDREW.SABUDA</div>
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero grid-bg">
        <div className="hero-profile-image">
          <img
            src="/profile-photo.jpeg"
            alt="Andrew Sabuda"
            className="profile-photo"
          />
        </div>
        <p className="hero-description">
          Software Engineer / Full Stack Developer
          <br />
          <span className="blink">▮</span> Building scalable apps with modern tech
        </p>
        <div className="hero-cta">
          <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            VIEW PROJECTS
          </button>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            GET IN TOUCH
          </button>
        </div>
        {/* <div className="visitor-counter">
          👁️ VISITORS: {visitorCount.toLocaleString()} 👁️
        </div> */}
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-content">
          <h2 className="section-title">[ ABOUT.ME ]</h2>
          <div className="about-grid">
            <div>
              <img
                src="/profile-photo.jpeg"
                alt="Profile"
                className="about-image pixelated"
              />
            </div>
            <div className="about-text">
              <p className="retro-box">
                Hey! I'm Andrew, a software engineer passionate about building full-stack applications
                that solve real problems. I specialize in TypeScript, React, and Node.js, with a focus
                on creating scalable, user-friendly web applications.
                <br /><br />
                Currently working on Intuitive Fat Loss, a health and wellness app that helps people
                achieve their fitness goals without the stress of obsessive tracking. I love combining
                clean code with thoughtful UX design.
                <br /><br />
                <span className="neon-text">Let's build something awesome together!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-content">
          <h2 className="section-title">[ MY.PROJECTS ]</h2>
          <div className="projects-grid">
            <a href="http://intuitivefatloss.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="project-card">
                <h3 className="project-title">INTUITIVE FAT LOSS</h3>
                <p className="project-description">
                  A full-stack web app designed to help users lose fat without obsessive calorie counting.
                  Features daily tracking, fullness monitoring, 30-day calorie averages, and user authentication
                  with email confirmation. Built for sustainable, stress-free weight loss.
                </p>
                <div className="project-tags">
                  <span className="tag">REACT</span>
                  <span className="tag">TYPESCRIPT</span>
                  <span className="tag">NODE.JS</span>
                  <span className="tag">EXPRESS</span>
                  <span className="tag">AWS RDS</span>
                  <span className="tag">JWT AUTH</span>
                  <span className="tag">MATERIAL UI</span>
                </div>
              </div>
            </a>

            <div className="project-card">
              <h3 className="project-title">MORE PROJECTS</h3>
              <p className="project-description">
                Currently focusing on Intuitive Fat Loss, but always exploring new ideas
                and building side projects. Check back soon for more!
              </p>
              <div className="project-tags">
                <span className="tag">COMING SOON</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section grid-bg">
        <div className="section-content">
          <h2 className="section-title">[ SKILL.SET ]</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>FRONTEND</h3>
              <ul className="skill-list">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Material UI</li>
                <li>Tailwind</li>
                <li>Angular/AngularJS</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>BACKEND</h3>
              <ul className="skill-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
                <li>JWT Authentication</li>
                <li>Slack App Integrations</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>CLOUD & DATABASE</h3>
              <ul className="skill-list">
                <li>AWS</li>
                <li>MySQL</li>
                <li>DynamoDB</li>
                <li>MongoDB</li>
                <li>Docker</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>TOOLS & WORKFLOW</h3>
              <ul className="skill-list">
                <li>Git / GitHub</li>
                <li>VS Code</li>
                <li>Claude Code</li>
                <li>Github Copilot</li>
                <li>CrewAI</li>
                <li>Agentic AI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-content">
          <h2 className="section-title">[ CONTACT.ME ]</h2>
          <div className="contact-content">
            <p className="hero-description">
              Want to collaborate? Have a project idea? Looking for a software engineer?
              Let's connect and build something great together!
            </p>
            <div className="contact-links">
              <a href="mailto:andrewsabuda@gmail.com" className="contact-link">
                <span className="contact-icon">📧</span>
                <span>EMAIL</span>
              </a>
              <a href="https://github.com/andrewsabudadev" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">💻</span>
                <span>GITHUB</span>
              </a>
              <a href="https://www.linkedin.com/in/andrewsabuda/" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">💼</span>
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-marquee">
          <div className="marquee-content">
            ★ THANKS FOR VISITING ★ COME BACK SOON ★ THANKS FOR VISITING ★ COME BACK SOON ★ THANKS FOR VISITING ★ COME BACK SOON ★ THANKS FOR VISITING ★ COME BACK SOON ★
          </div>
        </div>
        <p className="footer-text" style={{ marginTop: '20px', fontSize: '1rem' }}>
          © 2026 Andrew Sabuda. Best viewed in 1024x768.
        </p>
      </footer>
    </div>
  )
}

export default App
