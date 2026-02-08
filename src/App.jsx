import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })
  const [showServices, setShowServices] = useState(() => {
    return window.location.pathname === '/services'
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [darkMode])

  useEffect(() => {
    const handlePopState = () => {
      setShowServices(window.location.pathname === '/services')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const goToServices = () => {
    setShowServices(true)
    window.history.pushState({}, '', '/services')
    window.scrollTo(0, 0)
  }

  const backToPortfolio = () => {
    setShowServices(false)
    window.history.pushState({}, '', '/')
    window.scrollTo(0, 0)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo">ANDREW.SABUDA</div>
        {!showServices && (
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        )}
        {showServices && (
          <ul className="nav-links">
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#process">PROCESS</a></li>
            <li><a href="#pricing">PRICING</a></li>
            <li><a href="#getting-started">GET STARTED</a></li>
          </ul>
        )}
        <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle theme">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>

      {!showServices ? (
        <>
          {/* Portfolio View */}
          {/* Hero Section */}
          <section id="home" className="hero grid-bg">
            <div className="hero-profile-image">
              <img
                src="/profile-photo.jpeg"
                alt="Andrew Sabuda"
                className="profile-photo pixelated"
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

            {/* Services Arrow */}
            <div className="services-arrow" onClick={goToServices}>
              <div className="arrow-text">Website Services</div>
              <div className="arrow-icon">→</div>
            </div>
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
                <li>Angular</li>
                <li>AngularJS</li>
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
        </>
      ) : (
        <>
          {/* Services View */}
          {/* Back Arrow */}
          <div className="back-arrow" onClick={backToPortfolio}>
            <div className="arrow-icon">←</div>
            <div className="arrow-text">Portfolio</div>
          </div>

          <section id="services" className="section grid-bg" style={{ minHeight: '100vh', paddingTop: '120px' }}>
            <div className="section-content">
              <h2 className="section-title">[ SERVICES ]</h2>

              <div className="services-intro">
                <div className="services-profile-image">
                  <img
                    src="/profile-photo.jpeg"
                    alt="Andrew Sabuda"
                    className="profile-photo pixelated"
                  />
                </div>
                <h3 className="services-subtitle">Done-For-You Personal Website Setup & Hosting</h3>
                <p className="services-description">
                  I provide fully managed personal and portfolio websites designed for professionals, freelancers, creators,
                  and small businesses who want a clean, fast website without the technical headaches.
                </p>
                <p className="services-description">
                  Whether you need a brand-new site or want to move an existing website away from expensive or complex platforms
                  (such as WordPress), I handle the entire process end-to-end:
                </p>
              </div>

              <div className="services-features">
                <ul className="services-list">
                  <li>Website setup and deployment</li>
                  <li>Domain connection and secure HTTPS configuration</li>
                  <li>Migration of existing websites to lower-cost hosting</li>
                  <li>Performance optimization for faster load times</li>
                  <li>Ongoing hosting oversight and technical maintenance</li>
                </ul>
                <p className="services-note">
                  Once your site is live, you won't need to manage plugins, hosting dashboards, updates, or security settings —
                  everything is handled for you.
                </p>
              </div>

              <div id="process" className="process-section">
                <h2 className="section-title">[ MY.PROCESS ]</h2>

                <div className="process-steps">
                  <div className="process-step">
                    <h4>Project Intake</h4>
                    <p>
                      Fill out a short form with your goals, content, and any existing site info. This helps me plan your site quickly.
                    </p>
                  </div>

                  <div className="process-step">
                    <h4>50% Deposit</h4>
                    <p>
                      A deposit secures your project and lets me start building your website.
                    </p>
                  </div>

                  <div className="process-step">
                    <h4>Preview & Review</h4>
                    <p>
                      I'll share a preview via screenshots, screen share, or staging link. You can review and request minor tweaks before anything goes live.
                    </p>
                  </div>

                  <div className="process-step">
                    <h4>Final Payment & Deployment</h4>
                    <p>
                      Once you approve, the remaining 50% is due. I then deploy your site to your domain with secure HTTPS and fully functioning hosting.
                    </p>
                  </div>

                  <div className="process-step">
                    <h4>Optional Maintenance</h4>
                    <p>
                      I can manage hosting and updates for you, keeping your site secure and hassle-free year after year.
                    </p>
                  </div>
                </div>

                <p className="process-tagline">
                  <strong>Simple. Fast. Fully managed.</strong> You only pay the final balance when you've approved your site.
                </p>
              </div>

              <div id="pricing" className="pricing-section">
                <h2 className="section-title">[ PRICING ]</h2>

                <div className="pricing-grid">
                  <div className="pricing-card">
                    <h4>Starter Portfolio Website</h4>
                    <ul>
                      <li>1-page professional website</li>
                      <li>Mobile-optimized layout</li>
                      <li>Domain connection and secure deployment</li>
                    </ul>
                    <div className="pricing-details">
                      <p><strong>Setup:</strong> $199</p>
                      <p><strong>Maintenance & hosting oversight (optional):</strong> $99/year</p>
                    </div>
                  </div>

                  <div className="pricing-card">
                    <h4>Professional Website</h4>
                    <ul>
                      <li>Up to 5 pages</li>
                      <li>Contact form setup</li>
                      <li>SEO-ready structure</li>
                    </ul>
                    <div className="pricing-details">
                      <p><strong>Setup:</strong> $399</p>
                      <p><strong>Maintenance:</strong> $149/year</p>
                    </div>
                  </div>

                  <div className="pricing-card">
                    <h4>Website Migration / Cost-Reduction Hosting</h4>
                    <p className="migration-description">
                      Already have a website? I can migrate it to a faster, lower-cost hosting setup while preserving
                      your domain and content.
                    </p>
                    <div className="pricing-details">
                      <p><strong>Migration starting at:</strong> $199</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="getting-started">
                <h2 className="section-title">[ GET.STARTED ]</h2>
                <div className="getting-started">
                  <p>
                    Before beginning, clients complete a short <strong>Project Intake Form</strong> (a quick requirements questionnaire)
                    outlining:
                  </p>
                <ul className="intake-list">
                  <li>Website goals</li>
                  <li>Desired pages or features</li>
                  <li>Existing domain or hosting details (if applicable)</li>
                  <li>Branding or content assets</li>
                </ul>
                <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '1.1rem' }}>
                  To get started, email me at <strong>andrewsabuda@gmail.com</strong> with the subject line{' '}
                  <strong>"Website Build Inquiry"</strong>, or click the button below:
                </p>
                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                  <a
                    href="mailto:andrewsabuda@gmail.com?subject=Website%20Build%20Inquiry"
                    className="intake-button"
                  >
                    Submit Intake Form via Email
                  </a>
                </div>
                <p className="timeline-note">
                  This ensures your site can be planned, built, and launched quickly. Most projects go live within
                  <strong> 48–72 hours</strong> after project approval and receipt of initial payment.
                </p>
                <p className="services-tagline">
                  <strong>Simple websites. Lower long-term costs. Fully managed from domain to deployment.</strong>
                </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-marquee">
          <div className="marquee-content">
            ★ THANKS FOR VISITING ★ COME BACK SOON ★ THANKS FOR VISITING ★ COME BACK SOON ★ THANKS FOR VISITING ★ COME BACK SOON ★ THANKS FOR VISITING ★ COME BACK SOON ★
          </div>
        </div>
        <p className="footer-text" style={{ marginTop: '20px', fontSize: '1rem' }}>
          © 2026 Andrew Sabuda
        </p>
      </footer>
    </div>
  )
}

export default App
