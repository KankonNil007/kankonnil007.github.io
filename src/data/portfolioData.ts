import { Project, SkillCategory, Certification, EducationItem, StatItem, SocialLink, ExploringTopic, FaqItem } from '../types/portfolio';

export const personalInfo = {
  name: 'Kankon Mondal',
  preferredName: 'Kankon',
  role: 'Electronics & Communication Engineering Undergraduate',
  university: 'Khulna University of Engineering & Technology (KUET)',
  department: 'Department of Electronics & Communication Engineering (ECE)',
  location: 'Khulna, Bangladesh',
  email: 'kankonmondal89@gmail.com',
  githubUsername: 'KankonNil007',
  availability: 'KUET ECE • Open to Research & Dev',
  tagline: 'Engineering smart systems at the intersection of embedded hardware, machine learning pipelines, and modern software.',
  roles: [
    'ECE Undergraduate',
    'Python Developer',
    'Machine Learning Explorer',
    'Deep Learner',
    'Open Source Contributor'
  ],
  bio: [
    'I am an undergraduate student in Electronics & Communication Engineering at Khulna University of Engineering & Technology (KUET), Bangladesh. My academic focus unites physical electronic systems, signal processing, and computational intelligence.',
    'I have an engineering mindset geared toward building real solutions—from developing clinical machine learning prediction pipelines to creating university-wide digital libraries and programming microcontrollers. I actively solve algorithmic problems in C and Python, and am driven by the ambition to pursue advanced graduate research in Europe (DAAD, Erasmus Mundus).',
    'Beyond circuit diagrams and terminal windows, I maintain an active engagement with open source codebases, system design patterns, and engineering CAD tools like SolidWorks.'
  ],
  focusAreas: [
    {
      title: 'Embedded Systems & IoT',
      description: 'Interfacing microcontrollers (Arduino), sensory modules, and analog circuitry with software pipelines for smart automation and telemetry.',
      icon: 'Cpu'
    },
    {
      title: 'Machine Learning & AI',
      description: 'Developing predictive models, automated preprocessing pipelines, and exploratory data analysis using Scikit-Learn, Pandas, NumPy, and TensorFlow.',
      icon: 'Brain'
    },
    {
      title: 'Web Platforms & Backend APIs',
      description: 'Architecting responsive frontend interfaces and high-concurrency asynchronous RESTful services using Next.js, TypeScript, and FastAPI.',
      icon: 'Globe'
    },
    {
      title: 'Engineering & CAD Design',
      description: 'Designing 3D mechanical components in SolidWorks and simulating electronic circuits in NI Multisim and Proteus.',
      icon: 'Compass'
    }
  ],
  hobbies: [
    { title: 'Watching Anime', icon: 'Sparkles' },
    { title: 'Cinema & Sci-Fi', icon: 'Film' },
    { title: 'Open Source Coding', icon: 'Code2' },
    { title: 'Playing Chess', icon: 'Trophy' }
  ]
};

