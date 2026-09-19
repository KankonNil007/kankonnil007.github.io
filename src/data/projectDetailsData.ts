export interface ProjectDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  categoryLabel: string;
  tagline: string;
  problemStatement: string;
  methodology: string;
  architectureHighlights: string[];
  results: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  notice?: string;
}

export const projectDetailsMap: Record<string, ProjectDetail> = {
  'greensort-waste-classifier': {
    slug: 'greensort-waste-classifier',
    title: 'GreenSort – Automated Deep Learning Waste Classifier',
    metaTitle: 'GreenSort Waste Classifier | CNN Image Classification | Kankon Mondal',
    metaDescription: 'Automated deep learning waste classification system categorizing organic and recyclable waste with 92.04% test accuracy using CNNs, TensorFlow, and FastAPI.',
    canonicalUrl: 'https://kankon.dev/projects/greensort-waste-classifier/',
    categoryLabel: 'Deep Learning / Computer Vision',
    tagline: 'Deep convolutional neural network classifying municipal waste into organic and recyclable streams with 92.04% test accuracy.',
    problemStatement: 'Improper municipal waste segregation causes severe landfill overflow and contamination of recyclable materials. Automated, low-latency visual sorting is vital to relieve human sorting burdens and enhance recycling throughput.',
    methodology: 'Built and trained a 4-stage convolutional neural network (CNN) in TensorFlow/Keras on a curated dataset of 25,077 real-world images. Replaced heavy dense layers with GlobalAveragePooling2D, reducing model parameter count by 99.3% while maintaining high discriminatory feature representation. Deployed with an asynchronous FastAPI inference service featuring image preprocessing, batch predictions, and automated Swagger OpenAPI documentation.',
    architectureHighlights: [
      '4-stage convolutional feature extraction hierarchy with batch normalization and dropout regularization',
      'GlobalAveragePooling2D topology slashing total model parameters by 99.3% to enable lightweight edge inference',
      'Asynchronous FastAPI REST endpoints processing image payloads with sub-50ms inference latency',
      'Interactive client dashboard supporting real-time single-item uploads and multi-file batch image classification'
    ],
    results: [
      '92.04% test classification accuracy across unseen evaluation sets',
      'Trained and validated on 25,077 diverse real-world waste images',
      'Sub-50ms CPU inference latency per image on containerized deployments',
      'Production API and web interface deployed live on Render'
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'FastAPI', 'NumPy', 'OpenCV', 'Render', 'Docker'],
    githubUrl: 'https://github.com/KankonNil007/GreenSort-Waste-Classifier',
    demoUrl: 'https://greensort-waste-classifier.onrender.com/',
    notice: 'Hosted on Render free tier (may take ~20s to wake up on initial request).'
  },
  'heart-disease-prediction': {
    slug: 'heart-disease-prediction',
    title: 'Heart Disease Risk Prediction Machine Learning Pipeline',
    metaTitle: 'Heart Disease Risk Prediction | Machine Learning Pipeline | Kankon Mondal',
    metaDescription: 'End-to-end machine learning classification project evaluating cardiovascular risk indicators using Scikit-Learn, data preprocessing, and interactive Streamlit UI.',
    canonicalUrl: 'https://kankon.dev/projects/heart-disease-prediction/',
    categoryLabel: 'Machine Learning / Data Science',
    tagline: 'Preventative cardiovascular risk indicator evaluation pipeline implementing statistical preprocessing, Scikit-Learn estimators, and interactive risk scoring.',
    problemStatement: 'Early screening of cardiovascular disease risk markers allows healthcare analysts and practitioners to prioritize lifestyle interventions and specialist consultations before severe symptoms emerge. This engineering project focuses on exploratory data analysis and predictive model benchmarking.',
    methodology: 'Implemented an end-to-end supervised machine learning classification pipeline. The workflow encompasses outlier detection, median imputation for missing biometric markers, feature standard scaling (StandardScaler), and train-test stratification. Multiple binary classifiers (Logistic Regression, Random Forest, and Support Vector Classifiers) were cross-validated and evaluated using precision, recall, and ROC-AUC metrics.',
    architectureHighlights: [
      'Exploratory data analysis identifying correlation heatmaps among age, blood pressure, cholesterol, and maximum heart rate',
      'Robust data preprocessing pipeline handling categorical encoding and numerical feature scaling',
      'Comparative estimator benchmarking across linear, ensemble, and margin-based classification algorithms',
      'Interactive risk parameter calculator web application allowing customized feature input evaluation'
    ],
    results: [
      'Rigorous model evaluation achieving strong ROC-AUC discrimination across cross-validation folds',
      'Clear identification of leading risk factor weightings via feature importance analysis',
      'Functional interactive web application deployed live on Render with instant scoring response',
      'Educational disclaimer strictly framing the tool as a predictive engineering study rather than a diagnostic device'
    ],
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Streamlit', 'Render'],
    githubUrl: 'https://github.com/KankonNil007/Heart-Disease-Prediction',
    demoUrl: 'https://heart-disease-prediction-z7ub.onrender.com',
    notice: 'Hosted on Render free tier (may take ~20s to wake up on initial request).'
  },
  'e-lab': {
    slug: 'e-lab',
    title: 'E-Lab – Interactive Browser-Based Engineering Laboratory',
    metaTitle: 'E-Lab – Interactive Engineering Laboratory | Circuit Simulation | Kankon Mondal',
    metaDescription: 'Interactive engineering laboratory for ECE students to simulate circuits, signals, Fourier series, and digital logic gates with KaTeX typography.',
    canonicalUrl: 'https://kankon.dev/projects/e-lab/',
    categoryLabel: 'ECE Simulation / Systems',
    tagline: 'Comprehensive browser-based engineering laboratory for circuit analysis, harmonic signal decomposition, and digital logic gate simulation.',
    problemStatement: 'Undergraduate engineering education frequently detaches mathematical theory from intuitive experimentation because physical laboratory access is limited and traditional desktop SPICE simulation software is heavy and non-interactive.',
    methodology: 'Engineered an entirely client-side, zero-dependency engineering simulation platform using modern TypeScript, React, and Vite. Designed mathematical visualization models using Recharts and integrated KaTeX typography for rendered formulas. Implemented real-time simulation algorithms for semiconductor diode load lines, transient differential equations for RLC circuits, Fourier harmonic series approximations showing Gibbs phenomenon, and TTL 74LS digital logic gates with propagation delay models.',
    architectureHighlights: [
      'Circuit Analysis Suite: DC V-I load line curves, RC/RL transient charging/discharging curves, and RLC series resonance sweeps',
      'Signals & Systems Visualizer: Real-time Fourier series square/sawtooth synthesis illustrating Gibbs phenomenon and graphical convolution',
      'Digital Electronics: Interactive logic gate simulator (AND, OR, NOT, NAND, NOR, XOR, XNOR) with truth table verification and propagation delays',
      'Offline AI engineering assistant, global command palette (Ctrl+K), and responsive dark mode interface with zero backend runtime requirements'
    ],
    results: [
      'Sub-millisecond client-side differential solver execution with zero server latency',
      'Deployed globally via GitHub Pages with full offline PWA-grade caching',
      'Adopted by KUET ECE engineering peers as a supplementary laboratory study aid',
      'Complete test suites and responsive typography across desktop, tablet, and mobile browsers'
    ],
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'KaTeX', 'Recharts', 'Zustand', 'GitHub Pages'],
    githubUrl: 'https://github.com/KankonNil007/E-Lab',
    demoUrl: 'https://kankonnil007.github.io/E-Lab/'
  },
  'kuet-ece': {
    slug: 'kuet-ece',
    title: 'KUET ECE Materials Hub',
    metaTitle: 'KUET ECE Materials Hub | Academic Resource Portal | Kankon Mondal',
    metaDescription: 'Centralized digital library and academic portal for all 8 undergraduate semesters of Electronics & Communication Engineering at KUET.',
    canonicalUrl: 'https://kankon.dev/projects/kuet-ece/',
    categoryLabel: 'Web Platform / Academic Resource',
    tagline: 'Centralized digital library and academic portal archiving lecture notes, laboratory sheets, and question banks for 8 semesters of KUET ECE.',
    problemStatement: 'Undergraduate engineering students previously faced fragmented lecture notes, lost exam archives, and scattered lab manuals across various messaging groups and cloud drives.',
    methodology: 'Structured a multi-tier academic resource repository categorized by academic year, semester, and course code. Developed a fast, responsive static portal with instant search and intuitive navigation.',
    architectureHighlights: [
      'Structured categorization covering 8 semesters of core ECE and foundational engineering disciplines',
      'Instant client-side search filtering course syllabi, lab sheets, and past question papers',
      'Accessible, mobile-optimized interface with minimal layout footprint and zero build overhead'
    ],
    results: [
      'Serving KUET ECE undergraduates with centralized access to essential coursework resources',
      'Zero downtime static delivery on GitHub Pages',
      'Maintained with continuous contributions and updated course archives'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'KUET ECE'],
    githubUrl: 'https://github.com/KankonNil007/KUET-ECE',
    demoUrl: 'https://kankonnil007.github.io/KUET-ECE/'
  },
  'cs50x': {
    slug: 'cs50x',
    title: 'CS50x CS Solutions & Problem Sets',
    metaTitle: 'CS50x CS Solutions & Problem Sets | Harvard Computer Science | Kankon Mondal',
    metaDescription: 'Rigorous algorithmic problem sets and solutions for Harvard University CS50x curriculum covering C memory management, algorithms, and data structures.',
    canonicalUrl: 'https://kankon.dev/projects/cs50x/',
    categoryLabel: 'Computer Science / Algorithms',
    tagline: 'Algorithmic problem sets, data structure implementations, and low-level memory management solutions for Harvard University CS50x.',
    problemStatement: 'Mastering fundamental computer science requires building algorithmic efficiency intuitions, managing memory at the byte level in compiled languages, and designing modular systems.',
    methodology: 'Solved and documented all problem sets across Harvard University premier introductory computer science program. Implementations explore pointer arithmetic, manual heap allocation with malloc/free, asymptotic complexity analysis (Big-O), binary search trees, hash tables, and full-stack web integration.',
    architectureHighlights: [
      'Low-level C implementations: memory leak audits using valgrind, bitwise manipulation, and custom hash collision handling',
      'Sorting algorithm comparative benchmarking: Merge Sort, Quick Sort, Bubble Sort, and Selection Sort',
      'Modular transition from low-level systems programming in C to modern scripting in Python and database design with SQL'
    ],
    results: [
      '29+ stars on GitHub from international students studying CS50x problem sets',
      'Clean, thoroughly commented source code with asymptotic complexity annotations',
      'Awarded the official Harvard CS50x Verified Certificate of Completion'
    ],
    technologies: ['C', 'Python', 'SQL', 'Algorithms', 'Data Structures', 'Linux CLI'],
    githubUrl: 'https://github.com/KankonNil007/CS50x-2026'
  }
};
