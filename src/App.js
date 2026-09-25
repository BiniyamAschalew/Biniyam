import React from "react";
import { HashRouter as Router, Routes, Route, NavLink, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import profileImage from "./images/Bini.jpeg";

const ownName = "Biniyam Aschalew Tolera";

const links = {
  email: "mailto:binasc@kaist.ac.kr",
  github: "https://github.com/BiniyamAschalew/",
  linkedin: "https://www.linkedin.com/in/biniyamaschalew/",
  scholar: "https://scholar.google.com/citations?user=hfBdqYAAAAAJ&hl=en&oi=ao",
  cv: `${process.env.PUBLIC_URL}/Biniyam_Aschalew_CV.pdf?v=212ff575`,
};

const newsItems = [
  {
    date: "Aug. 2026",
    text: "I am attending KDD 2026 in Jeju, South Korea (student volunteer).",
    link: "https://kdd2026.kdd.org/",
    linkLabel: "Conference",
  },
  {
    date: "Jul. 2026",
    text: "I am attending ICML 2026 in Seoul, South Korea (Graph Foundation Models Workshop reviewer).",
    link: "https://icml.cc/Conferences/2026",
    linkLabel: "Conference",
  },
  {
    date: "Apr. 2026",
    text: "I am attending DASFAA 2026 in Jeju, South Korea (April 27–30).",
    link: "https://dasfaa2026.github.io/",
    linkLabel: "Conference",
  },
  {
    date: "Jan. 2026",
    text: "Paper accepted to WWW 2026 (oral).",
    link: "https://arxiv.org/pdf/2601.14720",
    linkLabel: "Paper",
  },
  {
    date: "Nov. 2025",
    text: "By My Eyes — Qualcomm Innovation Fellowship Korea 2025 winner.",
    link: "https://www.qualcomm.com/research/university-relations/innovation-fellowship/2025-south-korea",
    linkLabel: "Recognition",
  },
  {
    date: "Fall 2025",
    text: "Teaching Assistant at AddisCoder Programming Summer Camp, Ethiopia.",
  },
  {
    date: "Sep. 2025",
    text: "Started M.S. in Electrical Engineering at KAIST (Data AI Lab).",
  },
  {
    date: "Aug. 2025",
    text: "Graduated from KAIST with B.S. in Computer Science (Magna Cum Laude) and a minor in Industrial Engineering.",
  },
  {
    date: "Mar. 2025",
    text: "Received the CoE Leadership Award for Research Excellence.",
  },
  {
    date: "2025",
    text: "Paper accepted to ACM SenSys 2025.",
    link: "https://arxiv.org/abs/2404.15305",
    linkLabel: "Paper",
  },
  {
    date: "2024",
    text: "Paper accepted to EMNLP 2024 (main).",
    link: "https://arxiv.org/abs/2407.10385",
    linkLabel: "Paper",
  },
  {
    date: "2024",
    text: "Paper presented at KSC 2024.",
    link: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12042032&width=1690",
    linkLabel: "Paper",
  },
  {
    date: "Jun. 2024",
    text: "Research internship at KAIST Data AI Lab.",
  },
  {
    date: "Mar. 2024",
    text: "Received the Daewoong AI and Big Data Global Scholarship.",
  },
  {
    date: "Feb. 2024",
    text: "AI internship at Bastion Robotics.",
  },
  {
    date: "Jul. 2023",
    text: "Research internship at KAIST Networking and Mobile Systems Lab (NMSL).",
  },
  {
    date: "Mar. 2021",
    text: "Started B.S. at KAIST with the KAIST Full Scholarship and Hanseong-Sonjaehan Scholarship.",
  },
];

const publications = [
  {
    id: "M1",
    title: "OPAL: Operator Alignment for Unsupervised Graph Domain Adaptation",
    authors: "Biniyam Aschalew Tolera, Akotet Yeshaw Tesema, Cheonwoo Lee, Dooho Lee, Aikta Arya, Jaemin Yoo",
    venue: "Manuscript submitted to NeurIPS 2026",
    contribution: "Developed operator alignment to address structural shifts that degrade graph neural network transfer.",
    links: [],
  },
  {
    id: "C1",
    title:
      "PULSE: Socially-Aware User Representation Modeling Toward Parameter-Efficient Graph Collaborative Filtering",
    authors:
      "Doyun Choi*, Cheonwoo Lee*, Biniyam Aschalew Tolera, Taewook Ham, Chanyoung Park, Jaemin Yoo",
    venue: "WWW 2026",
    distinction: "Oral presentation",
    contribution: "Implemented and evaluated model ablations to assess the contribution of individual components to recommendation performance.",
    links: [{ label: "Paper", url: "https://arxiv.org/pdf/2601.14720" }, { label: "Code", url: "https://github.com/cdy9777/PULSE" }],
  },
  {
    id: "C2",
    title:
      "SelfReplay: Adapting Self-Supervised Sensory Models via Adaptive Meta-Task Replay",
    authors:
      "Hyungjun Yoon, Jaehyun Kwak, Biniyam Aschalew Tolera, Gaole Dai, Mo Li, Taesik Gong, Kimin Lee, Sung-Ju Lee",
    venue: "ACM SenSys 2025",
    contribution: "Contributed to ideation for cross-domain and user adaptation; implemented baselines and designed and ran evaluations of self-supervised meta-learning.",
    links: [{ label: "Paper", url: "https://arxiv.org/abs/2404.15305" }],
  },
  {
    id: "C3",
    title:
      "By My Eyes: Grounding Multimodal Large Language Models with Sensor Data via Visual Prompting",
    authors:
      "Hyungjun Yoon, Biniyam Aschalew Tolera, Taesik Gong, Kimin Lee, Sung-Ju Lee",
    venue: "EMNLP 2024 · Main conference",
    distinction: "Paper recognized by Qualcomm Innovation Fellowship Korea 2025",
    distinctionNote: "Fellowship recipient: Hyungjun Yoon (first author).",
    contribution: "Contributed to visual-prompting ideation and led the full experimental evaluation, including sensor-data pipelines, baselines, and studies of prompt design and sequence-length effects.",
    links: [{ label: "Paper", url: "https://aclanthology.org/2024.emnlp-main.133/" }, { label: "Code", url: "https://github.com/diamond264/ByMyEyes" }, { label: "Recognition", url: "https://www.qualcomm.com/research/university-relations/innovation-fellowship/2025-south-korea" }],
  },
  {
    id: "C4",
    title: "Leveraging Synthetic Data for Data-Free Knowledge Distillation",
    authors:
      "Biniyam Aschalew Tolera, Bryan Nathanael Wijaya, Minhajur Rahman Chowdhury Mahim",
    venue: "Korean Software Conference (KSC) 2024",
    links: [
      {
        label: "Paper",
        url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12042032&width=1690",
      },
      { label: "Code", url: "https://github.com/BiniyamAschalew/KD570" },
    ],
  },
];

const experience = [
  {
    role: "M.S. Student / Researcher",
    company: "KAIST Data AI Lab",
    date: "Sep. 2025 – Present",
    desc: "Advised by Prof. Jaemin Yoo. Developing OPAL for structural graph domain adaptation and investigating scalable in-context learning with tabular foundation models.",
  },
  {
    role: "Research Intern",
    company: "KAIST Data AI Lab",
    date: "Jun. 2024 – Aug. 2025",
    desc: "Advised by Prof. Jaemin Yoo. Research in graph machine learning, transfer learning, and parameter-efficient recommendation.",
  },
  {
    role: "Individual Study",
    company: "Complexity and Real Computation Laboratory, KAIST",
    date: "Mar. 2024 – Aug. 2024",
    desc: "Advised by Prof. Martin Ziegler. Designed experiments using the Hofstadter test to evaluate LLM agents in a virtual world.",
  },
  {
    role: "Research Intern",
    company: "Networking and Mobile Systems Lab (NMSL)",
    date: "Jul. 2023 – Jun. 2024",
    desc: "Advised by Prof. Sung-Ju Lee. Contributed to By My Eyes (EMNLP 2024) and SelfReplay (SenSys 2025), studying multimodal sensor understanding and adaptation of self-supervised sensing models.",
  },
  {
    role: "AI Intern",
    company: "Bastion Robotics, Inc.",
    date: "Dec. 2023 – Feb. 2024",
    desc: "Developed a rule-based AI system to control NPCs and implemented character mechanics using the Unity game engine.",
  },
  {
    role: "Machine Learning Intern",
    company: "BFactory Inc.",
    date: "Dec. 2022 – Feb. 2023",
    desc: "Developed an EleGANt-based makeup-transfer feature, including quality metrics, data pipelines, and fine-tuning; adapted diffusion models for personalized advertisement generation.",
  },
  {
    role: "Individual Study",
    company: "Institute for Basic Science (IBS)",
    date: "Dec. 2022 – Feb. 2023",
    desc: "Advised by Prof. Meeyoung Cha. Analyzed satellite imagery for Venusian climate prediction and evaluated deep learning models for weather classification.",
  },
];

const education = [
  {
    degree: "M.S. in Electrical Engineering",
    school: "Korea Advanced Institute of Science and Technology (KAIST)",
    date: "Sep. 2025 – Jul. 2027 (expected)",
    desc: "Advisor: Prof. Jaemin Yoo · Cumulative GPA: 3.92/4.3",
  },
  {
    degree: "B.S. in Computer Science (Magna Cum Laude)",
    school: "Korea Advanced Institute of Science and Technology (KAIST)",
    date: "Mar. 2021 – Aug. 2025",
    desc: "Minor in Industrial Engineering · Cumulative GPA: 3.87/4.3",
  },
];

const honors = [
  { date: "Mar. 2025", title: "KAIST College of Engineering Leadership Award (Research Excellence)", desc: "Selected for outstanding research by a college-wide committee from department-nominated undergraduates." },
  { date: "Mar. 2024", title: "Daewoong AI and Big Data Global Scholarship" },
  { date: "Mar. 2021", title: "KAIST Full Scholarship" },
  { date: "Mar. 2021", title: "Hanseong-Sonjaehan Scholarship Award" },
  { date: "Aug. 2019", title: "MindPlus National Mathematics Olympiad — Gold Medal", desc: "National mathematics competition in Ethiopia." },
];

const teaching = [
  { date: "Spring 2026", title: "AI Foundation Models: Theory and Practice (EE499)", desc: "Teaching Assistant, KAIST" },
  { date: "Fall 2025", title: "AddisCoder Programming Summer Camp", desc: "Teaching Assistant, Ethiopia" },
  { date: "Fall 2022", title: "Introduction to Algorithms (CS300)", desc: "Teaching Assistant, KAIST" },
  { date: "Spring 2022", title: "Introduction to Programming (CS101)", desc: "Teaching Assistant, KAIST" },
];

const participation = [
  { date: "Aug. 9–13, 2026", title: "KDD 2026 · Jeju, South Korea", desc: "I attended the conference and served as a student volunteer.", url: "https://kdd2026.kdd.org/" },
  { date: "Jul. 6–11, 2026", title: "ICML 2026 · Seoul, South Korea", desc: "I attended the conference and served as a reviewer for the ICML 2026 Graph Foundation Models Workshop.", url: "https://icml.cc/Conferences/2026" },
  { date: "Apr. 27–30, 2026", title: "DASFAA 2026 · Jeju, South Korea", desc: "I attended the 31st International Conference on Database Systems for Advanced Applications.", url: "https://dasfaa2026.github.io/" },
];

const projects = [
  { date: "Spring 2024", title: "Synthetic Data for Zero-Shot Knowledge Distillation", desc: "KAIST CS570 course project, published at KSC 2024. Generated class-specific synthetic data by optimizing noise inputs to maximize teacher logits, enabling student training without the original training data.", url: "https://github.com/BiniyamAschalew/KD570" },
  { date: "Summer 2023", title: "Lang ReCAPTCHA", desc: "Built a KoBERT-based CAPTCHA for low-resource language data collection and user authentication at the Junction Asia hackathon.", url: "https://github.com/Akotet08/LangCaptcha/tree/main" },
  { date: "Spring 2023", title: "Fake Import Declaration Detection", desc: "Placed 3rd of 190+ participants in the KAIST CS360 / Korean Customs Service competition, using model ensembles and data-processing pipelines." },
];

function SocialIcon({ type }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
        <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h15A1.5 1.5 0 0 1 21 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-9Zm1.5 0L12 12.75 19.5 7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
        <path fill="currentColor" d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.72-4.04-1.42-4.04-1.42-.54-1.38-1.33-1.75-1.33-1.75-1.08-.75.09-.73.09-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.23v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .3" />
      </svg>
    );
  }
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
        <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.04c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  }
  if (type === "scholar") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
        <path d="m12 4.5 9 4.5-9 4.5L3 9l9-4.5ZM7.5 11.25v4.35c0 1.16 2.01 2.1 4.5 2.1s4.5-.94 4.5-2.1v-4.35" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 9v4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "cv") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
        <path d="M19.5 21v-3a3 3 0 0 0-3-3H7.5a3 3 0 0 0-3 3v3h15Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 11.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return null;
}

