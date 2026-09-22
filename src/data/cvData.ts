export interface CVProject {
  title: string;
  period: string;
  tech: string[];
  points: string[];
}

export interface CVCertification {
  title: string;
  issuer: string;
}

export interface CVSkillGroup {
  group: string;
  skills: string[];
}

export interface CVData {
  name: string;
  field: string;
  institution: string;
  location: string;
  email: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    period: string;
    coursework: string;
  };
  projects: CVProject[];
  skillGroups: CVSkillGroup[];
  certifications: CVCertification[];
  researchInterests: string[];
  languages: string[];
  links: Array<{
    label: string;
    url: string;
  }>;
  pdfUrl: string;
  pdfFileName: string;
}

export const cvData: CVData = {
  name: 'KANKON MONDAL',
  field: 'ELECTRONICS & COMMUNICATION ENGINEERING',
  institution: 'Khulna University of Engineering & Technology (KUET)',
  location: 'Khulna, Bangladesh',
  email: 'kankonmondal89@gmail.com',
  website: 'https://kankon.dev',
  linkedin: 'https://www.linkedin.com/in/kankon-mondal',
  github: 'https://github.com/KankonNil007',
  summary:
    'ECE undergraduate at KUET with interests in Machine Learning, Deep Learning, and Data Science. Experienced in Python, ML, computer vision, and backend development, with hands-on experience building and deploying practical projects.',
  education: {
    degree: 'B.Sc. in Electronics & Communication Engineering',
    institution: 'Khulna University of Engineering & Technology (KUET)',
    period: 'Sep 2025 – Present',
    coursework: 'Analog Electronics, Signals and Systems, Machine Learning.... etc'
  },
  projects: [
    {
      title: 'GreenSort - Waste Classification System',
      period: 'Apr 2026 – Jun 2026',
      tech: ['Deep Learning', 'TensorFlow/Keras', 'CNN', 'Computer Vision'],
      points: [
        'Developed a CNN-based binary image classification model for waste classification.',
        'Trained on 25,000+ images with 224×224×3 input dimensions.',
        'Achieved 92.04% test accuracy and 0.92 F1-score.'
      ]
    },
    {
      title: 'Heart Disease Risk Analyzer',
      period: 'Dec 2025 – Jan 2026',
      tech: ['Machine Learning', 'Scikit-learn', 'Python', 'FastAPI'],
      points: [
        'Developed a machine learning model for heart disease risk prediction using clinical features.',
        'Performed data preprocessing, feature preparation, model training, and evaluation.',
        'Achieved approximately 87% accuracy and compared multiple classification algorithms.'
      ]
    }
  ],
  skillGroups: [
    {
      group: 'Languages',
      skills: ['Python', 'C']
    },
    {
      group: 'Data Science',
      skills: ['NumPy', 'Pandas']
    },
    {
      group: 'ML / Frameworks',
      skills: ['Scikit-learn', 'TensorFlow/Keras']
    },
    {
      group: 'Core Domain',
      skills: ['Machine Learning']
    },
    {
      group: 'Version Control',
      skills: ['Git / GitHub']
    },
    {
      group: 'Simulation & Tools',
      skills: ['MATLAB', 'Multisim']
    }
  ],
  certifications: [
    {
      title: 'CS50x - Introduction to Computer Science',
      issuer: 'Harvard University'
    },
    {
      title: 'Introduction to Data Science in Python',
      issuer: 'University of Michigan'
    },
    {
      title: 'Applied Python Data Visualization',
      issuer: 'University of Michigan'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI and Stanford Online'
    }
  ],
  researchInterests: [
    'Machine Learning',
    'Deep Learning',
    'Embedded Systems',
    'Computer Vision',
    'Signal Processing',
    'Electronics and Communication'
  ],
  languages: ['English', 'Bangla'],
  links: [
    { label: 'Portfolio', url: 'https://kankon.dev' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kankon-mondal' },
    { label: 'GitHub', url: 'https://github.com/KankonNil007' }
  ],
  pdfUrl: '/Kankon_Mondal_CV.pdf',
  pdfFileName: 'Kankon_Mondal_CV.pdf'
};
