export type ProjectCategory =
  | "ALL"
  | "AI / MACHINE LEARNING"
  | "GENERATIVE AI"
  | "NLP"
  | "COMPUTER VISION"
  | "DATA SCIENCE / ANALYTICS"
  | "FULL STACK AI"
  | "AUTOMATION / ROBOTICS";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  additionalCategories?: ProjectCategory[];
  date: string;
  technologies: string[];
  description: string; // Concise one-line description for initial card
  problem: string;
  solution: string;
  approach: string; // AI/ML approach
  keyFeatures: string[];
  aiModel: string;
  implementation: string;
  result: string;
  learning: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  sihTheme?: string;
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  isFeatured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  coursework?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  department?: string;
  support?: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  type: "certification" | "internship" | "participation";
}

export interface TechSkill {
  name: string;
  category:
  | "PROGRAMMING"
  | "AI / MACHINE LEARNING"
  | "DEEP LEARNING"
  | "NLP / GENERATIVE AI"
  | "DATA SCIENCE"
  | "DATABASES"
  | "WEB / BACKEND"
  | "TOOLS / DEVOPS";
  description: string;
  projectsUsing: string[];
  level?: string;
}

export interface HeadingNote {
  title: string;
  point1: string;
  point2: string;
}

export const portfolioData = {
  identity: {
    name: "Arpit Singh",
    firstName: "ARPIT",
    lastName: "SINGH",
    headline: "AI/ML Developer | B.Tech Artificial Intelligence Student",
    location: "Bareilly, Uttar Pradesh",
    introduction:
      "I build AI-powered applications that connect machine learning, natural language processing, and data analytics with practical user needs. Currently pursuing a B.Tech in Artificial Intelligence at Invertis University, I enjoy turning ideas into intelligent, usable products.",
    portrait: "/images/arpit_portrait.jpg",
    alt: "Portrait of Arpit Singh, AI/ML Developer and B.Tech Artificial Intelligence student.",
    resumeUrl: "/Arpit_Singh_Resume.pdf",
    githubUrl: "https://github.com/abhirajsingh524",
    linkedinUrl: "https://linkedin.com/in/arpitsinghii",
    email: import.meta.env.VITE_CONTACT_EMAIL || "thakurarpitsingh524@gmail.com",
    phone: import.meta.env.VITE_CONTACT_PHONE || "+91 7307653965",
    initials: "AS",
  },

  about: {
    title: "ABOUT ME",
    mainText:
      "B.Tech in Artificial Intelligence student at Invertis University (2023–2027), maintaining a 9.3/10 CGPA.",
    secondParagraph:
      "I’m an early-career AI/ML developer focused on building and integrating machine learning models, NLP pipelines, Generative AI solutions, and data-driven applications into practical software products.",
    strengths: [
      "Problem Solving",
      "Analytical Thinking",
      "Teamwork",
      "Leadership",
      "Time Management",
    ],
    interests: [
      "Predictive Modeling",
      "Generative AI & LLMs",
      "Natural Language Processing",
      "Data-Driven Applications",
      "Computer Vision",
    ],
  },

  headingExplanations: {
    "ABOUT ME": {
      title: "ABOUT ME",
      point1: "B.Tech in Artificial Intelligence student at Invertis University (2023–2027) with a 9.3/10 CGPA.",
      point2: "Connecting machine learning, NLP pipelines, and data analytics with practical, production-ready software.",
    },
    "TECH STACK": {
      title: "TECH STACK",
      point1: "Structured full-stack AI toolchain organized across 8 disciplines from deep learning to deployment.",
      point2: "Features an interactive 5-second algorithmic visualizer demonstrating 5 sorting routines and binary search.",
    },
    "MACHINE LEARNING": {
      title: "MACHINE LEARNING",
      point1: "Build predictive models using structured and real-world datasets with rigorous evaluation.",
      point2: "Focus on preprocessing, feature engineering, cross-validation, and production inference deployment.",
    },
    "GENERATIVE AI": {
      title: "GENERATIVE AI",
      point1: "Design contextual LLM applications, RAG architectures, and semantic vector retrieval pipelines.",
      point2: "Specialize in prompt engineering, FAISS vector indexing, and grounding responses with source citations.",
    },
    "NLP": {
      title: "NATURAL LANGUAGE PROCESSING",
      point1: "Text preprocessing, acoustic speech processing, tokenization, and intent classification pipelines.",
      point2: "Applied across semantic search engines, conversational assistants, and multilingual translation tools.",
    },
    "COMPUTER VISION": {
      title: "COMPUTER VISION",
      point1: "Convolutional Neural Networks and OpenCV for real-time visual detection and multi-class classification.",
      point2: "Demonstrated through intelligent traffic vehicle tracking and agricultural crop disease diagnosis.",
    },
    "DATA SCIENCE": {
      title: "DATA SCIENCE & ANALYTICS",
      point1: "End-to-end exploratory data analysis, statistical modeling, and data transformation with Pandas & NumPy.",
      point2: "Transforming high-dimensional datasets into actionable predictive foresight and executive KPI dashboards.",
    },
    "FEATURED PROJECTS": {
      title: "FEATURED AI PROJECTS",
      point1: "Flagship technical implementations solving concrete security, financial, and semantic search challenges.",
      point2: "Demonstrates advanced architectures including voice anti-spoofing, offline-first OCR, and RAG retrieval.",
    },
    "ALL PROJECTS": {
      title: "EXPLORE ALL PROJECTS",
      point1: "Comprehensive portfolio library spanning computer vision, robotics, healthcare, and predictive ML.",
      point2: "Filterable by technical domain with complete architectural breakdowns, code repositories, and demos.",
    },
    "EDUCATION": {
      title: "EDUCATION",
      point1: "Strong theoretical and practical foundation in Data Structures, AI, Machine Learning, and Algorithms at Invertis.",
      point2: "Consistent academic excellence with a 9.3/10 CGPA and 200+ solved algorithmic problems.",
    },
    "EXPERIENCE": {
      title: "EXPERIENCE",
      point1: "Hands-on industry and virtual internship experience engineering ML pipelines and prompt workflows.",
      point2: "Collaborating cross-functionally to translate real-world business needs into functional AI-powered features.",
    },
    "ACHIEVEMENTS": {
      title: "ACHIEVEMENTS",
      point1: "Demonstrated problem-solving track record across algorithmic challenges, robotics, and academic honors.",
      point2: "Industry-recognized technical certifications from Microsoft, IBM, AWS Educate, and IEEE.",
    },
    "CONTACT": {
      title: "CONTACT",
      point1: "Open to AI/ML engineering opportunities, internships, research collaborations, and technical discussions.",
      point2: "Direct channels via email, phone, LinkedIn, and GitHub with fast turnaround.",
    },
  } as Record<string, HeadingNote>,

  education: [
    {
      degree: "B.Tech — Artificial Intelligence",
      institution: "Invertis University",
      location: "Bareilly, Uttar Pradesh",
      period: "2023–2027",
      score: "CGPA: 9.3/10",
      coursework: [
        "Data Structures",
        "Algorithms Analysis",
        "Database Management",
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Data Analytics",
        "Compiler Design",
      ],
    },
    {
      degree: "Senior Secondary — Class XII",
      institution: "Fertilizer Public School",
      location: "Shahjahanpur, Uttar Pradesh",
      period: "2023",
      score: "70%",
    },
    {
      degree: "Secondary — Class X",
      institution: "Dr. G. L. Kanaujia Public School",
      location: "Shahjahanpur, Uttar Pradesh",
      period: "2021",
      score: "87%",
    },
  ] as EducationItem[],

  experience: [
    {
      role: "Technical Associate — Data Science / AI-ML Intern",
      company: "TechiGuru",
      location: "Noida, Uttar Pradesh",
      period: "April 2026–August 2026",
      highlights: [
        "Contributed to AI/ML models and intelligent application features.",
        "Connected model capabilities with application layers and external interfaces.",
        "Refined prompts, evaluated responses, and tuned model parameters.",
        "Collaborated with developers to translate requirements into AI-powered tools.",
        "Helped select suitable models and implementation approaches for project requirements.",
      ],
    },
    {
      role: "AI-ML Virtual Intern",
      company: "AICTE / EduSkills",
      support: "Supported by Google for Developers",
      location: "Remote",
      period: "October 2025–December 2025",
      highlights: [
        "Completed a 10-week virtual internship focused on practical AI/ML.",
        "Practiced machine learning techniques, model workflows, and validation.",
        "Used Git for collaborative development and version control.",
      ],
    },
  ] as ExperienceItem[],

  // 15 Comprehensive AI/ML Projects (Preserved + New Strong Projects)
  projects: [
    // 1. AEGIS — FLAGSHIP FEATURED PROJECT
    {
      id: "aegis",
      title: "AEGIS",
      subtitle: "Real-Time Voice Cloning Impersonation Detection",
      category: "AI / MACHINE LEARNING",
      additionalCategories: ["NLP"],
      date: "February 2026",
      technologies: [
        "Python",
        "FastAPI",
        "PyTorch",
        "Librosa",
        "SpeechBrain",
        "WebSocket",
        "MongoDB",
        "Redis",
      ],
      description:
        "AI-powered cybersecurity system detecting synthetic voice-cloning and speaker impersonation attacks in real-time.",
      problem:
        "Generative deepfake audio and voice cloning APIs have made voice-based authentication and phone banking vulnerable to unauthorized impersonation fraud.",
      solution:
        "Engineered an end-to-end biometric acoustic verification pipeline that analyzes live or uploaded audio streams to detect synthetic artifacts and voice mismatch.",
      approach:
        "Extract MFCCs and mel-spectrogram features; generate d-vector speaker embeddings using a pre-trained SpeechBrain encoder; compute cosine similarity thresholds and anomalous frequency distributions.",
      keyFeatures: [
        "Real-time WebSocket audio streaming inference.",
        "MFCC and mel-spectrogram spectral anomaly detection.",
        "Speaker verification against enrolled voiceprints.",
        "Voice similarity scoring with confidence thresholding.",
        "Low-latency audio chunk processing pipeline.",
        "Detection history and audit logging in MongoDB.",
      ],
      aiModel: "SpeechBrain X-Vector Speaker Embeddings + Spectrogram CNN Classifier",
      implementation:
        "Audio chunks received via WebSocket are normalized through Librosa, converted to spectral tensors, passed to an inference worker pool, and compared against reference voice embeddings with Redis session caching.",
      result:
        "Achieved responsive sub-250ms verification latency on streaming audio chunks in experimental test runs.",
      learning:
        "Mastered acoustic feature extraction, spectrogram signal processing, deep speaker embedding spaces, and asynchronous inference pipelines.",
      difficulty: "Advanced",
      sihTheme: "Cybersecurity & Crime Prevention (SIH-Inspired)",
      image: "/images/aegis_ai.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: true,
    },

    // 2. Trackilo — FEATURED PROJECT
    {
      id: "trackilo",
      title: "Trackilo",
      subtitle: "AI-Powered Smart Expense Tracker & Financial Copilot",
      category: "FULL STACK AI",
      additionalCategories: ["AI / MACHINE LEARNING", "NLP"],
      date: "January 2026",
      technologies: [
        "Python",
        "FastAPI",
        "Machine Learning",
        "NLP",
        "OCR",
        "Forecasting",
        "React Native",
        "MongoDB",
      ],
      description:
        "Intelligent expense tracking mobile platform featuring receipt OCR, dual-language voice entry, and predictive spending forecasting.",
      problem:
        "Manual expense logging is tedious and error-prone, causing students and young professionals to lack visibility into upcoming spending overruns.",
      solution:
        "Developed a mobile-first intelligent finance copilot combining optical character recognition for paper receipts with bilingual voice logging and predictive forecasting.",
      approach:
        "Combines Tesseract OCR bounding box parsing, NLP intent and entity extraction for Hindi/English voice commands, and ARIMA/regression models for monthly expense trend prediction.",
      keyFeatures: [
        "AI Financial Copilot with automated category classification.",
        "Predictive expense forecasting to prevent budget overruns.",
        "Receipt OCR engine extracting vendor, date, and line totals.",
        "Hindi and English voice expense input with NLP parsing.",
        "Financial health index and personalized savings tips.",
        "Privacy-first offline-first architecture with local cache.",
      ],
      aiModel: "Tesseract OCR + Transformer Intent Extraction + Time-Series Regression",
      implementation:
        "React Native client records voice or camera snaps; FastAPI backend processes audio and images, returns structured transaction objects, and updates predictive trend models.",
      result:
        "Built a complete end-to-end working prototype with receipt scanning, dual-lingual logging, and interactive financial health metrics.",
      learning:
        "Integrated computer vision OCR with natural language voice processing and predictive time-series modeling into a cohesive mobile system.",
      difficulty: "Advanced",
      sihTheme: "Smart Automation & FinTech (SIH-Inspired)",
      image: "/images/trackilo.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: true,
    },

    // 3. DocMind AI — FEATURED PROJECT
    {
      id: "docmind-ai",
      title: "DocMind AI",
      subtitle: "Intelligent Document Q&A & Semantic RAG Assistant",
      category: "GENERATIVE AI",
      additionalCategories: ["NLP"],
      date: "November 2025",
      technologies: [
        "Python",
        "FastAPI",
        "Embeddings",
        "FAISS",
        "LLM",
        "RAG",
        "React",
      ],
      description:
        "Upload complex documents and ask contextual questions powered by dense vector retrieval and grounded LLM synthesis.",
      problem:
        "Locating precise technical facts and answers across lengthy multi-page PDFs, manuals, and reports is slow and difficult for students and professionals.",
      solution:
        "Built a Retrieval-Augmented Generation (RAG) assistant that indexes uploaded documents into dense vector space and generates accurate, cited answers.",
      approach:
        "Recursive text chunking with overlap; generates vector embeddings using sentence-transformers; performs similarity search via FAISS index; injects retrieved context chunks into LLM prompt with strict grounding constraints.",
      keyFeatures: [
        "Multi-format document ingestion (PDF, DOCX, TXT).",
        "Semantic chunking preserving contextual paragraphs.",
        "Sub-millisecond cosine similarity search with FAISS index.",
        "Contextual LLM answers with highlighted source citations.",
        "Strict anti-hallucination prompt boundaries.",
        "Interactive conversational UI with document preview.",
      ],
      aiModel: "Sentence-Transformers (all-MiniLM-L6-v2) + FAISS Vector Index + LLM",
      implementation:
        "FastAPI pipeline parses uploaded files, writes embeddings to a FAISS index, and handles conversational retrieval queries that synthesize grounded responses in React.",
      result:
        "Enables instant document interrogation with verified source references, eliminating manual skimming of multi-page technical texts.",
      learning:
        "Deepened practical understanding of RAG architectures, chunking strategies, vector search trade-offs, and prompt grounding techniques.",
      difficulty: "Medium",
      sihTheme: "Smart Education & Enterprise Knowledge (SIH-Inspired)",
      image: "/images/docmind_ai.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: true,
    },

    // 4. Sonar AI — FEATURED PROJECT
    {
      id: "sonar-ai",
      title: "Sonar AI",
      subtitle: "Intelligent Search & Semantic Understanding Engine",
      category: "GENERATIVE AI",
      additionalCategories: ["NLP"],
      date: "October 2025",
      technologies: [
        "Python",
        "NLP",
        "LLMs",
        "Embeddings",
        "Semantic Search",
        "FAISS",
      ],
      description:
        "Conversational search and semantic knowledge retrieval engine delivering contextual answers beyond keyword lookup.",
      problem:
        "Standard keyword search fails when queries use synonyms, conceptual phrasing, or indirect descriptions without exact term matches.",
      solution:
        "Created an intelligent search system that maps queries and documents into continuous latent space to understand semantic meaning and intent.",
      approach:
        "Employs dense vector embeddings and approximate nearest neighbor search to capture semantic intent, followed by conversational response synthesis.",
      keyFeatures: [
        "Semantic intent classification beyond lexical keyword matching.",
        "Vector search engine utilizing FAISS high-speed indexing.",
        "Dynamic query re-ranking based on cosine similarity scores.",
        "Conversational memory buffer maintaining multi-turn context.",
        "Structured summary generation from retrieved knowledge snippets.",
      ],
      aiModel: "Dense Vector Embeddings + FAISS Approximate Nearest Neighbors + LLM",
      implementation:
        "Built modular Python services for corpus ingestion, dense embedding computation, vector index maintenance, and query synthesis.",
      result:
        "Delivered a semantic search engine capable of answering technical questions with superior relevance compared to lexical keyword matching.",
      learning:
        "Gained mastery in vector spaces, embedding dimensionality, semantic similarity metrics, and LLM orchestration.",
      difficulty: "Advanced",
      image: "/images/sonar_ai.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: true,
    },

    // 5. PhishGuard AI — FEATURED PROJECT
    {
      id: "phishguard-ai",
      title: "PhishGuard AI",
      subtitle: "Intelligent Phishing & Malicious URL Detection",
      category: "AI / MACHINE LEARNING",
      additionalCategories: ["NLP"],
      date: "August 2025",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NLP",
        "FastAPI",
      ],
      description:
        "Machine learning classifier identifying phishing URLs and fraudulent emails using lexical feature engineering and explainable risk scores.",
      problem:
        "Phishing attacks increasingly deceive traditional blacklists through zero-day domains, homoglyphs, and obfuscated redirection paths.",
      solution:
        "Engineered an automated classification model that evaluates lexical URL attributes, domain entropy, and text indicators to detect fraud in real-time.",
      approach:
        "Engineered 24 lexical and structural features (URL length, Shannon entropy, sub-domain depth, suspicious token frequency); trained Random Forest and Logistic Regression models.",
      keyFeatures: [
        "Real-time URL lexical feature extraction and parsing.",
        "Continuous risk scoring from 0% (Safe) to 100% (Phishing).",
        "Transparent explanation of suspicious indicators triggered.",
        "Email header and text keyword heuristic verification.",
        "Lightweight FastAPI endpoint for browser-extension integration.",
      ],
      aiModel: "Random Forest Classifier + Heuristic Feature Extraction Engine",
      implementation:
        "Python backend parses target URLs with regular expressions, computes mathematical entropy, passes feature vectors to Scikit-learn, and returns classified risk scores.",
      result:
        "Demonstrated a lightweight, explainable cybersecurity tool capable of spotting fraudulent URLs without relying on static external blacklists.",
      learning:
        "Understood tabular feature engineering, classification metrics (ROC-AUC, Precision, Recall), and explainable model outputs.",
      difficulty: "Easy",
      sihTheme: "Cybersecurity & Cyber Fraud Prevention (SIH-Inspired)",
      image: "/images/phishguard_ai.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: true,
    },

    // 6. Vehicle Detection System — FEATURED PROJECT
    {
      id: "vehicle-detection",
      title: "Vehicle Detection System",
      subtitle: "Real-Time Traffic Video Analysis & Tracking",
      category: "COMPUTER VISION",
      additionalCategories: ["AI / MACHINE LEARNING"],
      date: "July 2025",
      technologies: [
        "Python",
        "TensorFlow",
        "CNN",
        "Computer Vision",
        "OpenCV",
      ],
      description:
        "Computer vision pipeline for detecting, classifying, and tracking vehicles in surveillance footage for intelligent traffic management.",
      problem:
        "Urban traffic monitoring systems require automated, real-time vehicle counting and congestion analysis without expensive specialized sensors.",
      solution:
        "Implemented a deep-learning computer vision system that detects moving vehicles across video frames, draws bounding boxes, and tallies traffic volume.",
      approach:
        "Combines OpenCV frame extraction, background subtraction, and a Convolutional Neural Network (CNN) trained to identify vehicle categories with bounding-box regression.",
      keyFeatures: [
        "Video frame acquisition and color-space normalization.",
        "Convolutional object detection and bounding box localization.",
        "Multi-class vehicle classification (Cars, Trucks, Buses, Two-wheelers).",
        "Centroid-based tracking across consecutive video frames.",
        "Traffic density estimation and flow rate metrics.",
      ],
      aiModel: "Custom CNN Architecture + OpenCV Frame Tracking",
      implementation:
        "OpenCV reads video streams and passes preprocessed bounding candidate patches to the TensorFlow model; valid detections are tracked and logged.",
      result:
        "Successfully tracked vehicles across daylight and dusk traffic recordings with clear visual bounding boxes and stable vehicle counts.",
      learning:
        "Hands-on experience in computer vision architectures, spatial feature maps, frame-rate optimization, and video object tracking.",
      difficulty: "Medium",
      sihTheme: "Smart Vehicles & Traffic Automation (SIH-Inspired)",
      image: "/images/vehicle_detection.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: true,
    },

    // 7. Smart Learning Management System
    {
      id: "smart-lms",
      title: "Smart Learning Management System",
      subtitle: "AI-Assisted Adaptive Education Platform",
      category: "AI / MACHINE LEARNING",
      additionalCategories: ["FULL STACK AI"],
      date: "December 2025",
      technologies: [
        "Python",
        "Machine Learning",
        "NLP",
        "Data Analytics",
        "Dashboard",
      ],
      description:
        "Adaptive educational platform integrating predictive student analytics, course recommendations, and conversational student tutoring.",
      problem:
        "Traditional LMS platforms treat every student identically, failing to identify learning difficulties early or provide personalized assistance.",
      solution:
        "Created an adaptive learning portal with automated performance prediction, personalized curriculum recommendations, and a conversational student assistant.",
      approach:
        "Aggregates student quiz scores, participation time, and assignment completion into an ML feature pipeline that predicts risk of falling behind.",
      keyFeatures: [
        "Personalized course and resource recommendations.",
        "Predictive analysis of student performance and learning patterns.",
        "Interactive analytics dashboards for instructors and students.",
        "NLP conversational assistant for homework guidance.",
        "Real-time progress tracking with milestone indicators.",
      ],
      aiModel: "Supervised Classification (Student Risk) + Collaborative Filtering Recommendations",
      implementation:
        "Full-stack web application featuring student dashboards, instructor analytics panels, and automated recommendation engines deployed on Render.",
      result:
        "Successfully deployed and demonstrated live with comprehensive student workflows, performance graphs, and AI tutoring support.",
      learning:
        "Designed full-stack application data flows, end-to-end cloud deployment, and educational data modeling.",
      difficulty: "Medium",
      sihTheme: "Smart Education (SIH-Inspired)",
      image: "/images/smart_lms.svg",
      demoUrl: "https://smart-learning-management-system.onrender.com",
      repoUrl: "https://github.com/abhirajsingh524/Smart_learning_management_system",
      isFeatured: false,
    },

    // 8. Retail Sales Analytics & Prediction
    {
      id: "retail-sales-analytics",
      title: "Retail Sales Analytics & Prediction",
      subtitle: "Large-Scale Sales EDA & Predictive Forecasting",
      category: "DATA SCIENCE / ANALYTICS",
      additionalCategories: ["AI / MACHINE LEARNING"],
      date: "August 2025",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Machine Learning",
        "Tableau",
      ],
      description:
        "Comprehensive retail dataset analysis, customer segmentation, and predictive sales forecasting integrated with an executive dashboard.",
      problem:
        "Retail managers struggle to forecast seasonal inventory demands and pinpoint underperforming store locations using raw transaction logs.",
      solution:
        "Conducted deep exploratory data analysis on multi-store retail transaction records and trained regression models to forecast weekly sales revenue.",
      approach:
        "Cleaned missing records, handled holiday outliers, applied one-hot encoding, extracted rolling mean trends, and evaluated Random Forest & Linear Regression models.",
      keyFeatures: [
        "Large-scale sales dataset cleaning and statistical transformation.",
        "Feature engineering including holiday flags and promotional markdowns.",
        "Predictive weekly sales forecasting with Scikit-learn regression models.",
        "Store-level performance comparisons and product category lift metrics.",
        "Interactive Tableau business dashboard with drill-down filters.",
      ],
      aiModel: "Random Forest Regressor + Ridge Regression + Time-Series Decomposition",
      implementation:
        "Python scripts execute the ETL data pipeline and model validation in Jupyter; summarized KPIs and forecasts are published to an interactive Tableau dashboard.",
      result:
        "Uncovered key promotional drivers behind holiday sales spikes and achieved an R² score of 0.89 on test store prediction sets.",
      learning:
        "Practiced rigorous exploratory data analysis, feature engineering, regression evaluation (RMSE, MAE, R²), and executive storytelling.",
      difficulty: "Medium",
      sihTheme: "Data-Driven Public & Commercial Services (SIH-Inspired)",
      image: "/images/retail_sales.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: false,
    },

    // 9. ResumeAI — Intelligent Resume Analyzer
    {
      id: "resume-ai",
      title: "ResumeAI",
      subtitle: "Intelligent Resume Analyzer & Job Fit Matcher",
      category: "GENERATIVE AI",
      additionalCategories: ["NLP", "DATA SCIENCE / ANALYTICS"],
      date: "January 2026",
      technologies: [
        "Python",
        "NLP",
        "Embeddings",
        "LLM",
        "FastAPI",
        "React",
      ],
      description:
        "Automated resume parser matching candidate profiles against job descriptions to identify missing skills and provide actionable improvements.",
      problem:
        "Job seekers struggle to understand why their resumes fail ATS screenings or how well their background aligns with target job descriptions.",
      solution:
        "Developed an intelligent tool that parses resumes, extracts technical skills, calculates semantic job-fit similarity, and suggests specific keyword improvements.",
      approach:
        "Extracts raw text from PDF/DOCX resumes; uses NLP regex and entity recognition to segment skills, experience, and education; computes cosine similarity against job descriptions; generates gap suggestions with an LLM.",
      keyFeatures: [
        "PDF and DOCX resume text extraction and structure parsing.",
        "Automated technical and soft skill entity extraction.",
        "Job description semantic similarity scoring (0–100%).",
        "Missing skill gap identification with priority flags.",
        "Actionable bullet-point enhancement recommendations.",
      ],
      aiModel: "NLP Entity Extraction + Sentence-Transformers Cosine Similarity + LLM Advisory",
      implementation:
        "FastAPI service parses incoming files, computes similarity against user-pasted job descriptions, and renders an interactive gap scorecard in React.",
      result:
        "Provides clear visual feedback on missing keywords and concrete recommendations in under 3 seconds per resume analyzed.",
      learning:
        "Implemented text extraction pipelines, entity segmentation, similarity metrics, and clean interview-explainable UI workflows.",
      difficulty: "Easy",
      image: "/images/resume_ai.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: false,
    },

    // 10. AgriVision AI — Crop Disease Detection
    {
      id: "agrivision-ai",
      title: "AgriVision AI",
      subtitle: "Crop Disease Detection & Prevention Advisory",
      category: "COMPUTER VISION",
      additionalCategories: ["AI / MACHINE LEARNING"],
      date: "September 2025",
      technologies: [
        "Python",
        "TensorFlow/PyTorch",
        "CNN",
        "OpenCV",
      ],
      description:
        "Computer vision image classification tool that detects crop foliage diseases from photos and provides basic advisory tips.",
      problem:
        "Smallholder farmers often struggle to diagnose foliar plant diseases early, leading to avoidable crop yield losses.",
      solution:
        "Created an accessible visual diagnostic model that classifies plant leaf anomalies from uploaded images and provides non-certified preventive recommendations.",
      approach:
        "Image resizing and data augmentation (rotations, flips, zoom) followed by transfer learning with a Convolutional Neural Network trained on plant pathology datasets.",
      keyFeatures: [
        "Single-image crop leaf upload with automatic preprocessing.",
        "Multi-class disease classification across common staple crops.",
        "Confidence percentage score for top diagnostic predictions.",
        "Basic educational treatment and prevention guideline display.",
        "Lightweight model footprint suitable for edge mobile deployment.",
      ],
      aiModel: "Convolutional Neural Network (CNN / MobileNet backbone)",
      implementation:
        "OpenCV normalizes input leaf photos into uniform tensors; the PyTorch CNN evaluates visual symptoms and returns the diagnosed condition with confidence.",
      result:
        "Accurately differentiated between healthy leaves, early blight, and leaf spots across hundreds of experimental evaluation images.",
      learning:
        "Deepened knowledge of data augmentation, transfer learning, confusion matrices, and responsible presentation of student AI tools.",
      difficulty: "Medium",
      sihTheme: "Agriculture & Smart Farming (SIH-Inspired)",
      image: "/images/agrivision_ai.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: false,
    },

    // 11. ChurnSense AI — Customer Churn Prediction
    {
      id: "churnsense-ai",
      title: "ChurnSense AI",
      subtitle: "Customer Churn Prediction & Retention Analytics",
      category: "DATA SCIENCE / ANALYTICS",
      additionalCategories: ["AI / MACHINE LEARNING"],
      date: "May 2025",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "XGBoost",
        "React/Tableau",
      ],
      description:
        "Predictive customer churn analysis modeling behavioral usage patterns to estimate retention risks and recommend targeted interventions.",
      problem:
        "Subscription services experience silent revenue attrition when customers discontinue services without advance notice.",
      solution:
        "Built a predictive supervised machine learning pipeline that flags high-risk accounts and pinpoints the most influential churn triggers.",
      approach:
        "Exploratory analysis of customer tenure, billing preferences, and support call volume; applied SMOTE for class balancing; trained XGBoost and Logistic Regression models.",
      keyFeatures: [
        "Customer behavioral data preprocessing and categorical encoding.",
        "Imbalanced dataset handling using SMOTE techniques.",
        "Churn probability risk scoring (Low, Medium, High).",
        "Feature importance breakdown highlighting top churn factors.",
        "Interactive dashboard displaying cohort retention metrics.",
      ],
      aiModel: "XGBoost Classifier + Scikit-learn Pipeline",
      implementation:
        "Python scripts execute data transformations and train models with cross-validation; outputs feed an interactive scorecard illustrating account risks.",
      result:
        "Achieved an AUC-ROC of 0.86 on holdout test partitions, isolating contract duration and tenure as the primary churn determinants.",
      learning:
        "Mastered imbalanced classification handling, ROC curves, feature importance extraction, and business-focused ML explanation.",
      difficulty: "Easy",
      image: "/images/churnsense_ai.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: false,
    },

    // 12. Multilingual Translation Assistant
    {
      id: "multilingual-translation",
      title: "Multilingual Translation Assistant",
      subtitle: "Cross-Lingual NLP & Speech Translation",
      category: "NLP",
      additionalCategories: ["AI / MACHINE LEARNING"],
      date: "November 2024",
      technologies: [
        "Python",
        "NLP",
        "Speech Processing",
        "Machine Learning",
      ],
      description:
        "Language translation tool converting spoken and written text between English and Indian regional languages with speech synthesis.",
      problem:
        "Language barriers hinder digital access for non-English speakers seeking public services, educational resources, and technical support.",
      solution:
        "Built a modular translation assistant supporting acoustic speech-to-text tokenization, neural translation, and text-to-speech audio playback.",
      approach:
        "Sequence-to-sequence neural translation pipeline integrated with speech recognition libraries for bilingual voice and text translation.",
      keyFeatures: [
        "Bidirectional English to Hindi / regional translation.",
        "Acoustic speech recognition for voice input.",
        "Low-latency text translation inference.",
        "Text-to-speech audio feedback for translated phrases.",
        "Simple clean user interface for everyday conversation.",
      ],
      aiModel: "Seq2Seq Neural Machine Translation + Acoustic STT Processing",
      implementation:
        "Speech input is converted to text tokens, passed through a translation model, and synthesized back into spoken audio using speech engines.",
      result:
        "Successfully translated conversational sentences between English and Hindi with natural audio pronunciation and low latency.",
      learning:
        "Learned sequence-to-sequence modeling, attention mechanisms, phoneme alignment, and speech synthesis workflows.",
      difficulty: "Medium",
      image: "/images/translation_assistant.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: false,
    },

    // 13. AI Chatbot
    {
      id: "ai-chatbot",
      title: "AI Chatbot",
      subtitle: "Conversational Intent & Dialogue Agent",
      category: "GENERATIVE AI",
      additionalCategories: ["NLP"],
      date: "October 2024",
      technologies: [
        "Python",
        "NLP",
        "LLM/AI",
      ],
      description:
        "Interactive conversational agent capable of classifying user intents, answering domain queries, and retaining multi-turn context.",
      problem:
        "Traditional rule-based FAQ bots fail when users express intents using diverse phrasing or follow up with ambiguous context.",
      solution:
        "Engineered an NLP-driven chatbot combining intent classification with dynamic conversational context handling and generative fallbacks.",
      approach:
        "Tokenization, stopword removal, lemmatization, and TF-IDF / embedding matching to identify query intent and synthesize accurate answers.",
      keyFeatures: [
        "Robust intent recognition across diverse conversational phrasing.",
        "Contextual dialogue memory across multiple conversational turns.",
        "Structured knowledge base lookups for common user queries.",
        "Graceful fallback handling for unfamiliar conversational topics.",
        "Clean, responsive chat UI component.",
      ],
      aiModel: "NLP Intent Classifier + Conversational Memory Buffer + Generative LLM",
      implementation:
        "Modular Python conversational agent that maps text queries to structured intents and generates contextually coherent responses.",
      result:
        "Created an intuitive conversational assistant easily demonstrable in interview settings with zero lag.",
      learning:
        "Solidified fundamentals of conversational state machines, dialogue management, and practical NLP preprocessing.",
      difficulty: "Easy",
      image: "/images/ai_chatbot.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: false,
    },

    // 14. Monster Robo Car
    {
      id: "monster-robo-car",
      title: "Monster Robo Car",
      subtitle: "Autonomous Obstacle-Avoiding Robotic Vehicle",
      category: "AUTOMATION / ROBOTICS",
      additionalCategories: [],
      date: "March 2024",
      technologies: [
        "AI",
        "Robotics",
        "Sensors",
        "Automation",
      ],
      description:
        "Hardware robotics project featuring ultrasonic distance sensing, motor controller logic, and autonomous obstacle navigation.",
      problem:
        "Mobile robotics in unstructured physical environments require real-time sensor processing to navigate without human intervention.",
      solution:
        "Designed and fabricated an autonomous 4-wheel robotic vehicle with ultrasonic distance scanning and automated collision-avoidance logic.",
      approach:
        "Microcontroller firmware acquires continuous ultrasonic distance pulses; an algorithmic state machine controls dual-H-bridge motor drivers to steer clear of obstacles.",
      keyFeatures: [
        "Embedded ultrasonic sensor array for 180-degree distance scanning.",
        "Autonomous obstacle avoidance and path negotiation algorithms.",
        "Dual H-bridge motor driver integration for precision wheel torque.",
        "Custom power distribution and durable hardware chassis.",
        "Bronze Award winner at university-level robotics competition.",
      ],
      aiModel: "Sensory Thresholding & Dynamic State-Machine Navigation Algorithm",
      implementation:
        "Assembled chassis, soldered motor controllers, calibrated ultrasonic timing loops, and flashed decision-tree navigation firmware.",
      result:
        "Won the Bronze Award in a university robotics competition for obstacle navigation reliability and engineering precision.",
      learning:
        "Gained direct experience bridging software algorithms with physical sensor hardware, microcontrollers, and real-time execution constraints.",
      difficulty: "Medium",
      sihTheme: "Robotics & Smart Automation (SIH-Inspired)",
      image: "/images/monster_robo.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: false,
    },

    // 15. BP Detection Machine
    {
      id: "bp-detection-machine",
      title: "BP Detection Machine",
      subtitle: "Sensor-Driven Biomedical Blood Pressure Monitor",
      category: "AUTOMATION / ROBOTICS",
      additionalCategories: ["AI / MACHINE LEARNING"],
      date: "April 2024",
      technologies: [
        "AI",
        "Sensor Analytics",
        "Data Processing",
      ],
      description:
        "Biomedical instrumentation project capturing oscillometric pressure signals to compute systolic and diastolic blood pressure readings.",
      problem:
        "Traditional blood pressure measurement methods depend on manual stethoscope auscultation, which introduces user error and inconsistency.",
      solution:
        "Engineered an automated monitoring device utilizing electronic pressure transducers, digital bandpass filtering, and algorithmic pulse peak estimation.",
      approach:
        "Analog pressure signal acquisition; digital filtering to remove motion artifacts; peak-detection algorithms to estimate mean arterial pressure and calculate systolic/diastolic values.",
      keyFeatures: [
        "Oscillometric pressure sensor signal acquisition.",
        "Digital bandpass filtering to isolate micro-pulses from cuff deflation.",
        "Algorithmic systolic and diastolic blood pressure estimation.",
        "Digital LCD readout with abnormal pulse rate warnings.",
        "Educational biomedical instrumentation prototype.",
      ],
      aiModel: "Oscillometric Waveform Envelope Peak-Detection & Derivative Algorithm",
      implementation:
        "Pressure transducer signals pass through an operational amplifier and microcontroller ADC; peak-detection algorithms calculate blood pressure metrics.",
      result:
        "Successfully produced repeatable systolic and diastolic readings within acceptable comparative margins against commercial monitors.",
      learning:
        "Mastered biological signal acquisition, noise filtering, analog-to-digital sampling constraints, and mathematical peak detection.",
      difficulty: "Medium",
      sihTheme: "Healthcare & Biotech (SIH-Inspired)",
      image: "/images/bp_detection.svg",
      repoUrl: "https://github.com/abhirajsingh524",
      isFeatured: false,
    },
  ] as Project[],

  // Academic Research Project
  research: {
    title: "Quantum Teleportation",
    category: "Academic Research Project",
    period: "2025–2026",
    label: "Academic Research",
    description:
      "Exploratory academic investigation analyzing quantum state transfer principles without physical matter transmission.",
    highlights: [
      "Studied quantum entanglement, Bell-state measurement, decoherence, fidelity, and scalability challenges.",
      "Explored potential applications in quantum communication, quantum internet, and hybrid quantum–AI systems.",
      "Conducted literature analysis and theoretical evaluation of noisy intermediate-scale quantum constraints.",
    ],
  },

  // Structured Technical Skills with Portfolio-Specific Descriptions and Project Links
  technicalSkills: [
    // PROGRAMMING
    {
      name: "Python",
      category: "PROGRAMMING",
      description:
        "Primary language for AI/ML experimentation, data processing and backend services. Used across projects involving NLP, computer vision, prediction and automation.",
      projectsUsing: ["AEGIS", "Trackilo", "DocMind AI", "Sonar AI", "PhishGuard AI", "Vehicle Detection System", "AgriVision AI", "ResumeAI", "Retail Sales Analytics", "ChurnSense AI"],
      level: "Advanced",
    },
    {
      name: "SQL",
      category: "PROGRAMMING",
      description:
        "Used for structured querying, relational schema modeling, data aggregation, and database integration in data-driven backends.",
      projectsUsing: ["Smart LMS", "Retail Sales Analytics", "Trackilo"],
    },
    {
      name: "C",
      category: "PROGRAMMING",
      description:
        "Low-level programming used for core memory management fundamentals, algorithm design, and embedded hardware interfaces.",
      projectsUsing: ["Monster Robo Car", "BP Detection Machine"],
      level: "Basic",
    },
    {
      name: "C++",
      category: "PROGRAMMING",
      description:
        "Object-oriented and performance-sensitive programming used for high-efficiency algorithmic problem solving on LeetCode.",
      projectsUsing: ["DSA Problem Solving"],
      level: "Proficient",
    },
    {
      name: "Java",
      category: "PROGRAMMING",
      description:
        "Used for object-oriented system fundamentals, enterprise data structures, and backend software engineering coursework.",
      projectsUsing: ["Smart LMS"],
      level: "Basic",
    },
    {
      name: "JavaScript",
      category: "PROGRAMMING",
      description:
        "Interactive frontend scripting and asynchronous client communication connecting web applications with AI REST APIs.",
      projectsUsing: ["DocMind AI", "Portfolio", "Smart LMS"],
    },

    // AI / MACHINE LEARNING
    {
      name: "Scikit-learn",
      category: "AI / MACHINE LEARNING",
      description:
        "Used for classical machine-learning models and preprocessing. Supports practical classification, regression and evaluation workflows.",
      projectsUsing: ["PhishGuard AI", "ChurnSense AI", "Retail Sales Analytics", "Smart LMS"],
    },
    {
      name: "Predictive Modeling",
      category: "AI / MACHINE LEARNING",
      description:
        "Designing supervised regression and classification pipelines to forecast future metrics and assess risk probabilities.",
      projectsUsing: ["Trackilo", "Retail Sales Analytics", "ChurnSense AI", "Smart LMS"],
    },
    {
      name: "Feature Engineering",
      category: "AI / MACHINE LEARNING",
      description:
        "Transforming raw text, audio signals, and transactional logs into mathematical representations optimized for ML models.",
      projectsUsing: ["AEGIS", "PhishGuard AI", "Retail Sales Analytics", "ChurnSense AI"],
    },
    {
      name: "Model Evaluation",
      category: "AI / MACHINE LEARNING",
      description:
        "Rigorous performance validation utilizing cross-validation, confusion matrices, ROC-AUC, precision, recall, and R² metrics.",
      projectsUsing: ["PhishGuard AI", "ChurnSense AI", "Vehicle Detection System", "Retail Sales Analytics"],
    },
    {
      name: "Hyperparameter Tuning",
      category: "AI / MACHINE LEARNING",
      description:
        "Grid search and random search optimization techniques to discover ideal model parameters and minimize validation loss.",
      projectsUsing: ["ChurnSense AI", "Retail Sales Analytics"],
    },

    // DEEP LEARNING
    {
      name: "PyTorch",
      category: "DEEP LEARNING",
      description:
        "Used for deep-learning model development and inference workflows. Useful for experimenting with custom neural-network architectures.",
      projectsUsing: ["AEGIS", "AgriVision AI", "Sonar AI"],
    },
    {
      name: "TensorFlow",
      category: "DEEP LEARNING",
      description:
        "Used for building, compiling, and deploying neural networks for computer vision classification and object detection.",
      projectsUsing: ["Vehicle Detection System", "AgriVision AI"],
    },
    {
      name: "CNN",
      category: "DEEP LEARNING",
      description:
        "Convolutional Neural Networks applied to visual feature extraction, image classification, and bounding box regression.",
      projectsUsing: ["Vehicle Detection System", "AgriVision AI"],
    },
    {
      name: "Computer Vision",
      category: "DEEP LEARNING",
      description:
        "Used for image classification, detection and visual analysis. Applied to projects such as Vehicle Detection and AgriVision AI.",
      projectsUsing: ["Vehicle Detection System", "AgriVision AI", "Trackilo (OCR)"],
    },
    {
      name: "OpenCV",
      category: "DEEP LEARNING",
      description:
        "Real-time video frame processing, image transformation, bounding box rendering, and background subtraction.",
      projectsUsing: ["Vehicle Detection System", "AgriVision AI"],
    },

    // NLP / GENERATIVE AI
    {
      name: "NLP",
      category: "NLP / GENERATIVE AI",
      description:
        "Used for text understanding, semantic search and language-based applications. Applied in projects such as Sonar AI and intelligent assistants.",
      projectsUsing: ["Trackilo", "Sonar AI", "DocMind AI", "ResumeAI", "Multilingual Translation Assistant", "AI Chatbot"],
    },
    {
      name: "LLMs",
      category: "NLP / GENERATIVE AI",
      description:
        "Used for Generative AI and contextual language applications. Combined with retrieval techniques for practical domain-specific assistants.",
      projectsUsing: ["DocMind AI", "Sonar AI", "ResumeAI", "AI Chatbot"],
    },
    {
      name: "RAG",
      category: "NLP / GENERATIVE AI",
      description:
        "Retrieval-Augmented Generation connecting external knowledge sources with language models to eliminate hallucinations.",
      projectsUsing: ["DocMind AI", "Sonar AI"],
    },
    {
      name: "FAISS",
      category: "NLP / GENERATIVE AI",
      description:
        "High-efficiency vector similarity search library indexing dense embeddings for instantaneous sub-millisecond retrieval.",
      projectsUsing: ["DocMind AI", "Sonar AI"],
    },
    {
      name: "Semantic Search",
      category: "NLP / GENERATIVE AI",
      description:
        "Vector-space query matching that finds conceptually relevant documents even when phrasing contains no exact keyword overlap.",
      projectsUsing: ["DocMind AI", "Sonar AI", "ResumeAI"],
    },
    {
      name: "Prompt Engineering",
      category: "NLP / GENERATIVE AI",
      description:
        "Crafting structured, grounded instructions and few-shot templates to enforce accurate, cited model outputs.",
      projectsUsing: ["DocMind AI", "Sonar AI", "AI Chatbot"],
    },
    {
      name: "Speech Processing",
      category: "NLP / GENERATIVE AI",
      description:
        "Acoustic spectrogram transformation, voice recognition, and MFCC feature extraction with Librosa and SpeechBrain.",
      projectsUsing: ["AEGIS", "Trackilo", "Multilingual Translation Assistant"],
    },

    // DATA SCIENCE
    {
      name: "Pandas",
      category: "DATA SCIENCE",
      description:
        "Used for dataset cleaning, transformation and exploratory analysis. Supports the data preparation pipeline before model training.",
      projectsUsing: ["Retail Sales Analytics", "ChurnSense AI", "PhishGuard AI", "Smart LMS"],
    },
    {
      name: "NumPy",
      category: "DATA SCIENCE",
      description:
        "Used for numerical computation and array-based data processing. Forms part of many Python-based ML preprocessing workflows.",
      projectsUsing: ["Retail Sales Analytics", "Vehicle Detection System", "AgriVision AI", "AEGIS"],
    },
    {
      name: "EDA",
      category: "DATA SCIENCE",
      description:
        "Exploratory Data Analysis isolating outliers, discovering hidden correlations, and verifying distribution assumptions.",
      projectsUsing: ["Retail Sales Analytics", "ChurnSense AI"],
    },
    {
      name: "Tableau",
      category: "DATA SCIENCE",
      description:
        "Interactive executive dashboard design, multi-dimensional filtering, and business metric visualization.",
      projectsUsing: ["Retail Sales Analytics", "ChurnSense AI"],
      level: "Basic",
    },
    {
      name: "Power BI",
      category: "DATA SCIENCE",
      description:
        "Business intelligence reporting and dataset modeling to communicate predictive insights to non-technical stakeholders.",
      projectsUsing: ["Academic Projects"],
    },

    // DATABASES
    {
      name: "MongoDB",
      category: "DATABASES",
      description:
        "Used for application metadata, user/project information and detection history. Supports flexible storage for AI-powered applications.",
      projectsUsing: ["AEGIS", "Trackilo"],
    },
    {
      name: "Redis",
      category: "DATABASES",
      description:
        "In-memory key-value store used for sub-millisecond session caching and real-time inference rate limiting.",
      projectsUsing: ["AEGIS"],
    },

    // WEB / BACKEND
    {
      name: "FastAPI",
      category: "WEB / BACKEND",
      description:
        "Used to expose AI/ML models through lightweight APIs. Connects model inference pipelines with frontend applications.",
      projectsUsing: ["AEGIS", "Trackilo", "DocMind AI", "ResumeAI", "PhishGuard AI"],
    },
    {
      name: "React",
      category: "WEB / BACKEND",
      description:
        "Component-driven frontend engineering for responsive dashboards, AI interfaces, and interactive portfolio experiences.",
      projectsUsing: ["DocMind AI", "ResumeAI", "Portfolio"],
    },
    {
      name: "React Native",
      category: "WEB / BACKEND",
      description:
        "Cross-platform mobile application development delivering responsive offline-first AI user experiences.",
      projectsUsing: ["Trackilo"],
    },

    // TOOLS / DEVOPS
    {
      name: "Git",
      category: "TOOLS / DEVOPS",
      description:
        "Used for source control and collaborative development. Maintains project versions and implementation history.",
      projectsUsing: ["All Projects"],
    },
    {
      name: "GitHub",
      category: "TOOLS / DEVOPS",
      description:
        "Distributed repository hosting, code reviews, open-source portfolio sharing, and issue tracking.",
      projectsUsing: ["All Projects"],
    },
    {
      name: "Jupyter Notebook",
      category: "TOOLS / DEVOPS",
      description:
        "Interactive exploratory data science, experimental model training, visual plotting, and step-by-step pipeline prototyping.",
      projectsUsing: ["Retail Sales Analytics", "PhishGuard AI", "ChurnSense AI"],
    },
    {
      name: "Google Colab",
      category: "TOOLS / DEVOPS",
      description:
        "Cloud-based GPU acceleration for training Convolutional Neural Networks and fine-tuning transformer models.",
      projectsUsing: ["Vehicle Detection System", "AgriVision AI", "AEGIS"],
    },
    {
      name: "VS Code",
      category: "TOOLS / DEVOPS",
      description:
        "Primary development environment equipped with Python virtual environments, Git integration, and debugging extensions.",
      projectsUsing: ["All Projects"],
    },
  ] as TechSkill[],

  // Grouped Skill Categories for Classic Grid
  skills: [
    {
      category: "Programming",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "SQL" },
        { name: "C++", level: "Proficient" },
        { name: "Java", level: "Basic" },
        { name: "C", level: "Basic" },
        { name: "JavaScript" },
      ],
    },
    {
      category: "Machine Learning",
      skills: [
        { name: "Scikit-learn" },
        { name: "Supervised & Unsupervised Learning" },
        { name: "Predictive Modeling" },
        { name: "Model Evaluation" },
        { name: "Hyperparameter Tuning" },
        { name: "Cross-Validation" },
        { name: "Feature Engineering" },
      ],
    },
    {
      category: "Deep Learning",
      skills: [
        { name: "PyTorch" },
        { name: "TensorFlow" },
        { name: "CNN" },
        { name: "Computer Vision" },
        { name: "OpenCV" },
        { name: "ANN & DNN" },
      ],
    },
    {
      category: "NLP and Generative AI",
      skills: [
        { name: "NLP" },
        { name: "LLMs" },
        { name: "RAG Architecture" },
        { name: "FAISS Vector Search" },
        { name: "Semantic Search" },
        { name: "Prompt Engineering" },
        { name: "Speech Processing" },
        { name: "Text Preprocessing & Tokenization" },
      ],
    },
    {
      category: "Data Analysis and Visualization",
      skills: [
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "EDA" },
        { name: "Matplotlib & Seaborn" },
        { name: "Statistical Analysis" },
        { name: "Tableau", level: "Basic" },
        { name: "Power BI" },
      ],
    },
    {
      category: "Web and Backend",
      skills: [
        { name: "FastAPI" },
        { name: "React" },
        { name: "React Native" },
        { name: "REST APIs" },
        { name: "WebSocket" },
      ],
    },
    {
      category: "Cloud and Databases",
      skills: [
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "SQL" },
        { name: "AWS Educate" },
        { name: "Microsoft Azure" },
        { name: "Google Cloud Platform" },
      ],
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Jupyter Notebook" },
        { name: "Google Colab" },
        { name: "Antigravity" },
      ],
    },
  ],

  achievements: [
    {
      title: "Solved 200+ DSA Problems",
      platform: "LeetCode & Coding Ninjas",
      highlight: "Algorithmic mastery in arrays, graphs, dynamic programming, and binary search trees.",
    },
    {
      title: "100% Attendance Award",
      platform: "Academic Honors",
      highlight: "Awarded for 10 consecutive years of academic discipline and dedication.",
    },
    {
      title: "Scientific Skill Award",
      platform: "Institutional Recognition",
      highlight: "Recognized for excellence in scientific analysis, inquiry, and practical experiments.",
    },
    {
      title: "Bronze Award — Robo Car Making",
      platform: "Robotics Competition",
      highlight: "Engineered hardware circuitry, motor controllers, and autonomous ultrasonic sensor logic.",
    },
    {
      title: "First Prize — Dramatic Arts",
      platform: "Cultural Excellence",
      highlight: "Demonstrated creative expression, public presentation, and collaborative stage execution.",
    },
  ],

  certifications: [
    {
      title: "Machine Learning Engineering",
      issuer: "Microsoft",
      type: "certification",
    },
    {
      title: "Data Analysis",
      issuer: "Microsoft & LinkedIn Learning",
      type: "certification",
    },
    {
      title: "IEEE Xplore Training",
      issuer: "IEEE & EBSCO Information Services, India",
      date: "February 2025",
      credentialId: "TZVVW8-CE003848",
      type: "certification",
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class / IBM",
      date: "February 2025",
      credentialId: "c89d205c58ab4e5c9912d1b36652ab1d",
      type: "certification",
    },
    {
      title: "AI-Powered Cloud Engineer Virtual Internship",
      issuer: "AWS Educate / EduSkills",
      date: "2026 (10 weeks)",
      type: "internship",
    },
    {
      title: "Viksit Bharat Young Leaders Dialogue 2026",
      issuer: "MY Bharat",
      date: "October 2025 (Online Quiz Participation)",
      type: "participation",
    },
  ] as CertificationItem[],
};