function SocialLink({ href, label, iconType }) {
  return (
    <a href={href} title={label} aria-label={label} className="social-link" target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
      <SocialIcon type={iconType} />
      <span className="social-label">{label}</span>
    </a>
  );
}

function renderAuthors(authorText) {
  const chunks = authorText.split(ownName);
  return chunks.map((chunk, index) => (
    <React.Fragment key={`${chunk}-${index}`}>
      {chunk}
      {index < chunks.length - 1 ? <span className="highlight-author">{ownName}</span> : null}
    </React.Fragment>
  ));
}

function Home() {
  return (
    <div className="page-animate page-content default-spacing">
      <section className="section">
        <h2 className="section-title">About Me</h2>
        <div className="text-content">
          <p>
            I am an M.S. student in Electrical Engineering at KAIST, advised by <a href="https://jaeminyoo.github.io/" target="_blank" rel="noreferrer">Prof. Jaemin Yoo</a> in <a href="https://dai.kaist.ac.kr/" target="_blank" rel="noreferrer">Data AI Lab</a>. I received my B.S. in Computer Science from KAIST in 2025, graduating magna cum laude with a minor in Industrial Engineering. My research interests lie in <strong>deep learning theory</strong>, <strong>transfer learning</strong>, and <strong>graph machine learning</strong>. I am currently exploring efficient in-context learning for tabular, time-series, and graph data.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">News</h2>
        <div className="news-container">
          {newsItems.map((item, idx) => (
            <div key={idx} className="news-item">
              <div className="news-date">{item.date}</div>
              <div className="news-text">
                {item.text}
                {item.link && (
                  <a className="paper-badge" href={item.link} target="_blank" rel="noreferrer">
                    [{item.linkLabel}]
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Publications() {
  return (
    <div className="page-animate page-content default-spacing">
      <section className="section">
        <h2 className="section-title">Publications &amp; Manuscripts</h2>
        <p className="section-note">* Equal contribution. </p>
        <div className="pub-list">
          {publications.map((paper) => (
            <article className="pub-entry" key={paper.id} id={paper.id}>
              <h3 className="paper-title"><span className="paper-id">[{paper.id}]</span> {paper.title}</h3>
              <div className="paper-authors">{renderAuthors(paper.authors)}</div>
              <div className="paper-venue">{paper.venue}</div>
              {paper.distinction && (
                <div className="paper-distinction">{paper.distinction}</div>
              )}
              {paper.distinctionNote && <div className="paper-note">{paper.distinctionNote}</div>}
              {paper.contribution && <p className="paper-contribution"><strong>My contribution:</strong> {paper.contribution}</p>}
              {paper.links.length > 0 && <div className="paper-links">
                {paper.links.map((item, i) => (
                  <a className="link-button" href={item.url} target="_blank" rel="noreferrer" key={i}>
                    {item.label}
                  </a>
                ))}
              </div>}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function TimelineSection({ title, items }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="timeline">
        {items.map((item) => (
          <div className="timeline-item" key={`${item.title}-${item.date}`}>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <h3 className="timeline-role">{item.url ? <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a> : item.title}</h3>
              {item.desc && <div className="timeline-desc">{item.desc}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CV() {
  return (
    <div className="page-animate page-content default-spacing">
      <div className="cv-download"><a className="link-button" href={links.cv} target="_blank" rel="noreferrer">Download CV (PDF)</a><span>Updated September 2026</span></div>
      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-date">{edu.date}</div>
              <div className="timeline-content">
                <h3 className="timeline-role">{edu.school}</h3>
                <div className="timeline-company">{edu.degree}</div>
                <div className="timeline-desc">{edu.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-content">
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">{exp.company}</div>
                {exp.desc && <div className="timeline-desc">{exp.desc}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>
      <TimelineSection title="Honors & Awards" items={honors} />
      <TimelineSection title="Teaching" items={teaching} />
      <TimelineSection title="Academic Service & Conference Participation" items={participation} />
      <TimelineSection title="Selected Projects" items={projects} />
      <section className="section">
        <h2 className="section-title">Technical Skills</h2>
        <p><strong>Programming:</strong> Python, C, Java, SQL, MATLAB</p>
        <p><strong>Libraries and tools:</strong> PyTorch, TensorFlow, scikit-learn, NumPy, pandas, Git, Linux</p>
      </section>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* GLOBAL TOP NAVIGATION SECTION */}
      <nav className="top-nav">
        <div className="nav-container">
          <div className="nav-brand">Biniyam Aschalew</div>
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
            <NavLink to="/publications" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Publications</NavLink>
            <NavLink to="/cv" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>CV</NavLink>
          </div>
        </div>
      </nav>

      <div className="layout">
        {/* HEADER for Mobile */}
        <header className="mobile-header">
          <div className="profile-photo-mobile">
            <img src={profileImage} alt="Biniyam Aschalew Tolera" />
          </div>
          <div>
            <h1 className="name-mobile">Biniyam Aschalew</h1>
            <p className="affiliation-mobile">M.S. Student &middot; KAIST Data AI Lab</p>
            <div className="mobile-profile-links">
              <SocialLink href={links.email} label="Email" iconType="email" />
              <SocialLink href={links.scholar} label="Scholar" iconType="scholar" />
              <SocialLink href={links.github} label="GitHub" iconType="github" />
              <SocialLink href={links.cv} label="CV" iconType="cv" />
            </div>
          </div>
        </header>

        {/* LEFT SIDEBAR (Desktop only) */}
        <aside className="sidebar">
          <div className="sidebar-inner">
            <div className="profile-photo">
              <img src={profileImage} alt="Biniyam Aschalew Tolera" />
            </div>

            <h1 className="name">Biniyam Aschalew</h1>
            <p className="sidebar-title">M.S. Student</p>
            <p className="sidebar-affiliation">KAIST Electrical Engineering<br />Data AI Lab</p>

            {/* Sidebar quick links, no circles just simple text or minimal icon+text */}
            <div className="profile-links-list">
              <SocialLink href={links.email} label="Email" iconType="email" />
              <SocialLink href={links.scholar} label="Google Scholar" iconType="scholar" />
              <SocialLink href={links.github} label="GitHub" iconType="github" />
              <SocialLink href={links.linkedin} label="LinkedIn" iconType="linkedin" />
              <SocialLink href={links.cv} label="CV" iconType="cv" />
            </div>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT AREA */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
