# Venkatesh Erla — Software Engineer & AI/ML Portfolio

<p align="center">
  <strong>Software Engineer · Java Developer · AI/ML Engineer · ServiceNow Developer</strong>
</p>

<p align="center">
  A modern, interactive personal portfolio built to showcase Venkatesh Erla's engineering experience, projects, technical skills, certifications, achievements, and AI-powered recruiter experience.
</p>

<p align="center">
  <a href="https://github.com/itzv07">GitHub</a>
  ·
  <a href="https://www.linkedin.com/in/erlavenkatesh/">LinkedIn</a>
  ·
  <a href="mailto:venkatesherla21@gmail.com">Email</a>
</p>

---

## 🌐 Portfolio

**AI Studio:**  
https://ai.studio/apps/d94c72f5-13a3-4142-b2ef-a6cabd6162f4

**GitHub:**  
https://github.com/itzv07/VenkateshErla-Portfolio

> Add the production URL here after deploying the portfolio.

---

## About

This is the personal portfolio website of **Venkatesh Erla**, an Artificial Intelligence & Machine Learning graduate focused on software engineering, Java backend development, AI/ML, modern web development, and ServiceNow application development.

The portfolio is designed as an interactive professional profile rather than a static résumé page. It brings together technical skills, experience, projects, certifications, achievements, leadership activities, engineering approach, résumé access, contact functionality, and an AI-powered recruiter assistant.

### The portfolio highlights

- Software engineering and Java development
- Spring Boot and backend engineering
- Artificial Intelligence and Machine Learning
- Generative AI and LLM applications
- React and TypeScript frontend development
- ServiceNow CAD & CSA expertise
- Blockchain development
- Database and DevOps technologies
- Hackathons and technical achievements
- AI-assisted recruiter interaction

---

## ✨ Features

### 🤖 AI Recruiter Assistant

An AI-powered recruiter chatbot designed to help recruiters and hiring managers explore the portfolio conversationally.

Visitors can ask about:

- Technical skills
- Java and Spring Boot
- AI/ML experience
- ServiceNow certifications
- Projects
- Internships
- Achievements
- Education
- Career interests

The chatbot communicates with the portfolio backend through:

```text
React UI
   ↓
POST /api/recruiter-chat
   ↓
Express Backend
   ↓
Google Gemini
```

---

### 🧭 Command Palette

A command-driven navigation experience for quickly accessing portfolio sections and actions without manually navigating through the entire page.

---

### 🌗 Dark & Light Mode

The interface supports both dark and light themes with responsive styling across the portfolio experience.

---

### 🎨 Interactive UI

The website includes custom visual and interaction features such as:

- Animated background effects
- Mouse-responsive effects
- Custom cursor
- Scroll progress indicator
- Motion-based transitions
- Hover interactions
- Responsive navigation
- Interactive project cards
- Sound feedback for selected interactions

---

### 📄 Resume Access

A dedicated resume interface allows visitors to view and access résumé information directly from the portfolio.

---

### 📬 Contact System

The portfolio includes a recruiter-focused contact section with:

- Name
- Email
- Subject
- Message
- Email delivery
- Submission feedback
- Direct professional contact links

---

## 🧰 Tech Stack

### Frontend

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Lucide React**
- **Heroicons**
- **Motion**
- **HTML5**
- **CSS3**

### Backend

- **Node.js**
- **Express 5**
- **TypeScript**
- **tsx**
- **esbuild**

### AI

- **Google Gemini API**
- **@google/genai**
- Generative AI
- AI recruiter assistant

### Other Technologies

- **Nodemailer**
- **Gmail SMTP**
- **FormSubmit**
- **html2pdf.js**
- **canvas-confetti**
- **Git**
- **GitHub**

---

## 🏗️ Architecture

The portfolio uses a React frontend backed by a lightweight Express server.

```text
                    ┌──────────────────────┐
                    │       Visitor        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    React Frontend    │
                    │                      │
                    │ • Hero               │
                    │ • About              │
                    │ • Skills             │
                    │ • Experience         │
                    │ • Projects           │
                    │ • Certifications     │
                    │ • Achievements       │
                    │ • Contact            │
                    │ • AI Recruiter       │
                    └──────────┬───────────┘
                               │
                         API Requests
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Express Server    │
                    │                      │
                    │ /api/health          │
                    │ /api/recruiter-chat  │
                    │ /api/contact         │
                    └───────┬───────┬──────┘
                            │       │
                            ▼       ▼
                     Google Gemini  Email
```

