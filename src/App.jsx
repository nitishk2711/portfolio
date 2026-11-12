import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, GraduationCap, FileText } from 'lucide-react';
import { personal as p } from './personal';
import { skills, experience, projects, certifications } from './data';

const NAV = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
];

const isPlaceholder = (v) =>
  !v || /your[-. ]?(username|profile|email|name)|example\.com/i.test(v);

const contactLinks = [
  { label: 'GitHub', href: p.github, Icon: Github, external: true },
  { label: 'LinkedIn', href: p.linkedin, Icon: Linkedin, external: true },
  { label: 'Email', href: p.email ? `mailto:${p.email}` : '', Icon: Mail },
].filter((l) => !isPlaceholder(l.href));

if (import.meta.env.DEV && contactLinks.length < 3) {
  console.warn('[portfolio] Some contact links in src/personal.js are still placeholders and are hidden.');
}

function useActiveSection(ids) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const NAV_IDS = NAV.map(([id]) => id);

function Nav() {
  const active = useActiveSection(NAV_IDS);
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#home" aria-label="Back to top">
          <span className="brand-mark">&lt;/&gt;</span>
          <span className="brand-name">{p.name}</span>
        </a>
        <nav aria-label="Primary">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

const codeLines = [
  [['k', 'public class '], ['t', 'Developer'], ['', ' {']],
  [['', '  '], ['t', 'String'], ['', ' role     = '], ['s', '"Java Backend Developer"'], ['', ';']],
  [['', '  '], ['t', 'String'], ['', ' location = '], ['s', `"${p.location}"`], ['', ';']],
  [['', '  '], ['t', 'String'], ['', ' stack    = '], ['s', '"Spring Boot, Spring Cloud"'], ['', ';']],
  [['', '  '], ['t', 'String'], ['', ' builds   = '], ['s', '"REST APIs, microservices"'], ['', ';']],
  [['', '}']],
];

function Hero() {
  return (
    <section id="home" className="hero">
      <div>
        <p className="meta">
          <MapPin size={15} aria-hidden="true" /> {p.location}
        </p>
        <h1>{p.name}</h1>
        <p className="role">{p.role}, focused on Java backend development</p>
        <p className="lead">
          I build REST APIs and microservices with Java, Spring Boot and Spring Cloud, using Kafka
          and Docker for event-driven, containerized services.
        </p>
        <div className="actions">
          <a className="button" href="#projects">View my work</a>
          <a className="button ghost" href="#contact">Get in touch</a>
          {p.resumeUrl && (
            <a className="button ghost" href={p.resumeUrl} target="_blank" rel="noopener noreferrer">
              <FileText size={16} aria-hidden="true" /> Resume
            </a>
          )}
        </div>
      </div>
      <div className="window" aria-hidden="true">
        <div className="window-bar">
          <i /><i /><i />
          <span>Developer.java</span>
        </div>
        <pre>
          <code>
            {codeLines.map((line, i) => (
              <span className="line" key={i}>
                {line.map(([cls, text], j) => (
                  <span className={cls} key={j}>{text}</span>
                ))}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-h">
      <h2 id="about-h">About</h2>
      <p className="prose">
        I’m a Java developer who builds scalable, microservices-based backends: REST APIs,
        service-to-service communication and event-driven processing with Kafka. At work I build
        features on a production workforce platform; outside work I’m building a payment
        microservices stack to learn how these systems fit together.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-h">
      <h2 id="skills-h">Skills</h2>
      <ul className="skills">
        {skills.map(({ title, Icon, items }) => (
          <li key={title} className="card">
            <Icon size={20} aria-hidden="true" />
            <h3>{title}</h3>
            <ul className="chips">
              {items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="exp-h">
      <h2 id="exp-h">Experience</h2>
      <div className="stack">
        {experience.map((e) => (
          <article className="panel" key={e.company}>
            <div className="panel-head">
              <div>
                <h3 className="panel-title">{e.company}</h3>
                <p className="panel-sub">{e.role}</p>
              </div>
              <span className="pill">{e.period}</span>
            </div>
            {e.summary && <p className="prose">{e.summary}</p>}
            <ul className="bullets">
              {e.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <ul className="chips">
              {e.stack.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServiceMap({ rows }) {
  return (
    <svg
      className="map"
      viewBox="0 0 320 290"
      role="img"
      aria-label={`Diagram of an API gateway routing requests to ${rows.join(', ')} services`}
    >
      {rows.map((name, i) => {
        const y = 14 + i * 44;
        return (
          <g key={name}>
            <path d={`M104 145 C 150 145, 150 ${y + 16}, 196 ${y + 16}`} className="map-line" />
            <rect x="196" y={y} width="108" height="32" rx="6" className="map-node" />
            <text x="250" y={y + 20} textAnchor="middle" className="map-text">{name}</text>
          </g>
        );
      })}
      <rect x="16" y="121" width="88" height="48" rx="8" className="map-gateway" />
      <text x="60" y="150" textAnchor="middle" className="map-text map-text-gw">gateway</text>
    </svg>
  );
}

function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="proj-h">
      <h2 id="proj-h">Projects</h2>
      {projects.map((pr) => (
        <article key={pr.name} className={`panel project${pr.services ? '' : ' no-map'}`}>
          {pr.services && (
            <div className="map-wrap"><ServiceMap rows={pr.services} /></div>
          )}
          <div>
            <div className="panel-head">
              <div>
                <h3 className="panel-title">{pr.name}</h3>
                <p className="panel-sub">{pr.subtitle}</p>
              </div>
              {pr.status && <span className="pill pill-wip">{pr.status}</span>}
            </div>
            <p className="prose">{pr.summary}</p>
            <h4>What it covers</h4>
            <ul className="bullets">
              {pr.areas.map((x) => <li key={x}>{x}</li>)}
            </ul>
            <h4>Stack</h4>
            <ul className="chips">
              {pr.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}

function Education() {
  if (!p.education && !p.institution && !certifications.length) return null;
  return (
    <section id="education" className="section" aria-labelledby="edu-h">
      <h2 id="edu-h">Education and certifications</h2>
      <article className="panel">
        {(p.education || p.institution) && (
          <div className="edu">
            <GraduationCap size={22} aria-hidden="true" />
            <div>
              <h3 className="panel-title">{p.education}</h3>
              <p className="panel-sub">{p.institution}</p>
            </div>
          </div>
        )}
        {certifications.length > 0 && (
          <>
            <h4>Certifications</h4>
            <ul className="bullets">
              {certifications.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </>
        )}
      </article>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-h">
      <h2 id="contact-h">Let’s build something meaningful</h2>
      <p className="prose">
        Have an opportunity, a project idea, or just want to connect? Reach out.
      </p>
      <div className="actions">
        {contactLinks.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            className="button ghost"
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon size={16} aria-hidden="true" /> {label}
          </a>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    document.title = `${p.name} | ${p.role}`;
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <span>{p.name} · {new Date().getFullYear()}</span>
        <a href="#home">Back to top</a>
      </footer>
    </>
  );
}