import React from "react";
import "./App.css";
import profileImage from "./images/Bini.jpeg";

const profile = {
  name: "Biniyam Aschalew Tolera",
  title: "M.S. Student @ KAIST Data AI Lab",
  location: "Daejeon, Republic of Korea",
  email: "mailto:binasc@kaist.ac.kr",
  github: "https://github.com/BiniyamAschalew/",
  linkedin: "https://www.linkedin.com/in/biniyamaschalew/",
  // No direct Scholar profile URL is embedded in the current CV PDF.
  scholar: "https://scholar.google.com/scholar?q=Biniyam+Aschalew+Tolera",
  cv: `${process.env.PUBLIC_URL}/Biniyam_Aschalew_CV.pdf`,
};

const newsItems = [
  {
    date: "Jan 2026",
    text: "Paper [C.4] accepted at WWW 2026: Socially-Aware User Representation Modeling Toward Parameter-Efficient Graph Collaborative Filtering.",
    link: "https://arxiv.org/pdf/2601.14720",
    linkLabel: "Paper",
  },
  {
    date: "Sep 2025",
    text: "Started M.S. in Electrical Engineering at KAIST and continued research in the Data AI Lab under Prof. Jaemin Yoo.",
  },
  {
    date: "Aug 2025",
    text: "Graduated from KAIST with B.S. in Computer Science (Magna Cum Laude, Major GPA 3.96/4.3).",
  },
  {
    date: "2025",
    text: "Paper [C.2] accepted at SenSys 2025: SelfReplay: Adapting Self-Supervised Sensory Models via Adaptive Meta-Task Replay.",
    link: "https://arxiv.org/abs/2404.15305",
    linkLabel: "Paper",
  },
  {
    date: "2024",
    text: "Paper [C.1] accepted at EMNLP 2024: By My Eyes: Grounding Multimodal Large Language Models with Sensor Data via Visual Prompting.",
    link: "https://arxiv.org/abs/2407.10385",
    linkLabel: "Paper",
  },
  {
    date: "2024",
    text: "Paper [C.3] presented at KSC 2024: Leveraging Synthetic Data for Data-Free Knowledge Distillation.",
    link: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12042032&width=1690",
    linkLabel: "Paper",
  },
  {
    date: "Jun 2024",
    text: "Joined KAIST Data AI Lab as a research intern, focusing on transfer learning for graph learning.",
  },
];

const publications = [
  {
    id: "[C.4]",
    title:
      "Socially-Aware User Representation Modeling Toward Parameter-Efficient Graph Collaborative Filtering",
    authors:
      "Doyun Choi, Cheonwoo Lee, Biniyam Aschalew Tolera, Taewook Ham, Chanyoung Park, Jaemin Yoo",
    venue: "The Web Conference (WWW), 2026",
    links: [{ label: "Paper", url: "https://arxiv.org/pdf/2601.14720" }],
  },
  {
    id: "[C.2]",
    title:
      "SelfReplay: Adapting Self-Supervised Sensory Models via Adaptive Meta-Task Replay",
    authors:
      "Hyungjun Yoon, Jaehyun Kwak, Biniyam Aschalew Tolera, Gaole Dai, Mo Li, Taesik Gong, Kimin Lee, Sung-Ju Lee",
    venue: "ACM SenSys, 2025",
    links: [{ label: "Paper", url: "https://arxiv.org/abs/2404.15305" }],
  },
  {
    id: "[C.1]",
    title:
      "By My Eyes: Grounding Multimodal Large Language Models with Sensor Data via Visual Prompting",
    authors:
      "Hyungjun Yoon, Biniyam Aschalew Tolera, Taesik Gong, Kimin Lee, Sung-Ju Lee",
    venue: "EMNLP, 2024",
    links: [{ label: "Paper", url: "https://arxiv.org/abs/2407.10385" }],
  },
  {
    id: "[C.3]",
    title: "Leveraging Synthetic Data for Data-Free Knowledge Distillation",
    authors:
      "Biniyam Aschalew Tolera, Bryan Nathanael Wijaya, Minhajur Rahman Chowdhury Mahim",
    venue: "Korean Software Conference (KSC), 2024",
    links: [
      {
        label: "Paper",
        url: "https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE12042032&width=1690",
      },
      { label: "Code", url: "https://github.com/BiniyamAschalew/KD570" },
    ],
  },
];