---

## 📂 Project Structure

```text
VenkateshErla-Portfolio/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── AIRecruiterChatbot.tsx
│   │   ├── BackgroundEffect.tsx
│   │   ├── Certifications.tsx
│   │   ├── CommandPalette.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── EngineeringProcess.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Icons.tsx
│   │   ├── LeadershipEngagement.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── ResumeModal.tsx
│   │   ├── ScrollProgressBar.tsx
│   │   ├── Skills.tsx
│   │   └── SoftSkills.tsx
│   │
│   ├── data/
│   │   └── portfolioData.ts
│   │
│   ├── utils/
│   │   └── sound.ts
│   │
│   └── types.ts
│
├── services/
│   └── gemini.ts
│
├── App.tsx
├── index.tsx
├── index.css
├── index.html
├── server.ts
├── package.json
├── package-lock.json
├── bun.lock
├── tsconfig.json
├── vite.config.ts
├── metadata.json
├── .env.example
├── .gitignore
└── README.md
```

---

## 👨‍💻 Portfolio Profile

### Venkatesh Erla

**Software Engineer | Java Developer | Aspiring AI/ML Engineer | ServiceNow CAD & CSA**

Venkatesh Erla is an Artificial Intelligence & Machine Learning graduate interested in building scalable software systems, intelligent applications, backend services, and enterprise automation solutions.

The portfolio focuses on the intersection of:

```text
Software Engineering
        +
Artificial Intelligence
        +
Enterprise Automation
```

---

## 🛠️ Technical Skills

### Programming Languages

- Java
- Python
- SQL
- JavaScript
- TypeScript
- C++

### Backend & Software Engineering

- Spring Boot
- Spring Security
- JWT
- Hibernate
- Spring Data JPA
- REST APIs
- Microservices
- Spring Cloud
- Node.js
- Express.js
- Apache Kafka
- Redis

### AI & Machine Learning

- Generative AI
- LLM applications
- Prompt Engineering
- RAG concepts
- PyTorch
- TensorFlow
- Scikit-Learn
- NLP
- Hugging Face
- OpenCV
- Machine Learning
- Deep Learning

### Frontend

- React
- TypeScript
- JavaScript
- Tailwind CSS
- HTML5
- CSS3
- Redux Toolkit
- Responsive UI development

### ServiceNow

- ServiceNow CAD
- ServiceNow CSA
- App Engine Studio
- Flow Designer
- IntegrationHub
- Service Portal
- Client-side scripting
- Server-side scripting
- Jelly
- ITSM workflows
- REST integrations
- ACLs

### Databases & Tools

- MySQL
- PostgreSQL
- MongoDB
- Redis
- Docker
- Git
- GitHub
- AWS fundamentals
- VS Code

---

## 🚀 Featured Projects

### AI Smart Resume & Recruiter Matcher

An AI-focused candidate screening and job-matching platform concept built around resume analysis, semantic matching, recruiter assistance, and intelligent candidate evaluation.

**Focus areas:**

- Resume parsing
- Skill extraction
- Job-description matching
- Semantic matching
- Missing-skill identification
- AI recruiter interaction
- Interview assistance

**Technologies:**

`Java` `Spring Boot` `React` `Python` `PyTorch` `Generative AI` `MySQL`

---

### Blockchain-Based Certificate Authentication & Issuer Validation System

A blockchain-based certificate verification system designed to improve certificate authenticity, integrity, and validation.

**Focus areas:**

- Ethereum blockchain
- Smart contracts
- Certificate issuance
- Certificate verification
- SHA-256 hashing
- Bloom Filter optimization

**Technologies:**

`Ethereum` `Solidity` `Java` `Web3j` `SHA-256` `Bloom Filters` `MySQL`

---

### HealthLink — AI-Powered Telehealth Solution

A digital healthcare solution concept focused on remote consultation, wearable data integration, prescription management, and AI-assisted healthcare workflows.

**Focus areas:**

- Remote healthcare
- Wearable integration
- Health data
- Prescription management
- AI-assisted analysis
- Firebase integration

**Technologies:**

`Python` `React` `Firebase` `MySQL` `REST APIs` `Tailwind CSS`

---

### Web Search Engine

A full-stack search application demonstrating frontend, backend, API, and database integration.

