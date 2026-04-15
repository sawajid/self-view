import './App.css'
import { resumeData } from './constants'
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <div className="container hero-content">
          <div className="hero-photo-container">
            <img src="Wajid_Pub.png" alt={resumeData.name} className="profile-photo" />
            <div className="csm-badge-container">
              <img 
                src="sa-csm-600.png" 
                alt="Certified ScrumMaster" 
                className="csm-badge"
                title="Certified ScrumMaster (CSM)"
              />
            </div>
          </div>
          <div className="hero-text">
            <h1>{resumeData.name}</h1>
            <p className="title">{resumeData.title}</p>
            <div className="contact-info">
              <span><FaMapMarkerAlt /> {resumeData.location}</span>
              <a href={`tel:${resumeData.phone}`}><FaPhone /> {resumeData.phone}</a>
              <a href={`mailto:${resumeData.email}`}><FaEnvelope /> {resumeData.email}</a>
              <a href={`https://${resumeData.linkedin}`} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
            </div>
          </div>
        </div>
      </header>

      <section className="summary">
        <div className="container">
          <h2 className="section-title">Professional Summary</h2>
          <p>{resumeData.summary}</p>
        </div>
      </section>

      <section className="skills bg-alt">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming</h3>
              <ul>{resumeData.skills.programming.map(s => <li key={s}>{s}</li>)}</ul>
            </div>
            <div className="skill-category">
              <h3>Frameworks</h3>
              <ul>{resumeData.skills.frameworks.map(s => <li key={s}>{s}</li>)}</ul>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <ul>{resumeData.skills.databases.map(s => <li key={s}>{s}</li>)}</ul>
            </div>
            <div className="skill-category">
              <h3>DevOps & Cloud</h3>
              <ul>
                {[...resumeData.skills.devops, ...resumeData.skills.cloud].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="skill-category">
              <h3>Domain Expertise</h3>
              <ul>
                {resumeData.skills.domain.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="skill-category">
              <h3>Standards & Protocols</h3>
              <ul>
                {resumeData.skills.standards.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          {resumeData.experience.map((exp, idx) => (
            <div key={idx} className="company-block">
              <div className="company-header">
                <h3>{exp.company}</h3>
                <span>{exp.location}</span>
              </div>
              {exp.roles.map((role, rIdx) => (
                <div key={rIdx} className="role-block">
                  <div className="role-header">
                    <h4>{role.title}</h4>
                    <span className="period">{role.period}</span>
                  </div>
                  <ul>
                    {role.highlights.map((h, hIdx) => <li key={hIdx}>{h}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="education-achievements bg-alt">
        <div className="container grid-2">
          <div className="education">
            <h2 className="section-title">Education</h2>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="edu-item">
                <h4>{edu.degree}</h4>
                <p>{edu.institution}</p>
                <span className="period">{edu.period}</span>
              </div>
            ))}
          </div>
          <div className="achievements">
            <h2 className="section-title">Certifications & Achievements</h2>
            <div className="cert-item">
              <h4>Certifications</h4>
              <ul>{resumeData.certifications.map(c => <li key={c}>{c}</li>)}</ul>
            </div>
            <div className="achieve-item">
              <h4>Key Achievements</h4>
              <ul>{resumeData.keyAchievements.map(a => <li key={a}>{a}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="publication">
        <div className="container">
          <h2 className="section-title">Publication & Activities</h2>
          <div className="pub-card">
            <h4>{resumeData.publication.title}</h4>
            <p>{resumeData.publication.info}</p>
          </div>
          <div className="languages mt-2">
            <h4>Languages</h4>
            <p>{resumeData.languages.join(', ')}</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
