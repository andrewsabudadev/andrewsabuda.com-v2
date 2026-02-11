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
  const [formStatus, setFormStatus] = useState('')

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

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormStatus('success')
        form.reset()
        setTimeout(() => setFormStatus(''), 5000)
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
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
            <li><a href="#process">PROCESS</a></li>
            <li><a href="#guarantee">GUARANTEE</a></li>
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
                Hey! I'm Andrew, a full-stack software engineer passionate about building
                applications that drive real business impact. With over 6 years of experience
                in fintech and enterprise mobility management, I've led the development of
                high-impact features that dramatically improved conversion rates and business outcomes.
                <br /><br />
                I specialize in React, TypeScript, and Node.js, with AWS cloud expertise.
                Whether working with UX teams to refine requirements or building solutions
                end-to-end in fast-paced startup environments, I thrive on solving complex
                problems with clean, scalable code.
                <br /><br />
                In my spare time, I build Agentic AI tools that help developers on my team
                work smarter and faster.
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

            <a href="https://lunalinks.io" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="project-card">
                <h3 className="project-title">LUNALINKS</h3>
                <p className="project-description">
                  A customizable "link in bio" platform where users can create personalized profile pages
                  with social media links. Features email authentication, real-time profile customization
                  with live preview, custom color themes, image uploads, and support for 10+ social platforms.
                </p>
                <div className="project-tags">
                  <span className="tag">REACT</span>
                  <span className="tag">TYPESCRIPT</span>
                  <span className="tag">NODE.JS</span>
                  <span className="tag">EXPRESS</span>
                  <span className="tag">AWS COGNITO</span>
                  <span className="tag">DYNAMODB</span>
                  <span className="tag">S3</span>
                  <span className="tag">CLOUDFRONT</span>
                </div>
              </div>
            </a>
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
              Looking for a software engineer?
            </p>
            <p className="hero-description">
              Let's connect!
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
              <div className="services-intro">
                <div className="services-profile-image" style={{ margin: '30px 0' }}>
                  <img
                    src="/profile-photo.jpeg"
                    alt="Andrew Sabuda"
                    className="profile-photo pixelated"
                  />
                </div>
                <h3 className="services-subtitle">Premium Custom Website Creation</h3>
                <p className="services-description">
                  I provide fully managed personal and portfolio websites designed for professionals, freelancers, creators,
                  and small businesses who want a clean, fast, fully customizable website without the technical headaches.
                </p>
                <p className="services-description">
                  Whether you need a brand-new site or want to move an existing website away from expensive or complex platforms
                  (such as WordPress), I handle the entire process end-to-end.
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
                    <h4>Maintenance</h4>
                    <p>
                      For a small annual payment, I manage hosting and updates for you, keeping your site secure and hassle-free year after year.
                    </p>
                  </div>
                </div>
              </div>

              <div id="guarantee" className="guarantee-section">
                <h2 className="section-title">[ RISK-FREE GUARANTEE ]</h2>
                <div className="guarantee-content retro-box" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <h3 style={{ marginBottom: '20px', color: 'var(--neon-green)' }}>Deposit & Refund Policy</h3>
                  <p style={{ marginBottom: '15px' }}>
                    A <strong>50% deposit</strong> is required to begin development.
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    After the initial preview, you may choose to <strong>cancel the project and receive a full refund</strong> of the deposit,
                    provided no additional revision work has been requested.
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    Once revision requests or additional changes are requested after the preview, the deposit becomes non-refundable,
                    and the project proceeds toward final delivery.
                  </p>
                  <p>
                    <strong>Refunds are available for first-time customers only.</strong>
                  </p>
                </div>
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
                      <p><strong>Maintenance & hosting oversight:</strong> $50/year</p>
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
                    Before beginning, please complete a short <strong>Project Intake Form </strong> 
                    outlining:
                  </p>
                <ul className="intake-list">
                  <li>Website goals</li>
                  <li>Desired pages or features</li>
                  <li>Existing domain or hosting details (if applicable)</li>
                  <li>Branding or content assets</li>
                </ul>
                <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '1.1rem' }}>
                  Email me at <strong>andrewsabuda@gmail.com</strong> with the subject <strong>"Website Build Inquiry" </strong>
                </p>
                <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '1.1rem' }}>
                  Or use the form below:
                </p>
                {/* Project Intake Form */}
                <div className="intake-form-container" style={{ maxWidth: '600px', margin: '30px auto' }}>
                  <form
                    action="https://formspree.io/f/mdalkalz"
                    method="POST"
                    onSubmit={handleFormSubmit}
                    className="retro-box"
                    style={{ padding: '30px' }}
                  >
                    <div style={{ marginBottom: '20px' }}>
                      <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        style={{
                          width: '100%',
                          padding: '10px',
                          fontSize: '1rem',
                          border: '2px solid var(--neon-green)',
                          background: 'var(--bg-dark)',
                          color: 'var(--text-light)',
                          fontFamily: 'monospace'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address (e.g., name@example.com)"
                        style={{
                          width: '100%',
                          padding: '10px',
                          fontSize: '1rem',
                          border: '2px solid var(--neon-green)',
                          background: 'var(--bg-dark)',
                          color: 'var(--text-light)',
                          fontFamily: 'monospace'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        title="Please enter a valid 10-digit phone number"
                        placeholder="123-456-7890"
                        inputMode="numeric"
                        onKeyDown={(e) => {
                          // Handle backspace on dashes
                          if (e.key === 'Backspace') {
                            const value = e.target.value;
                            const cursorPos = e.target.selectionStart;
                            if (cursorPos > 0 && value[cursorPos - 1] === '-') {
                              e.preventDefault();
                              const newValue = value.slice(0, cursorPos - 2) + value.slice(cursorPos);
                              e.target.value = newValue;
                              e.target.setSelectionRange(cursorPos - 1, cursorPos - 1);
                              // Trigger input event to reformat
                              e.target.dispatchEvent(new Event('input', { bubbles: true }));
                            }
                          }
                        }}
                        onInput={(e) => {
                          // Get cursor position before formatting
                          const cursorPos = e.target.selectionStart;
                          const oldLength = e.target.value.length;

                          // Remove all non-numeric characters
                          let value = e.target.value.replace(/\D/g, '');

                          // Limit to 10 digits
                          if (value.length > 10) {
                            value = value.slice(0, 10);
                          }

                          // Format as XXX-XXX-XXXX
                          let formatted = '';
                          if (value.length >= 6) {
                            formatted = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
                          } else if (value.length >= 3) {
                            formatted = value.slice(0, 3) + '-' + value.slice(3);
                          } else {
                            formatted = value;
                          }

                          e.target.value = formatted;

                          // Restore cursor position
                          const newLength = formatted.length;
                          if (newLength > oldLength) {
                            e.target.setSelectionRange(cursorPos + 1, cursorPos + 1);
                          }
                        }}
                        style={{
                          width: '100%',
                          padding: '10px',
                          fontSize: '1rem',
                          border: '2px solid var(--neon-green)',
                          background: 'var(--bg-dark)',
                          color: 'var(--text-light)',
                          fontFamily: 'monospace'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label htmlFor="projectType" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        defaultValue=""
                        style={{
                          width: '100%',
                          padding: '10px',
                          fontSize: '1rem',
                          border: '2px solid var(--neon-green)',
                          background: 'var(--bg-dark)',
                          color: 'var(--text-light)',
                          fontFamily: 'monospace'
                        }}
                      >
                        <option value="">Select one...</option>
                        <option value="starter">Starter Portfolio Website</option>
                        <option value="professional">Professional Website (up to 5 pages)</option>
                        <option value="migration">Website Migration</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label htmlFor="websiteGoals" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                        Website Goals & Details *
                      </label>
                      <textarea
                        id="websiteGoals"
                        name="websiteGoals"
                        required
                        rows="6"
                        placeholder="Tell me about your project: goals, desired features, existing domain/website, timeline, etc."
                        style={{
                          width: '100%',
                          padding: '10px',
                          fontSize: '1rem',
                          border: '2px solid var(--neon-green)',
                          background: 'var(--bg-dark)',
                          color: 'var(--text-light)',
                          fontFamily: 'monospace',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="intake-button"
                      style={{ width: '100%', marginTop: '10px' }}
                    >
                      Submit Project Inquiry
                    </button>

                    {formStatus === 'success' && (
                      <p style={{ marginTop: '15px', color: 'var(--neon-green)', textAlign: 'center', fontWeight: 'bold' }}>
                        ✓ Message sent successfully! I'll get back to you soon.
                      </p>
                    )}
                    {formStatus === 'error' && (
                      <p style={{ marginTop: '15px', color: '#ff4444', textAlign: 'center', fontWeight: 'bold' }}>
                        ✗ Something went wrong. Please email me directly at andrewsabuda@gmail.com
                      </p>
                    )}
                  </form>
                </div>
                <p className="timeline-note">
                  Most projects go live within<strong> 48–72 hours</strong> after project approval and receipt of initial payment.
                </p>
                <p className="services-tagline">
                  <strong>Better websites. Lower costs. Fully managed from domain to deployment.</strong>
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