**Technologies:**

`React` `Node.js` `Express.js` `PostgreSQL` `Tailwind CSS`

---

### Library Management System

A Java-based application for managing library operations and database records.

**Technologies:**

`Java` `MySQL` `OOP`

---

### Attendance Management Application

A mobile attendance solution using authentication, Firebase, and location-based validation.

**Key capabilities:**

- OTP authentication
- Firebase integration
- Location verification
- Attendance tracking

---

## 💼 Experience

### Deeksha Technologies

**Software Engineering / Blockchain Intern**  
**December 2025 – March 2026**

Worked on practical software and blockchain development involving:

- Java
- Spring Boot
- REST APIs
- Ethereum
- Smart contracts
- MySQL
- Python
- Docker
- Git

---

### BrainOvision

**ServiceNow Developer Intern**  
**May 2025 – June 2025**

Worked with ServiceNow enterprise application development and ITSM workflows, including:

- App Engine Studio
- Flow Designer
- Service Portal
- JavaScript
- REST integrations
- Incident Management
- Problem Management
- Change Management

---

## 📜 Certifications

### ServiceNow Certified Application Developer — CAD

Professional certification covering ServiceNow application development, scoped applications, scripting, application configuration, and platform development.

### ServiceNow Certified System Administrator — CSA

Professional certification covering ServiceNow administration, configuration, users, roles, security, workflows, and platform fundamentals.

---

## 🏆 Achievements

- 🥇 **1st Prize — Hackwith Nellore Hackathon**
- 🏆 **NVibes 2K25 Project Expo**
- 🏅 **Consolation Prize — VJ Hackathon**
- 💻 **100+ LeetCode problems solved**
- 👥 Organized an inter-college cricket event
- 🚀 Participated in technical hackathons and project exhibitions

---

## 🎓 Education

### Bachelor of Technology — Artificial Intelligence & Machine Learning

**PBR Visvodaya Institute of Technology and Science**

**CGPA:** 8.69  
**Graduation:** 2026

---

## ⚙️ Engineering Approach

The portfolio represents a structured approach to building software:

```text
01  RESEARCH
    Understand the problem
            ↓
02  DESIGN
    Plan architecture and user experience
            ↓
03  DEVELOP
    Build, integrate and test
            ↓
04  DEPLOY
    Release, monitor and improve
```

The focus is on building software that is:

- Practical
- Maintainable
- Scalable
- User-focused
- Secure
- Continuously improvable

---

## 📬 Contact

I'm open to opportunities and collaborations in:

- Software Engineering
- Java Development
- Spring Boot
- Backend Engineering
- Full-Stack Development
- AI/ML Engineering
- Generative AI
- ServiceNow Development
- Enterprise Application Development

<p align="center">
  <a href="https://www.linkedin.com/in/erlavenkatesh/">
    <img src="https://img.shields.io/badge/LinkedIn-Venkatesh%20Erla-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://github.com/itzv07">
    <img src="https://img.shields.io/badge/GitHub-itzv07-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="mailto:venkatesherla21@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
</p>

---

## 📌 Local Development

### Prerequisites

- Node.js
- npm
- Git

### Installation

```bash
git clone https://github.com/itzv07/VenkateshErla-Portfolio.git
cd VenkateshErla-Portfolio
npm install
```

### Environment Variables

Create a local `.env` file containing the required private configuration.

Example:

```env
GEMINI_API_KEY=your_gemini_api_key
SMTP_USER=your_email@example.com
SMTP_PASS=your_app_password
```

Keep `.env` private and use `.env.example` only as a placeholder template.

### Run locally

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Start production server

```bash
npm start
```

---

## 🔐 Security

This project uses environment variables for private service credentials.

Never commit:

```text
.env
API keys
SMTP passwords
Gmail app passwords
private tokens
```

The repository should contain only safe placeholders in `.env.example`.

For production deployment, configure secrets through the hosting platform's environment-variable settings.

---

## ⭐ License & Usage

This repository represents a personal portfolio and professional work showcase.

The source code is publicly available for learning and reference, but personal branding, résumé content, photographs, project descriptions, and other identity-specific assets should not be reused as another person's portfolio without permission.

---

<p align="center">
  <strong>Built with React, TypeScript, Vite, Express & Google Gemini.</strong>
</p>

<p align="center">
  Designed and developed by <strong>Venkatesh Erla</strong>.
</p>
