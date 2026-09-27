export const navLinks = [
  {
    path: "/",
    name: "About",
  },
  {
    path: "/experience",
    name: "Experience",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/hackathons",
    name: "Hacks",
  },
];

export const notableAchievements = [
  {
    title: "Smart India Hackathon",
    body: [
      { text: "National Winner at " },
      { text: "SIH 2023", bold: true },
      {
        text: " (Problem Statement SIH1386) — Rank 1 among 200+ teams for the problem statement, in my very first semester of college.",
      },
    ],
  },
  {
    title: "Hackathons",
    body: [
      { text: "Also placed in " },
      { text: "3 hackathons", bold: true, href: "/hackathons" },
      { text: " and competitions, including a finals spot at the " },
      { text: "Meta PyTorch OpenEnv Hackathon 2026", bold: true },
      { text: " (top 2,000 of 71,000+ entries)." },
    ],
  },
  {
    title: "Amazon ML Summer School",
    body: [
      { text: "Selected for " },
      { text: "Amazon ML Summer School 2024", bold: true },
      { text: ", placing in the " },
      { text: "top 3,000 out of 85,000+ applicants", bold: true },
      { text: "." },
    ],
  },
  {
    title: "Competitive programming",
    body: [
      { text: "Reached " },
      { text: "3-star on CodeChef", bold: true },
      { text: ", hit a " },
      { text: "1562 LeetCode contest rating", bold: true },
      { text: ", and landed in the " },
      { text: "top 5% of GSSOC Oct-Extended 2024", bold: true },
      { text: " for open-source contributions." },
    ],
    link: "https://codolio.com/profile/pavan_kumar2004",
    linkLabel: "Codolio",
  },
];

export const experiences = [
  {
    role: "Software Engineering Intern",
    year: "March 2025 - July 2025",
    company: "LeadBird.io",
    type: "Internship",
    responsibility: [
      [
        { text: "Developed " },
        { text: "Python automation solutions", bold: true },
        { text: " integrating external APIs, " },
        { text: "Airtable", bold: true },
        { text: ", and " },
        { text: "Smartlead", bold: true },
        { text: " for streamlined workflows." },
      ],
      [
        { text: "Built robust full-stack apps with " },
        { text: "Lovable.ai", bold: true },
        { text: " integrated with " },
        { text: "FastAPI", bold: true },
        { text: " backend APIs." },
      ],
      [
        { text: "Designed and implemented " },
        { text: "Zapier automation workflows", bold: true },
        {
          text: " connecting third-party apps including Smartlead, and optimized existing implementations for performance and scalability.",
        },
      ],
      [
        { text: "Implemented " },
        { text: "asynchronous programming methods", bold: true },
        { text: " to improve API efficiency." },
      ],
      [
        {
          text: "Actively supported Customer Success Managers (CSMs) by resolving technical queries and providing reliable solutions.",
        },
      ],
    ],
    techstacks: ["Python", "FastAPI", "Zapier", "Airtable", "Lovable.ai"],
  },
  {
    role: "AI Engineer",
    year: "July 2025 - Present",
    company: "Uprise Labs Private Limited",
    type: "Full-Time",
    responsibility: [
      [
        {
          text: "Contributing to AI-driven voice and video interview modules for ",
        },
        { text: "Gappeo.ai", bold: true },
        {
          text: ", an AI hiring platform, improving candidate evaluation processes.",
        },
      ],
      [
        { text: "Optimized voice interview workflows built on " },
        { text: "VAPI", bold: true },
        {
          text: " with dynamic assistant configuration, improving scalability.",
        },
      ],
      [
        { text: "Improved video interview evaluation accuracy from " },
        { text: "70% to 85%", bold: true },
        { text: " by implementing a QA-based pair evaluation system." },
      ],
      [
        { text: "Built an " },
        { text: "AI-driven proctoring system", bold: true },
        {
          text: " for technical assessments and video interviews that detects prohibited objects, multiple people, and head pose using ",
        },
        { text: "YOLO", bold: true },
        { text: " and Azure head-pose models." },
      ],
      [
        { text: "Implemented " },
        { text: "VAPI web calling", bold: true },
        {
          text: " with a queue system to handle concurrency voice call limits.",
        },
      ],
      [
        {
          text: "Developed multilingual voice assistants with strong performance and cost efficiency.",
        },
      ],
      [
        { text: "Improved video call performance with noise cancellation, tool calling, and voice activity detection — reducing " },
        { text: "latency by 40%", bold: true },
        { text: " and improving transcript quality by " },
        { text: "30%", bold: true },
        { text: " using " },
        { text: "AssemblyAI", bold: true },
        { text: "." },
      ],
      [
        { text: "Built " },
        { text: "AI agents for candidate smart search and job creation", bold: true },
        {
          text: " using prompt-driven workflows, achieving response times under 2 seconds.",
        },
      ],
      [
        {
          text: "Implemented an AI-assisted interview co-pilot that observes live conversations and recommends the next questions to recruiters in real time (",
        },
        { text: "<2s latency", bold: true },
        {
          text: "), integrated with interview scheduling and Google Calendar sync.",
        },
      ],
      [
        { text: "Developed a low-latency " },
        { text: "WebSocket-based real-time messaging system", bold: true },
        {
          text: " for recruiters and candidates — messages, file sharing, live notifications, and online/offline presence — unifying external and internal chat workflows.",
        },
      ],
      [
        { text: "Built a " },
        { text: "dynamic AI voice interview agent", bold: true },
        {
          text: " that adapts questions based on candidate responses and recruiter-defined rules, with tool calling for call termination, email notifications, and custom recruiter actions.",
        },
      ],
    ],
    techstacks: ["Python", "FastAPI", "AI Agents", "LiveKit", "VAPI", "WebRTC"],
  },
];

