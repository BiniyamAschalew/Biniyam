import React from "react";
import "./App.css";
import profileImage from "./images/Bini.jpeg";

const ownName = "Biniyam Aschalew Tolera";

const links = {
  email: "mailto:binasc@kaist.ac.kr",
  github: "https://github.com/BiniyamAschalew/",
  linkedin: "https://www.linkedin.com/in/biniyamaschalew/",
  scholar: "https://scholar.google.com/scholar?q=Biniyam+Aschalew+Tolera",
  cv: `${process.env.PUBLIC_URL}/Biniyam_Aschalew_CV.pdf`,
};

const newsItems = [
  {
    date: "Mar. 2025",
    text: "Received the CoE Leadership Award for Research Excellence.",
  },
  {
    date: "Jan. 2026",
    text: "Paper accepted at WWW 2026.",
    link: "https://arxiv.org/pdf/2601.14720",
    linkLabel: "Paper",
  },
  {
    date: "Sep. 2025",
    text: "Started M.S. in Electrical Engineering at KAIST and continued in Data AI Lab under Prof. Jaemin Yoo.",
  },
  {
    date: "Aug. 2025",
    text: "Graduated from KAIST with B.S. in Computer Science (Magna Cum Laude).",
  },
  {
    date: "2025",
    text: "Paper accepted at ACM SenSys 2025.",
    link: "https://arxiv.org/abs/2404.15305",
    linkLabel: "Paper",
  },
  {
    date: "2024",
    text: "Paper accepted at EMNLP 2024.",
    link: "https://arxiv.org/abs/2407.10385",
    linkLabel: "Paper",
  },
  {
    date: "2024",
    text: "Paper presented at Korean Software Conference (KSC 2024).",
    link: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12042032&width=1690",
    linkLabel: "Paper",
  },
  {
    date: "Jun. 2024",
    text: "Joined KAIST Data AI Lab as a research intern.",
  },
  {
    date: "Jul. 2023",
    text: "Joined Networking and Mobile Systems Lab (NMSL) as a research intern.",
  },
];

const publications = [
  {
    title:
      "Socially-Aware User Representation Modeling Toward Parameter-Efficient Graph Collaborative Filtering",
    authors:
      "Doyun Choi, Cheonwoo Lee, Biniyam Aschalew Tolera, Taewook Ham, Chanyoung Park, Jaemin Yoo",
    venue: "WWW 2026",
    links: [{ label: "Paper", url: "https://arxiv.org/pdf/2601.14720" }],
  },
  {
    title:
      "SelfReplay: Adapting Self-Supervised Sensory Models via Adaptive Meta-Task Replay",
    authors:
      "Hyungjun Yoon, Jaehyun Kwak, Biniyam Aschalew Tolera, Gaole Dai, Mo Li, Taesik Gong, Kimin Lee, Sung-Ju Lee",
    venue: "ACM SenSys 2025",
    links: [{ label: "Paper", url: "https://arxiv.org/abs/2404.15305" }],
  },
  {
    title:
      "By My Eyes: Grounding Multimodal Large Language Models with Sensor Data via Visual Prompting",
    authors:
      "Hyungjun Yoon, Biniyam Aschalew Tolera, Taesik Gong, Kimin Lee, Sung-Ju Lee",
    venue: "EMNLP 2024",
    links: [{ label: "Paper", url: "https://arxiv.org/abs/2407.10385" }],
  },
  {
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
    role: "Researcher",
    company: "KAIST Data AI Lab",
    date: "Sep. 2025 – Present",
    desc: "Advised by Prof. Jaemin Yoo.",
  },
  {
    role: "Research Intern",
    company: "KAIST Data AI Lab",
    date: "Jun. 2024 – Aug. 2025",
    desc: "Advised by Prof. Jaemin Yoo.",
  },
  {
    role: "Research Intern",
    company: "Networking and Mobile Systems Lab (NMSL)",
    date: "Jul. 2023 – Present",
    desc: "Advised by Prof. Sung-Ju Lee.",
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
    desc: "Developed a makeup transfer feature using GAN models, designing custom metrics and data pipelines.",
  },
  {
    role: "Undergraduate Researcher",
    company: "Institute for Basic Science (IBS)",
    date: "Dec. 2022 – Feb. 2023",
    desc: "Advised by Prof. Meeyoung Cha. Analyzed satellite imagery for Venusian climate modeling using deep-learning.",
  },
];

const education = [
  {
    degree: "M.S. in Electrical Engineering",
    school: "Korea Advanced Institute of Science and Technology (KAIST)",
    date: "Sep. 2025 – Present",
  },
  {
    degree: "B.S. in Computer Science (Magna Cum Laude)",
    school: "Korea Advanced Institute of Science and Technology (KAIST)",
    date: "Mar. 2021 – Aug. 2025",
  },
];

const honors = [
  { title: "CoE Leadership Award (Research Excellence)", date: "Mar. 2025" },
  { title: "Daewoong AI and Big Data Global Scholarship", date: "Mar. 2024" },
  { title: "KAIST Full Scholarship", date: "Mar. 2021" },
  { title: "Hanseong-Sonjaehan Scholarship Award", date: "Mar. 2021" },
  { title: "MindPlus National Mathematics Olympiad Gold Medalist", date: "Aug. 2019" },
];

