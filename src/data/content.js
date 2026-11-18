export const LINKS = {
  github: 'https://github.com/tyllenaziz',
  linkedin: 'https://www.linkedin.com/in/tyllen-aziz-639b00264/',
  email: 'tyllenaziz@gmail.com',
  phone: '+254793982097',
  phoneLabel: '0793 982 097',
  kanzAi: 'https://try.ka.nz/ai/tyllenaziz',
  cv: '/resume.pdf',
};

export const roles = ['Full-Stack Developer', 'Data Analyst', 'AI / ML Builder', 'Systems Support Engineer'];

export const categories = ['All', 'Web', 'Mobile', 'AI & Data'];

// Every link below is a real URL supplied by the owner or already present in the original portfolio.
// A project with no public deployment has no `live` entry and its primary action is View Source.
export const projects = [
  {
    id: 'kinga',
    title: 'Kinga Pest Control',
    kind: 'Mobile · AI',
    categories: ['Mobile', 'AI & Data'],
    featured: true,
    image: '/projects/kinga.webp',
    desc: 'An Android app that helps farmers identify crop pests from a phone camera and get treatment recommendations, built around a computer-vision model.',
    features: ['Pest detection from the camera using PyTorch and OpenCV', 'Instant treatment recommendations', 'Cloud synchronisation and offline capability', 'Companion web dashboard for administrators'],
    tech: ['Python', 'PyTorch', 'OpenCV', 'React Native', 'Expo'],
    live: { label: 'Install Android App', href: 'https://expo.dev/accounts/tyllen001/projects/kinga-pest-control/builds/f584abe6-d7ed-4c71-a986-12799741f1ce', type: 'install' },
  },
  {
    id: 'gradepoa',
    title: 'GradePoa',
    kind: 'Web · EdTech',
    categories: ['Web'],
    featured: true,
    image: '/projects/gradepoa.webp',
    desc: 'A student grading and reporting platform for schools, co-developed with my team. Secure login, grade capture and report generation in one place.',
    features: ['Secure login and role-based access', 'Grading automation', 'Report generation', 'Backend on Render, frontend on Vercel'],
    tech: ['React', 'Node.js', 'Render', 'Vercel'],
    live: { label: 'Visit GradePoa', href: 'https://www.gradepoa.co.ke/', type: 'live' },
  },
  {
    id: 'nexusgrid',
    title: 'NexusGrid AI',
    kind: 'Platform · Data & AI',
    categories: ['Web', 'AI & Data'],
    featured: true,
    image: '/projects/nexusgrid.webp',
    desc: 'A human-in-the-loop platform for AI data work, started as a student-led initiative at Mount Kenya University. Contributors label data and evaluate model outputs while admins manage quality, verification and payouts.',
    features: ['Task workspace including A/B preference ranking and fact-checking with evidence URLs', 'Webcam face verification, email OTP and trusted-device login', 'Wallet, referral and payout cycles with an OTP-protected identity vault', 'Separate admin console for task inventory, reviews and verification'],
    tech: ['Next.js', 'TypeScript', 'Express', 'Prisma', 'MySQL', 'Google OAuth'],
    github: 'https://github.com/tyllenaziz/NEXUS-GRID-AI',
  },
  {
    id: 'kanz-bakery',
    title: 'Kanz Bakery',
    kind: 'Web · Full-Stack',
    categories: ['Web'],
    image: '/projects/kanz-bakery.webp',
    desc: 'A multilingual ordering and catering website for a Nairobi bakery, in English, Arabic (right-to-left) and Kiswahili.',
    features: ['Menu with category filters, search and per-item reviews', 'Cart that sends the order through WhatsApp', 'Catering enquiry form with Zod validation', 'Express API and Drizzle ORM in a pnpm monorepo'],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Express', 'TypeScript', 'Drizzle'],
    github: 'https://github.com/tyllenaziz/kanz-bakery',
  },
  {
    id: 'sangara',
    title: 'Sangara Wholesalers POS',
    kind: 'Web · Business',
    categories: ['Web'],
    image: '/projects/pos.webp',
    desc: 'An inventory and sales management system for a wholesaler, replacing manual stock and sales records.',
    features: ['Product tracking and stock updates', 'Automated reports', 'User roles and secure authentication'],
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    live: { label: 'Live Demo', href: 'https://sangarawholesalers.vercel.app/#/dashboard', type: 'live' },
  },
  {
    id: 'kinga-web',
    title: 'Kinga Web Dashboard',
    kind: 'Web · Admin',
    categories: ['Web', 'AI & Data'],
    image: '/projects/kinga-web.webp',
    desc: 'The web side of the Kinga system, where administrators view data, manage users and access reports.',
    features: ['Data and report views', 'User management', 'Hosted on Vercel'],
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    live: { label: 'Live Demo', href: 'https://kinga-web.vercel.app/', type: 'live' },
  },
  {
    id: 'rental',
    title: 'Rental Management App',
    kind: 'Mobile · Property',
    categories: ['Mobile'],
    image: '/projects/rental.webp',
    desc: 'A mobile system for landlords to manage tenants and billing, replacing manual record-keeping.',
    features: ['Automated bill reminders', 'Tenant profiles and bill updates', 'Pending and sent bills tabs', 'Admin dashboard'],
    tech: ['React Native', 'Flask', 'Node.js'],
    live: { label: 'Download APK', href: 'https://expo.dev/artifacts/eas/2PvaU9Xeud27KNGQnZhzGj.apk', type: 'install' },
  },
  {
    id: 'hospital',
    title: 'Hospital Appointment System',
    kind: 'Mobile · Healthcare',
    categories: ['Mobile'],
    image: '/projects/hospital.webp',
    desc: 'In development. An app where patients and doctors book online assessments, track appointment status and receive confirmations.',
    features: ['Online appointment booking', 'Appointment status monitoring', 'Booking confirmations'],
    tech: ['React Native', 'Flask', 'Node.js'],
    github: 'https://github.com/tyllenaziz/Hospital-Appointment-App',
  },
];