export const projects = [
  {
    title: "Lens Voice Shop",
    category: "Project · Voice AI",
    description:
      "A multi-agent LiveKit voice shopper (orchestrator, search, details, cart) with sub-1s agent handoffs. Wired STT→LLM→TTS (AssemblyAI, OpenAI, Cartesia) with real-time UI sync over LiveKit RPC, plus guardrails for scope, stock, and Rx validation to keep voice cart flows safe and on-domain.",
    techstacks: ["Python", "LiveKit", "OpenAI", "WebRTC"],
    status: "active",
    link: undefined,
    github: undefined,
  },
  {
    title: "Insubot",
    category: "Project · AI Chatbot",
    description:
      "A Retrieval-Augmented Generation (RAG) chatbot using Mistral-7B, FAISS, and hybrid retrieval to answer queries from complex insurance policy documents with 80%+ contextual accuracy. Built the ingestion pipeline (PDF parsing, semantic chunking, embeddings, FAISS indexing) with Zephyr-7B for structured extraction, and a Streamlit UI for real-time QA, document upload, and knowledge-base enrichment.",
    techstacks: ["Python", "RAG", "Streamlit", "FAISS"],
    status: "active",
    link: "https://github.com/Pavan8421/tcs-hack",
    github: "Pavan8421/tcs-hack",
  },
  {
    title: "LMC",
    category: "Project · Chrome Extension",
    description:
      "A Chrome extension that classifies unread LinkedIn messages into categories like referrals and networking. Started with a Google Gemini-based version, then fine-tuned a Google Gemma model on a 5k-row synthetic dataset to improve classification accuracy.",
    techstacks: ["Python", "Django", "Hugging Face"],
    status: "active",
    link: "https://github.com/Pavan8421/Linkedin-Message-Classifier",
    github: "Pavan8421/Linkedin-Message-Classifier",
  },
  {
    title: "Titan",
    category: "Project · Web App",
    description:
      "A web app that dubs videos from English into Indian regional languages. Upload an .mp4 file or paste a YouTube link, and a 6-step pipeline automatically detects speaker count and gender to generate matching voices, reaching 75% accuracy.",
    techstacks: ["Python", "Flask", "PicoVoice", "gTTS"],
    status: "active",
    link: "https://github.com/Pavan8421/titan-v5",
    github: "Pavan8421/titan-v5",
  },
];

export const hackathons = [
  {
    title: "Smart India Hackathon",
    event: "SIH 2023 (PS: SIH1386)",
    year: "2023",
    placement: "National Winner",
    body: [
      { text: "Won as a " },
      { text: "National Winner at Smart India Hackathon 2023", bold: true },
      {
        text: " (Rank 1 among 200+ teams for the problem statement), competing in my very first semester of college and building a working solution to a government-issued problem statement.",
      },
    ],
    techstacks: [],
    proofImage: "/sih.jpg",
    proofCaption: "SIH 2023 Grand Finale · National Winner · Team Tech Tritons",
  },
  {
    title: "Meta PyTorch OpenEnv Hackathon",
    event: "Meta PyTorch OpenEnv Hackathon",
    year: "2026",
    placement: "Finalist",
    body: [
      { text: "Made the " },
      { text: "finals", bold: true },
      { text: ", placing in the " },
      { text: "top 2,000 out of 71,000+ entries", bold: true },
      { text: " while building on Meta's PyTorch OpenEnv framework." },
    ],
    techstacks: ["Python"],
  },
  {
    title: "Cook the Code",
    event: "Competitive Coding Competition",
    year: "2024",
    placement: "6th Place",
    body: [
      { text: "Secured " },
      { text: "6th place", bold: true },
      { text: " in the \"Cook the Code\" competitive coding competition." },
    ],
    techstacks: [],
  },
];

export const research = [];