export const defaultStats: StatItem[] = [
  { label: 'Engineering Major', value: 'ECE', icon: 'Cpu' },
  { label: 'Public Repos', value: '19', icon: 'GitBranch', isDynamic: true },
  { label: 'GitHub Stars', value: '36+', icon: 'Star', isDynamic: true },
  { label: 'University', value: 'KUET', icon: 'GraduationCap' }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/KankonNil007',
    icon: 'Github',
    username: 'KankonNil007'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kankon-mondal/',
    icon: 'Linkedin',
    username: 'kankon-mondal'
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/KankonNil/',
    icon: 'Facebook',
    username: 'KankonNil'
  },
  {
    platform: 'Email',
    url: 'mailto:kankonmondal89@gmail.com',
    icon: 'Mail',
    username: 'kankonmondal89@gmail.com'
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.Sc. in Electronics & Communication Engineering',
    institution: 'Khulna University of Engineering & Technology (KUET)',
    period: 'Sep 2025 – Present',
    location: 'Khulna, Bangladesh',
    description: 'Comprehensive engineering curriculum balancing theoretical mathematical foundations with hands-on laboratory experimentation in analog electronics, microprocessors, and signals.',
    courses: [
      'Analog Electronics & Circuit Analysis',
      'Digital Logic Design & Microprocessors',
      'Signals & Systems',
      'Data Structures & Algorithms',
      'Structured Programming in C',
      'Communication Engineering Principles',
      'Electromagnetic Fields & Waves',
      'Differential Equations & Linear Algebra'
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'stanford-ml',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford Online',
    date: 'September 3, 2026',
    credentialId: 'RNYC6Q9U9GOO',
    verifyUrl: 'https://coursera.org/verify/specialization/RNYC6Q9U9GOO',
    image: '/assets/Machine-Learning-Specialization.jpg',
    summary: 'Foundational 3-course specialization taught by Andrew Ng covering supervised learning, neural networks, decision trees, unsupervised clustering, anomaly detection, recommender systems, and reinforcement learning.'
  },
  {
    id: 'ibm-python',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM via Coursera',
    date: 'June 12, 2026',
    credentialId: 'OO2WDVEV3CJC',
    verifyUrl: 'https://coursera.org/verify/OO2WDVEV3CJC',
    image: '/assets/Python-for-Data-Science-AI-and-Development.jpg',
    summary: 'Comprehensive certification covering Python syntax, data structures, REST APIs, web scraping, and AI development fundamentals.'
  },
  {
    id: 'umich-plotting',
    title: 'Applied Plotting, Charting & Data Representation',
    issuer: 'University of Michigan via Coursera',
    date: 'June 8, 2026',
    credentialId: '3RBFUF5AD9NI',
    verifyUrl: 'https://coursera.org/verify/3RBFUF5AD9NI',
    image: '/assets/Applied-Plotting-Charting-and-Data-Representation-in-Python.jpg',
    summary: 'In-depth exploration of Matplotlib design philosophy, information aesthetics, statistical graphics, and exploratory charting techniques.'
  },
  {
    id: 'umich-ds',
    title: 'Introduction to Data Science in Python',
    issuer: 'University of Michigan via Coursera',
    date: 'March 17, 2026',
    credentialId: 'MHM6FC476N4F',
    verifyUrl: 'https://coursera.org/verify/MHM6FC476N4F',
    image: '/assets/Introduction-to-Data-Science.jpg',
    summary: 'Data cleaning, tabular manipulation with Pandas DataFrames, multi-dimensional array vectorization with NumPy, and statistical exploration.'
  },
  {
    id: 'harvard-cs50x',
    title: 'CS50x – Introduction to Computer Science',
    issuer: 'Harvard University',
    date: '2026',
    credentialId: '658c719e-59a7-40a3-a2e9-f0b33d38dd83',
    verifyUrl: 'https://cs50.harvard.edu/certificates/658c719e-59a7-40a3-a2e9-f0b33d38dd83',
    image: '/assets/CS50x.png',
    summary: "Harvard's premier computer science program. Thorough mastery of C pointers, memory allocation, asymptotic runtime, sorting, Python, SQL, and full-stack web architectures."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Core Programming',
    iconName: 'Code',
    proficiency: 'Core',
    skills: [
      { name: 'Python', iconName: 'Terminal', level: 'Core' },
      { name: 'C', iconName: 'Cpu', level: 'Core' },
      { name: 'C++', iconName: 'Binary', level: 'Advanced' },
      { name: 'JavaScript', iconName: 'FileCode2', level: 'Advanced' },
      { name: 'TypeScript', iconName: 'FileCode', level: 'Advanced' },
      { name: 'SQL', iconName: 'Database', level: 'Applied' }
    ]
  },
  {
    title: 'Machine Learning & AI',
    iconName: 'Brain',
    proficiency: 'Core',
    skills: [
      { name: 'Scikit-Learn', iconName: 'Bot', level: 'Core' },
      { name: 'Pandas', iconName: 'Table', level: 'Core' },
      { name: 'NumPy', iconName: 'Calculator', level: 'Core' },
      { name: 'Matplotlib', iconName: 'BarChart3', level: 'Core' },
      { name: 'TensorFlow / Keras', iconName: 'Network', level: 'Applied' },
      { name: 'Computer Vision', iconName: 'ScanEye', level: 'Applied' },
      { name: 'Neural Networks (ANN/CNN)', iconName: 'Share2', level: 'Applied' },
      { name: 'Jupyter Notebooks', iconName: 'BookOpen', level: 'Core' }
    ]
  },
  {
    title: 'Web & Backend',
    iconName: 'Globe',
    proficiency: 'Advanced',
    skills: [
      { name: 'FastAPI', iconName: 'Zap', level: 'Core' },
      { name: 'Next.js', iconName: 'Boxes', level: 'Advanced' },
      { name: 'React', iconName: 'Atom', level: 'Advanced' },
      { name: 'Tailwind CSS', iconName: 'Palette', level: 'Core' },
      { name: 'HTML5 & CSS3', iconName: 'Layout', level: 'Core' },
      { name: 'RESTful APIs', iconName: 'Workflow', level: 'Core' }
    ]
  },
  {
    title: 'Hardware & Electronics',
    iconName: 'Microchip',
    proficiency: 'Applied',
    skills: [
      { name: 'Arduino & Sensors', iconName: 'Cpu', level: 'Core' },
      { name: 'MATLAB', iconName: 'Activity', level: 'Core' },
      { name: 'NI Multisim', iconName: 'CircuitBoard', level: 'Applied' },
      { name: 'Proteus Circuit Simulation', iconName: 'Boxes', level: 'Applied' },
      { name: 'Analog Circuit Analysis', iconName: 'Zap', level: 'Core' }
    ]
  },
  {
    title: 'Engineering & Design',
    iconName: 'Compass',
    proficiency: 'Applied',
    skills: [
      { name: 'SolidWorks', iconName: 'Box', level: 'Applied' },
      { name: '3D CAD Modeling', iconName: 'Layers', level: 'Applied' },
      { name: 'Schematic Design', iconName: 'FileCheck', level: 'Applied' }
    ]
  },
  {
    title: 'Tools & DevOps',
    iconName: 'Wrench',
    proficiency: 'Advanced',
    skills: [
      { name: 'Git & GitHub', iconName: 'GitBranch', level: 'Core' },
      { name: 'VS Code', iconName: 'Code2', level: 'Core' },
      { name: 'Linux CLI', iconName: 'Terminal', level: 'Advanced' },
      { name: 'Markdown Documentation', iconName: 'FileText', level: 'Core' }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'e-lab',
    title: 'E-Lab – Interactive Engineering Laboratory',
    category: 'systems',
    categoryLabel: 'ECE Lab / Simulation',
    shortDescription: 'Comprehensive browser-based engineering laboratory for ECE students to design, simulate, and visualize circuits, signals, digital logic, and control systems.',
    problemStatement: 'Engineering education often detaches mathematical theory from intuitive experimentation due to expensive laboratory equipment and bulky desktop software.',
    highlights: [
      'Interactive circuit analysis: DC V-I load lines, RC/RL transient curves, RLC resonance sweeps, and diode rectifier ripple models',
      'Signals & systems suite: Harmonic Fourier series decomposition (Gibbs phenomenon), graphical convolution visualizer, and multi-waveform generator',
      'Digital electronics & control: TTL 74LS logic gates with propagation delay, flip-flops, 4-bit counters, and 2nd-order Bode plots',
      'Offline engineering AI guidance, global command palette (Ctrl+K), and KaTeX mathematical typography with zero server dependencies'
    ],
    tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'KaTeX', 'Recharts', 'Zustand', 'Circuits'],
    codeUrl: 'https://github.com/KankonNil007/E-Lab',
    demoUrl: 'https://kankonnil007.github.io/E-Lab/',
    stats: 'Interactive Lab',
    featured: true
  },
  {
    id: 'greensort',
    title: 'GreenSort – Automated Waste Classifier',
    category: 'ml',
    categoryLabel: 'Deep Learning / CV',
    shortDescription: 'Automated deep learning waste classification system categorizing items into Organic vs. Recyclable streams with 92.04% test accuracy and high-throughput REST API.',
    problemStatement: 'Improper waste segregation drives municipal landfill overflow and recyclable contamination, requiring parameter-efficient, low-latency computer vision classification.',
    highlights: [
      '4-stage convolutional feature extractor with GlobalAveragePooling2D, slashing parameters by 99.3%',
      'Trained on 25,077 real-world images achieving 92.04% test accuracy with <50ms inference latency',
      'Live full-stack suite on Render featuring single & batch image scanner, analytics dashboard, and FastAPI Swagger API'
    ],
    tags: ['TensorFlow', 'Keras', 'FastAPI', 'Deep Learning', 'Computer Vision', 'Python', 'Render'],
    codeUrl: 'https://github.com/KankonNil007/GreenSort-Waste-Classifier',
    demoUrl: 'https://greensort-waste-classifier.onrender.com/',
    notice: 'Hosted on Render free tier (may take ~20s to wake up on first visit)',
    stats: '92.04% Accuracy',
    featured: true
  },
  {
    id: 'kuet-ece',
    title: 'KUET ECE Materials Hub',
    category: 'web',
    categoryLabel: 'Web Platform',
    shortDescription: 'Centralized digital library and academic portal for all 8 undergraduate semesters of ECE at KUET.',
    problemStatement: 'Undergraduate engineering students previously faced fragmented lecture notes, missing lab manuals, and lost exam archives.',
    highlights: [
      'Organized syllabus, lecture notes, lab sheets, and question banks for 8 semesters',
      'Instant search and categorized multi-tier navigation',
      'Clean responsive user interface deployed on GitHub Pages'
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'KUET'],
    codeUrl: 'https://github.com/KankonNil007/KUET-ECE',
    demoUrl: 'https://kankonnil007.github.io/KUET-ECE/',
    featured: true
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease Risk Prediction',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    shortDescription: 'End-to-end machine learning classification pipeline evaluating cardiovascular risk metrics with interactive screening interface.',
    problemStatement: 'Clinical diagnostics benefit immensely from early preventative screening based on biometric and blood biomarker correlations.',
    highlights: [
      'Trained classification models with Scikit-Learn evaluating key clinical parameters',
      'Data imputation, feature scaling, and ROC-AUC model evaluation',
      'Interactive risk calculator deployed live on Render'
    ],
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Render', 'Streamlit'],
    codeUrl: 'https://github.com/KankonNil007/Heart-Disease-Prediction',
    demoUrl: 'https://heart-disease-prediction-z7ub.onrender.com',
    notice: 'Hosted on Render free tier (may take 20s to wake up on first visit)',
    featured: true
  },
  {
    id: 'cs50x',
    title: 'CS50x CS Solutions & Problem Sets',
    category: 'systems',
    categoryLabel: 'Computer Science',
    shortDescription: "Rigorous algorithmic problem sets and solutions for Harvard University's premier computer science curriculum.",
    problemStatement: 'Demonstrating low-level memory control, algorithmic time complexity, and data structure implementations from scratch.',
    highlights: [
      'Low-level C pointers, dynamic memory allocation (malloc/free), and hash tables',
      'Algorithmic sort analysis (Merge, Quick, Bubble) and recursion',
      'Full-stack SQL database indexing and Python web frameworks'
    ],
    tags: ['C', 'Python', 'SQL', 'Algorithms', 'Harvard CS50'],
    codeUrl: 'https://github.com/KankonNil007/CS50x-2026',
    stats: '29 Stars',
    featured: true
  },
  {
    id: 'intro-fastapi',
    title: 'Introduction to FastAPI & REST APIs',
    category: 'web',
    categoryLabel: 'Backend API',
    shortDescription: 'Production-ready asynchronous web service blueprint featuring Pydantic schema validation and automated OpenAPI docs.',
    problemStatement: 'Building scalable microservice foundations with type safety, clean route modularity, and high-throughput async processing.',
    highlights: [
      'Asynchronous request handling and route separation',
      'Strict Pydantic payload models with automatic input sanitization',
      'Interactive Swagger UI and ReDoc endpoints generation'
    ],
    tags: ['FastAPI', 'Python', 'Pydantic', 'AsyncIO', 'REST API', 'Swagger'],
    codeUrl: 'https://github.com/KankonNil007/Introduction-to-FastAPI',
    featured: false
  },
  {
    id: 'bup-cse-fest-hackathon',
    title: 'BUP CSE Fest Hackathon – High-Concurrency Booking Engine',
    category: 'web',
    categoryLabel: 'Hackathon / Backend API',
    shortDescription: 'High-throughput multitenant room reservation & automated refund microservice hardened against race conditions and deadlocks for BUP CSE Fest 2026.',
    problemStatement: 'Preventing race conditions, double-bookings, rate limit bypasses, deadlocks, and transaction atomicity leaks under concurrent asynchronous load in a competitive hackathon environment.',
    highlights: [
      'Engineered threading locks across booking creation, rate limiters, and quota checks to eliminate critical race conditions and double-bookings',
      'Resolved circular lock dependencies between email and audit notifications to eliminate thread deadlocks and guarantee service liveness',
      'Enforced ACID transaction atomicity during cancellations and refunds, preventing state corruption and financial refund exploits',
      'Optimized SQL queries with database-level interval overlap checks to eliminate OOM memory crashes under sustained request volume'
    ],
    tags: ['Python', 'FastAPI', 'Docker', 'Concurrency', 'SQLAlchemy', 'JWT Auth', 'Hackathon'],
    codeUrl: 'https://github.com/tahfimism/bup-cse-fest-preli',
    role: 'Hackathon Contributor',
    featured: false
  },
  {
    id: 'ml-journey',
    title: 'Machine Learning Journey & Notebooks',
    category: 'ml',
    categoryLabel: 'Data Science / ML',
    shortDescription: 'Documented mathematical intuitions, regression/classification experiments, and exploratory model tuning notebooks.',
    problemStatement: 'Demystifying the underlying linear algebra, calculus, and probabilistic theorems behind popular ML estimators.',
    highlights: [
      'Implementations of Linear/Logistic Regression, Decision Trees, and SVMs',
      'Exploratory gradient descent visualizations and loss function derivations',
      'Cross-validation experiments and hyperparameter optimization scripts'
    ],
    tags: ['Python', 'Jupyter', 'Scikit-Learn', 'Math Intuition', 'Data Science'],
    codeUrl: 'https://github.com/KankonNil007/Machine-Learning-Journey',
    featured: false
  },
  {
    id: 'python-data-viz',
    title: 'Applied Python Data Visualization',
    category: 'ml',
    categoryLabel: 'Data Science',
    shortDescription: 'Data storytelling and visual analytics scripts implementing custom Matplotlib plotting architectures and statistical heatmaps.',
    problemStatement: 'Effective data visualization requires balancing ink-to-data ratios, color psychology, and clear chart typography.',
    highlights: [
      'Custom Matplotlib subplots, violin plots, and correlation matrices',
      'Exploratory demographic and temporal time-series charting',
      'Publication-grade figure exporting for scientific documentation'
    ],
    tags: ['Python', 'Matplotlib', 'Pandas', 'Data Storytelling', 'Analytics'],
    codeUrl: 'https://github.com/KankonNil007/Applied-Python-Data-Visualization',
    stats: '1 Star',
    featured: false
  },
  {
    id: 'leetcode-problems',
    title: 'LeetCode Problems & DSA Solutions',
    category: 'systems',
    categoryLabel: 'Algorithms',
    shortDescription: 'Optimized algorithmic solutions in Python covering arrays, two pointers, binary trees, dynamic programming, and hash maps.',
    problemStatement: 'Honing competitive programming agility and time/space complexity optimization under strict runtime constraints.',
    highlights: [
      'Two-pointer array manipulations and sliding window patterns',
      'Binary search trees, depth-first and breadth-first search traversals',
      'Documented Big-O runtime and memory footprints for every solution'
    ],
    tags: ['Python', 'DSA', 'LeetCode', 'Algorithms', 'Time Complexity'],
    codeUrl: 'https://github.com/KankonNil007/LeetCode-Problems',
    stats: '1 Star',
    featured: false
  },
  {
    id: 'cse-1210-kuet',
    title: 'KUET CSE 1210 Structured Programming',
    category: 'systems',
    categoryLabel: 'C / Systems',
    shortDescription: 'Comprehensive structured programming coursework in C for engineering students at KUET with laboratory simulations.',
    problemStatement: 'Forming rock-solid fundamentals in compiled programming, memory management, and file systems.',
    highlights: [
      'Dynamic memory allocation, structs, unions, and bitwise manipulation',
      'Binary and text file I/O record management systems',
      'Open-ended laboratory projects designed for KUET engineering curriculum'
    ],
    tags: ['C', 'Pointers', 'File I/O', 'KUET', 'Data Structures'],
    codeUrl: 'https://github.com/KankonNil007/CSE-1210-Course-KUET',
    stats: '1 Star',
    featured: false
  },
  {
    id: 'arduino-starter',
    title: 'Arduino Starter & Sensor Interfacing',
    category: 'systems',
    categoryLabel: 'Embedded Hardware',
    shortDescription: 'Microcontroller hardware prototyping and sensor integration sketches covering ultrasonic telemetry and circuit simulation.',
    problemStatement: 'Bridging physical sensor readings (temperature, ultrasonic distance, PIR) with firmware logic and actuator outputs.',
    highlights: [
      'Microcontroller sensor integration sketches in C/C++',
      'Circuit verification using Proteus and NI Multisim simulation suites',
      'Telemetry data logging through Arduino serial interfaces'
    ],
    tags: ['Arduino', 'C++', 'Proteus', 'Sensors', 'Embedded Systems'],
    codeUrl: 'https://github.com/KankonNil007/Arduino-Starter-Projects',
    featured: false
  },
  {
    id: 'cad-solidworks',
    title: 'Engineering CAD & SolidWorks Showcase',
    category: 'cad',
    categoryLabel: 'Engineering Design',
    shortDescription: 'Precision 3D CAD modeling, multi-component mechanical assemblies, and schematic simulation for engineering projects.',
    problemStatement: 'Translating conceptual physical enclosures and mechanical fixtures into manufacturing-ready technical models.',
    highlights: [
      'Parametric 3D solid modeling and multi-part constraint assemblies in SolidWorks',
      'Exploded view diagrams and standard engineering 2D orthographic projections',
      'Integration with embedded enclosure packaging and PCB mounting points'
    ],
    tags: ['SolidWorks', '3D CAD', 'Engineering Design', 'Mechanical Assemblies', 'Drafting'],
    featured: false
  }
];