export const skillGroups = [
  { title: 'Programming', items: ['Python', 'JavaScript', 'Java', 'C++', 'PHP', 'SQL'] },
  { title: 'Frontend', items: ['React', 'React Native', 'Expo', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'Flask'] },
  { title: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { title: 'AI & Machine Learning', items: ['PyTorch', 'OpenCV', 'CNNs', 'Machine Learning', 'Computer Vision'] },
  { title: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render'] },
];

export const dataPipeline = [
  { step: 'Collect', text: 'Research, annotation and data capture' },
  { step: 'Clean & Validate', text: 'Quality checks and verification' },
  { step: 'Analyse', text: 'SQL, Python and Power BI' },
  { step: 'Model', text: 'PyTorch, OpenCV, CNNs' },
  { step: 'Report', text: 'Dashboards and clear findings' },
];

export const dataSkills = ['Data Analysis', 'Data Validation & QA', 'Data Curation', 'Power BI', 'SQL', 'Python', 'Machine Learning', 'Computer Vision', 'Data Annotation'];

export const experience = [
  {
    kind: 'work',
    role: 'IT Officer & Data Analyst',
    org: 'Lake Basin Development Authority',
    period: 'MONTH 2026 – Present',
    points: [
      'Provide IT support and keep the authority’s systems and equipment running.',
      'Analyse and report on data to support decision-making.',
    ],
  },
  {
    kind: 'work',
    role: 'Co-Founder · Full-Stack Developer · Systems Support Engineer',
    org: 'Nextvijo Software Solutions',
    period: 'Apr 2024 – Present',
    points: [
      'Design, deploy and maintain business information systems for multiple clients.',
      'Manage MySQL and MongoDB databases, including backup, restoration and optimisation.',
      'Build REST APIs and backend services, with user roles and access control.',
      'Provide technical support, user training and documentation after deployment.',
    ],
  },
  {
    kind: 'work',
    role: 'Data Curator & Data Analyst (6-month contract)',
    org: 'Veeva Systems · Remote',
    period: 'Dec 2025 – Jun 2026',
    points: [
      'Curated, validated and quality-checked large healthcare and life sciences datasets.',
      'Cleaned, transformed and enriched data, and found trends, anomalies and gaps.',
      'Worked with global teams to meet quality targets and data governance standards.',
    ],
  },
  {
    kind: 'work',
    role: 'IT Assistant',
    org: 'Nairobi City Water & Sewerage Company',
    period: 'Apr 2025 – Dec 2025',
    points: [
      'Installed and configured hardware, software and peripherals.',
      'Troubleshot hardware, software and network issues, and supported routine maintenance.',
      'Assisted with network monitoring, basic server administration and user account management.',
    ],
  },
  {
    kind: 'edu',
    role: 'BSc Information Technology',
    org: 'Mount Kenya University',
    period: '2022 – 2025',
    points: [
      'Second Class Honours.',
      'Software development, database systems, networks, information security and AI, with real systems built as coursework.',
    ],
  },
];

export const achievements = [
  { title: 'Guinness World Record Holder', text: 'Through the KANZ AI programme, part of the record for the Most Users in an Artificial Intelligence Video Lesson.', img: '/world.webp', alt: 'Guinness World Record certificate' },
  { title: 'KANZ AI Certificate', text: 'Completed the KANZ AI programme.', img: '/kanz.webp', alt: 'KANZ AI certificate' },
];
