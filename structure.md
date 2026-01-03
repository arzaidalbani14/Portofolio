web-porto/
├─ public/
│  ├─ index.html
│  ├─ favicon.ico
│  └─ locales/
│     ├─ en.json
│     └─ id.json
│
├─ src/
│  ├─ assets/
│  │  ├─ images/
│  │  │  ├─ profile/
│  │  │  │  └─ profile.jpg
│  │  │  ├─ university/
│  │  │  │  └─ univ-logo.png
│  │  │  └─ projects/
│  │  │     ├─ project-1.png
│  │  │     └─ project-2.png
│  │  ├─ icons/
│  │  └─ fonts/
│  │
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ Footer.jsx
│  │  │  └─ Layout.jsx
│  │  │
│  │  ├─ sections/
│  │  │  ├─ Hero.jsx          // Welcome, name, summary, profile pic
│  │  │  ├─ Skills.jsx        // Skill bars (JS, Python, Java)
│  │  │  ├─ Projects.jsx      // Project cards
│  │  │  ├─ Education.jsx     // Degree, major, university
│  │  │  └─ Contact.jsx       // Contact info
│  │  │
│  │  ├─ cards/
│  │  │  ├─ ProjectCard.jsx
│  │  │  └─ SkillBar.jsx
│  │  │
│  │  └─ common/
│  │     ├─ Button.jsx
│  │     ├─ ToggleTheme.jsx
│  │     ├─ ToggleLanguage.jsx
│  │     ├─ Loader.jsx
│  │     └─ ErrorMessage.jsx
│  │
│  ├─ pages/
│  │  ├─ Home.jsx            // Single-page scroll container
│  │  ├─ ProjectDetail.jsx   // Optional detail page
│  │  ├─ NotFound.jsx
│  │  └─ Error.jsx
│  │
│  ├─ data/
│  │  ├─ skills.js           // JS 89%, Python 75%, Java 80%
│  │  ├─ projects.js
│  │  └─ education.js
│  │
│  ├─ context/
│  │  ├─ ThemeContext.jsx
│  │  └─ LanguageContext.jsx
│  │
│  ├─ hooks/
│  │  ├─ useTheme.js
│  │  ├─ useLanguage.js
│  │  └─ useScrollSpy.js     // Navbar active section
│  │
│  ├─ routes/
│  │  └─ AppRoutes.jsx
│  │
│  ├─ styles/
│  │  └─ index.css
│  │
│  ├─ App.jsx
│  └─ main.jsx
│
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ README.md