export const exploringTopics: ExploringTopic[] = [
  {
    title: 'Advanced Machine Learning & Vision',
    description: 'Investigating deep convolutional architectures (CNNs) and transformer models for medical imaging diagnostics and sensory feature extraction.',
    category: 'Artificial Intelligence',
    icon: 'Brain'
  },
  {
    title: 'Async Microservices with Next.js & FastAPI',
    description: 'Designing high-performance full-stack architectures combining reactive React frontends with asynchronous Python API backends.',
    category: 'Full-Stack Engineering',
    icon: 'Boxes'
  },
  {
    title: 'Digital Signal Processing (DSP)',
    description: 'Transform methods (Fourier, Z-Transform), digital filter synthesis, and noise attenuation in analog-digital communication links.',
    category: 'ECE Core',
    icon: 'Activity'
  },
  {
    title: 'Real-Time Embedded Systems (RTOS)',
    description: 'Exploring deterministic firmware scheduling, concurrent task handling, and hardware interrupts on 32-bit ARM microcontrollers.',
    category: 'Embedded Computing',
    icon: 'Cpu'
  }
];

export const faqsData: FaqItem[] = [
  {
    question: 'Are you available for research collaborations?',
    answer: 'Yes! I am actively interested in participating in research initiatives across ECE, biomedical machine learning diagnostics, signal processing, and embedded systems, particularly with researchers preparing for European graduate fellowships (DAAD, Erasmus Mundus).'
  },
  {
    question: 'How can I inspect the code for your projects?',
    answer: 'All public projects are hosted on my GitHub profile (@KankonNil007) with open-source repositories, documentation, and live preview links where available.'
  },
  {
    question: 'What is your response time for messages?',
    answer: 'I typically respond within 24 hours. For direct or urgent academic/technical inquiries, sending an email directly to kankonmondal89@gmail.com is the fastest channel.'
  },
  {
    question: 'Do you take on software or hardware freelance work?',
    answer: 'Yes, I accept selective opportunities involving Python data workflows, predictive ML modeling, FastAPI backend development, and responsive modern web platform engineering.'
  }
];