function SocialIcon({ type }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h15A1.5 1.5 0 0 1 21 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-9Zm1.5 0L12 12.75 19.5 7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.72-4.04-1.42-4.04-1.42-.54-1.38-1.33-1.75-1.33-1.75-1.08-.75.09-.73.09-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.23v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .3" />
      </svg>
    );
  }
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.04c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  }
  if (type === "scholar") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 4.5 9 4.5-9 4.5L3 9l9-4.5ZM7.5 11.25v4.35c0 1.16 2.01 2.1 4.5 2.1s4.5-.94 4.5-2.1v-4.35" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 9v4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.25 3h6l4.5 4.5v12A1.5 1.5 0 0 1 17.25 21h-10.5a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 6.75 3h1.5Zm6 0v4.5h4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.25 12.75h7.5M8.25 16.5h5.25" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SocialLink({ href, label, iconType }) {
  return (
    <a href={href} title={label} aria-label={label} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
      <SocialIcon type={iconType} />
    </a>
  );
}

function renderAuthors(authorText) {
  const chunks = authorText.split(ownName);
  return chunks.map((chunk, index) => (
    <React.Fragment key={`${chunk}-${index}`}>
      {chunk}
      {index < chunks.length - 1 ? <span className="highlight">{ownName}</span> : null}
    </React.Fragment>
  ));
}

function App() {
  return (
    <div className="layout">
      {/* LEFT SIDEBAR */}
      <aside className="sidebar">
        <div className="profile-photo">
          <img src={profileImage} alt="Biniyam Aschalew Tolera" />
        </div>
        <h1 className="name">Biniyam Aschalew</h1>
        <p className="sidebar-title">M.S. Student</p>
        <p className="sidebar-affiliation">KAIST Electrical Engineering<br />Data AI Lab</p>

        <div className="profile-icons">
          <SocialLink href={links.email} label="Email" iconType="email" />
          <SocialLink href={links.linkedin} label="LinkedIn" iconType="linkedin" />
          <SocialLink href={links.scholar} label="Google Scholar" iconType="scholar" />
          <SocialLink href={links.github} label="GitHub" iconType="github" />
          <SocialLink href={links.cv} label="CV" iconType="cv" />
        </div>
      </aside>

      {/* RIGHT MAIN CONTENT */}
      <main className="content">
        <section id="about">
          <h2 className="section-title">About Me</h2>
          <div className="text-content">
            <p>
              I am a current M.S. student in Electrical Engineering at{" "}
              <a href="https://www.kaist.ac.kr/en/" target="_blank" rel="noreferrer">KAIST</a>
              , and I am a researcher in{" "}
              <a href="https://dai.kaist.ac.kr/" target="_blank" rel="noreferrer">Data AI Lab</a>{" "}
              advised by{" "}
              <a href="https://jaeminyoo.github.io/" target="_blank" rel="noreferrer">Prof. Jaemin Yoo</a>.
            </p>
            <p>
              My work focuses on transfer learning and robust representation learning for graph and sensor-based machine learning systems. I am also interested in multimodal large language models and adaptation methods for real-world environments.
            </p>
            <p>
              Previously, I received my B.S. degree in Computer Science from KAIST (Magna Cum Laude), and I worked with both Data AI Lab and Networking and Mobile Systems Lab on various research projects.
            </p>
          </div>
        </section>

        <section id="news">
          <h2 className="section-title">News</h2>
          <ul className="list-items">
            {newsItems.map((item, idx) => (
              <li key={idx} className="list-item flex">
                <div className="date-col">{item.date}</div>
                <div className="desc-col">
                  {item.text}
                  {item.link && (
                    <a className="badge-link inline" href={item.link} target="_blank" rel="noreferrer">
                      [{item.linkLabel}]
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="publications">
          <h2 className="section-title">Publications</h2>
          <div className="pub-list">
            {publications.map((paper, idx) => (
              <div className="pub-entry" key={idx}>
                <div className="paper">{paper.title}</div>
                <div className="authors">{renderAuthors(paper.authors)}</div>
                <div className="venue">{paper.venue}</div>
                <div className="pub-links">
                  {paper.links.map((item, i) => (
                    <a className="badge-link" href={item.url} target="_blank" rel="noreferrer" key={i}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <h2 className="section-title">Experience</h2>
          <ul className="list-items">
            {experience.map((exp, idx) => (
              <li key={idx} className="list-item">
                <div className="flex-between">
                  <strong>{exp.role}</strong>
                  <span className="text-sm date-text">{exp.date}</span>
                </div>
                <div><span className="company">{exp.company}</span></div>
                {exp.desc && <div className="text-sm desc-text">{exp.desc}</div>}
              </li>
            ))}
          </ul>
        </section>

        <section id="education">
          <h2 className="section-title">Education</h2>
          <ul className="list-items">
            {education.map((edu, idx) => (
              <li key={idx} className="list-item">
                <div className="flex-between">
                  <strong>{edu.school}</strong>
                  <span className="text-sm date-text">{edu.date}</span>
                </div>
                <div>{edu.degree}</div>
              </li>
            ))}
          </ul>
        </section>

        <section id="honors">
          <h2 className="section-title">Honors & Awards</h2>
          <ul className="list-items">
            {honors.map((honor, idx) => (
              <li key={idx} className="list-item flex-between border-bottom-light">
                <span>{honor.title}</span>
                <span className="text-sm date-text">{honor.date}</span>
              </li>
            ))}
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;