const quickFacts = [
  { label: "Advisor", value: "Prof. Jaemin Yoo" },
  { label: "Lab", value: "Data AI Lab, KAIST" },
  { label: "Research", value: "Transfer learning, graph ML, multimodal LLMs" },
  { label: "Background", value: "B.S. Computer Science, KAIST (2025)" },
];

function SocialIcon({ type }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 7.5A1.5 1.5 0 0 1 4.5 6h15A1.5 1.5 0 0 1 21 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-9Zm1.5 0L12 12.75 19.5 7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.72-4.04-1.42-4.04-1.42-.54-1.38-1.33-1.75-1.33-1.75-1.08-.75.09-.73.09-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.23v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .3"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.04c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
        />
      </svg>
    );
  }

  if (type === "scholar") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="m12 4.5 9 4.5-9 4.5L3 9l9-4.5ZM7.5 11.25v4.35c0 1.16 2.01 2.1 4.5 2.1s4.5-.94 4.5-2.1v-4.35"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 9v4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8.25 3h6l4.5 4.5v12A1.5 1.5 0 0 1 17.25 21h-10.5a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 6.75 3h1.5Zm6 0v4.5h4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 12.75h7.5M8.25 16.5h5.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SocialLink({ href, label, iconType }) {
  return (
    <a
      className="icon-link"
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      aria-label={label}
      title={label}
    >
      <SocialIcon type={iconType} />
    </a>
  );
}

function App() {
  return (
    <div className="site-shell">
      <nav className="tab-nav" aria-label="Page sections">
        <a href="#about" className="tab-link">
          About
        </a>
        <a href="#news" className="tab-link">
          News
        </a>
        <a href="#publications" className="tab-link">
          Publications
        </a>
      </nav>

      <main className="layout">
        <aside className="profile-column">
          <img
            src={profileImage}
            alt="Portrait of Biniyam Aschalew Tolera"
            className="profile-image"
          />

          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-title">{profile.title}</p>
          <p className="profile-location">{profile.location}</p>

          <div className="icon-row">
            <SocialLink href={profile.email} label="Email" iconType="email" />
            <SocialLink href={profile.github} label="GitHub" iconType="github" />
            <SocialLink
              href={profile.linkedin}
              label="LinkedIn"
              iconType="linkedin"
            />
            <SocialLink
              href={profile.scholar}
              label="Google Scholar"
              iconType="scholar"
            />
            <SocialLink href={profile.cv} label="CV" iconType="cv" />
          </div>
        </aside>

        <div className="content-column">
          <section id="about" className="panel">
            <h2 className="section-title">About</h2>
            <hr className="section-divider" />
            <p>
              I am currently an M.S. student in Electrical Engineering at KAIST
              and a researcher in the Data AI Lab, advised by Prof. Jaemin Yoo.
              My recent work spans transfer learning for graph representation
              learning, multimodal large language models for sensor data, and
              robust adaptation methods.
            </p>
            <p>
              I previously completed my B.S. in Computer Science at KAIST with
              Magna Cum Laude honors, and I have contributed to research projects
              that led to publications at EMNLP, SenSys, KSC, and WWW.
            </p>

            <div className="fact-grid">
              {quickFacts.map((item) => (
                <article className="fact-item" key={item.label}>
                  <p className="fact-label">{item.label}</p>
                  <p className="fact-value">{item.value}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="news" className="panel">
            <h2 className="section-title">News</h2>
            <hr className="section-divider" />
            <ul className="news-list">
              {newsItems.map((item) => (
                <li key={`${item.date}-${item.text}`} className="news-item">
                  <p className="news-date">{item.date}</p>
                  <div>
                    <p className="news-text">{item.text}</p>
                    {item.link ? (
                      <a
                        className="inline-link"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.linkLabel}
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="publications" className="panel">
            <h2 className="section-title">Publications</h2>
            <hr className="section-divider" />
            <div className="publication-list">
              {publications.map((paper) => (
                <article className="publication-card" key={paper.id + paper.title}>
                  <p className="publication-id">{paper.id}</p>
                  <h3 className="publication-title">{paper.title}</h3>
                  <p className="publication-authors">{paper.authors}</p>
                  <p className="publication-venue">{paper.venue}</p>
                  <div className="badge-links">
                    {paper.links.map((link) => (
                      <a
                        key={`${paper.id}-${link.label}`}
                        className="badge-link"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
