import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import logo from './assets/logo-source.png';
import pointGrinding from './assets/point-grinding-cell.jpg';
import annealing from './assets/end-annealing-setup.jpg';
import hmiMachine from './assets/hmi-control-machine.jpg';
import fixtureBench from './assets/fixture-test-bench.jpg';
import walkthrough from './assets/machine-walkthrough.mp4';
import machineMotion from './assets/machine-motion.mp4';

const PHONE = '+919818100015';
const DISPLAY_PHONE = '+91 98181 00015';
const EMAIL = 'bpdinnovatech@gmail.com';
const ADDRESS = 'Ground Floor, Gali No. 6, Khasra No. 875, Meerut Road, Banwari Nagar, Ghaziabad, Uttar Pradesh 201001';
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Ground+Floor%2C+Gali+No+6%2C+Khasra+No+875%2C+Meerut+Road%2C+Banwari+Nagar%2C+Ghaziabad%2C+Uttar+Pradesh+201001';
const YOUTUBE = 'https://youtube.com/@bpdinnovatech6478';

function waUrl(message = "Hi BPD Innovatech, I'd like to discuss a machine or automation requirement.") {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

const capabilities = [
  ['01', 'Industrial Automation', 'PLC, HMI, sensors, control panels and machine logic for production environments.', 'Controls + integration'],
  ['02', 'Special Purpose Machines', 'Purpose-built stations and machines developed around a defined manufacturing process.', 'Concept to commissioning'],
  ['03', 'Machine Design & Fabrication', 'Custom fixtures, guarding, mechanisms, operator interfaces and fabrication-ready builds.', 'Mechanical + electrical'],
  ['04', 'Retrofit & Support', 'Brownfield upgrades, troubleshooting, commissioning and practical production support.', 'On-site support'],
];

const projects = [
  { n: '01', title: 'Point Grinding Cell', tag: 'Automation / Grinding', image: pointGrinding, copy: 'Grinding station with integrated HMI control, tooling and an enclosed working area.' },
  { n: '02', title: 'End Annealing Setup', tag: 'Thermal Process', image: annealing, copy: 'Compact thermal-process station designed around operator access and repeatable handling.' },
  { n: '03', title: 'HMI Control Machine', tag: 'Controls / HMI', image: hmiMachine, copy: 'Machine controls integrated with guarding, tooling and production hardware.' },
  { n: '04', title: 'Fixture Test Bench', tag: 'Fixtures / Testing', image: fixtureBench, copy: 'Purpose-built bench for repeatable part handling, testing and process control.' },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return <header className="nav">
    <div className="nav-inner">
      <a className="brand" href="#top" onClick={close} aria-label="BPD Innovatech home">
        <img src={logo} alt="" />
        <span><strong>BPD INNOVATECH</strong><small>INNOVATION FOR EXCELLENCE</small></span>
      </a>
      <nav className={open ? 'desktop-nav open' : 'desktop-nav'} aria-label="Primary navigation">
        <a href="#capabilities" onClick={close}>Capabilities</a>
        <a href="#projects" onClick={close}>Machine work</a>
        <a href="#process" onClick={close}>Process</a>
        <a href="#contact" onClick={close}>Contact</a>
      </nav>
      <div className="nav-actions">
        <a className="nav-phone" href={`tel:${PHONE}`}>Call us <span>{DISPLAY_PHONE}</span></a>
        <a className="nav-cta" href={waUrl()} target="_blank" rel="noreferrer">Discuss a project <Arrow /></a>
      </div>
      <button className={open ? 'menu active' : 'menu'} onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span/><span/></button>
    </div>
  </header>;
}

function Reveal({ children, className = '', delay = '' }) {
  return <div className={`reveal ${delay} ${className}`}>{children}</div>;
}

function Hero() {
  return <section className="hero section-shell" id="top">
    <Reveal className="hero-copy">
      <div className="eyebrow"><span/> INDUSTRIAL ENGINEERING · AUTOMATION · MACHINES</div>
      <h1>Machines engineered<br/><em>for the real world.</em></h1>
      <p>Custom automation, special purpose machines and industrial control systems—designed around your process and built for the production floor.</p>
      <div className="hero-actions">
        <a className="btn btn-dark" href={waUrl()} target="_blank" rel="noreferrer">Start a project <Arrow /></a>
        <a className="btn btn-quiet" href="#projects">Explore our work <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero-proof"><span>Based in Ghaziabad, Uttar Pradesh</span><i/><span>Machine design to commissioning</span></div>
    </Reveal>
    <Reveal className="hero-visual" delay="delay-1">
      <div className="build-mark" aria-hidden="true"><span>BPD</span><small>DESIGN / BUILD / CONTROL</small></div>
      <div className="hero-frame">
        <video autoPlay muted loop playsInline poster={pointGrinding} aria-label="BPD Innovatech machine in operation"><source src={walkthrough} type="video/mp4"/></video>
        <div className="hero-overlay"/>
        <div className="machine-tag"><span className="live-dot"/> ACTUAL BPD MACHINE</div>
        <div className="hero-caption"><small>ENGINEERED TO SPECIFICATION</small><strong>Automation that belongs<br/>on the production floor.</strong></div>
        <a className="video-link" href={YOUTUBE} target="_blank" rel="noreferrer" aria-label="View BPD Innovatech machines on YouTube"><span>▶</span> Watch machines in motion</a>
      </div>
      <div className="visual-note"><span>01</span><p>Design, controls, fabrication and commissioning brought together in one practical engineering workflow.</p></div>
    </Reveal>
  </section>;
}

function ScopeStrip() {
  const items = ['Process study', 'Mechanical design', 'PLC & HMI', 'Fabrication', 'Commissioning'];
  return <div className="scope-strip" aria-label="Project delivery scope"><div className="scope-inner"><span className="scope-label">END-TO-END DELIVERY</span>{items.map(item => <span className="scope-item" key={item}>{item}</span>)}</div></div>;
}

function Capabilities() {
  return <section className="section section-shell" id="capabilities">
    <div className="section-label"><span>01</span> CAPABILITIES</div>
    <div className="intro-grid">
      <h2>From a process problem<br/>to a <em>working machine.</em></h2>
      <div><p className="lead">BPD Innovatech develops practical industrial systems that bring mechanical engineering, controls and automation together.</p><p>Each build starts with the production requirement, then moves through design, fabrication, controls, testing and handover.</p></div>
    </div>
    <div className="cap-grid">{capabilities.map(([n, title, copy, meta]) => <article className="cap" key={n}><div className="cap-top"><span>{n}</span><small>{meta}</small></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
    <div className="workshop-note">
      <span className="note-index">BPD / 01</span>
      <p><strong>Bring us the part, process or bottleneck.</strong> We will help shape it into a practical machine brief before the build begins.</p>
      <a href="#contact">Share a requirement <Arrow /></a>
    </div>
  </section>;
}

function Projects() {
  return <section className="section section-shell projects-section" id="projects">
    <div className="section-head"><div className="section-label"><span>02</span> SELECTED MACHINE WORK</div><a href={YOUTUBE} target="_blank" rel="noreferrer">More on YouTube <Arrow /></a></div>
    <div className="projects-intro"><h2>Built machines.<br/><em>Visible engineering.</em></h2><p>Selected BPD Innovatech work—shown through real machines and production-floor photography.</p></div>
    <div className="project-grid">{projects.map((p, i) => <Reveal key={p.n} className="machine-card" delay={i % 2 ? 'delay-1' : ''}>
      <div className="machine-media"><img src={p.image} alt={p.title} loading="lazy"/><span className="project-index">PROJECT {p.n}</span><div className="machine-shade"/></div>
      <div className="machine-info"><div><span className="machine-tagline">{p.tag}</span><h3>{p.title}</h3><p>{p.copy}</p></div><span className="machine-line"/></div>
    </Reveal>)}</div>
  </section>;
}

function Statement() {
  return <section className="statement"><div className="statement-inner"><span className="section-label">ENGINEERING PRINCIPLE</span><h2>Build around the process.<br/><em>Not around the brochure.</em></h2><p>Good automation makes the operator’s job clearer, the process more repeatable and the machine easier to support.</p><div className="statement-rule"><span>PROCESS FIRST</span><span>PRACTICAL CONTROLS</span><span>SERVICEABLE DESIGN</span></div></div></section>;
}

function Process() {
  const steps = [
    ['01', 'Survey & scope', 'Understand the process, part, operator workflow, controls and site constraints.'],
    ['02', 'Design & build', 'Translate the requirement into mechanisms, fixtures, panels, machine logic and fabrication.'],
    ['03', 'Test & commission', 'Validate working behaviour, refine the build and support the handover to production.'],
  ];
  return <section className="section section-shell" id="process">
    <div className="section-label"><span>03</span> HOW WE WORK</div>
    <div className="process-head"><h2>A clear path from<br/>requirement to <em>handover.</em></h2><p>A focused engineering process that keeps every decision aligned with the actual production requirement.</p></div>
    <div className="process-grid">{steps.map(([n,t,c]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p><i aria-hidden="true">→</i></article>)}</div>
  </section>;
}

function Media() {
  return <section className="section section-shell media">
    <div className="section-head"><div className="section-label"><span>04</span> MACHINES IN MOTION</div><a href={YOUTUBE} target="_blank" rel="noreferrer">Visit channel <Arrow /></a></div>
    <div className="video-grid">
      <div className="video-card"><video controls playsInline preload="metadata" poster={pointGrinding}><source src={walkthrough} type="video/mp4"/></video><div><span>01 / WALKTHROUGH</span><strong>Machine overview</strong></div></div>
      <div className="video-card"><video controls playsInline preload="metadata" poster={hmiMachine}><source src={machineMotion} type="video/mp4"/></video><div><span>02 / IN OPERATION</span><strong>Process & motion</strong></div></div>
    </div>
  </section>;
}

function Contact() {
  const [status, setStatus] = useState('');
  const initial = useMemo(() => ({ name: '', company: '', phone: '', message: '' }), []);
  const [form, setForm] = useState(initial);
  const update = e => setForm(v => ({ ...v, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    const text = `Hi BPD Innovatech, I have a machine/automation enquiry.\n\nName: ${form.name}\nCompany / Plant: ${form.company || 'Not provided'}\nPhone: ${form.phone || 'Not provided'}\nRequirement: ${form.message}`;
    setStatus('Opening WhatsApp…');
    window.open(waUrl(text), '_blank', 'noopener,noreferrer');
  };
  return <section className="contact section section-shell" id="contact">
    <div className="contact-panel">
      <span className="contact-stamp" aria-hidden="true">BPD<br/>GZB</span>
      <div className="contact-copy"><div className="section-label">05 / START A PROJECT</div><h2>Let’s discuss your next <em>machine.</em></h2><p>Share the part, process or problem you want to automate. We’ll start with the requirement and take the conversation from there.</p>
        <div className="contact-details">
          <a href={`tel:${PHONE}`}><span>CALL</span><b>{DISPLAY_PHONE}</b><Arrow /></a>
          <a href={`mailto:${EMAIL}`}><span>EMAIL</span><b>{EMAIL}</b><Arrow /></a>
          <a href={MAP_URL} target="_blank" rel="noreferrer"><span>LOCATION</span><b>Ghaziabad, Uttar Pradesh</b><Arrow /></a>
        </div>
        <div className="address">{ADDRESS}</div>
      </div>
      <form className="enquiry-form" onSubmit={submit}>
        <div className="form-top"><span>QUICK ENQUIRY</span><small>Opens directly in WhatsApp</small></div>
        <label>Name<input name="name" value={form.name} onChange={update} required placeholder="Your name" autoComplete="name"/></label>
        <label>Company / plant<input name="company" value={form.company} onChange={update} placeholder="Company or plant location" autoComplete="organization"/></label>
        <label>Phone / WhatsApp<input name="phone" value={form.phone} onChange={update} placeholder="Your contact number" autoComplete="tel" inputMode="tel"/></label>
        <label>Project requirement<textarea name="message" value={form.message} onChange={update} required rows="4" placeholder="Briefly describe the machine, process or automation requirement…"/></label>
        <button className="btn btn-dark submit" type="submit">Send enquiry on WhatsApp <Arrow /></button>
        <small className="form-note">Your form data is not stored on this website.</small>
        {status && <div className="form-status" role="status">{status}</div>}
      </form>
    </div>
  </section>;
}

function Footer() {
  return <footer><div className="footer-brand"><img src={logo} alt=""/><div><strong>BPD INNOVATECH</strong><span>Innovation for Excellence</span></div></div><div className="footer-links"><a href="#capabilities">Capabilities</a><a href="#projects">Work</a><a href={`tel:${PHONE}`}>Call</a><a href={waUrl()} target="_blank" rel="noreferrer">WhatsApp</a><a href={YOUTUBE} target="_blank" rel="noreferrer">YouTube</a></div><p>© {new Date().getFullYear()} BPD Innovatech. All rights reserved.</p></footer>;
}

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { nodes.forEach(n => n.classList.add('visible')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    nodes.forEach(n => observer.observe(n));
    return () => observer.disconnect();
  }, []);
  return <>
    <div className="grain"/>
    <Header/>
    <main><Hero/><ScopeStrip/><Capabilities/><Projects/><Statement/><Process/><Media/><Contact/></main>
    <Footer/>
    <a className="floating-wa" href={waUrl()} target="_blank" rel="noreferrer" aria-label="Chat with BPD Innovatech on WhatsApp"><span className="wa-icon" aria-hidden="true">●</span><b>WhatsApp</b></a>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
