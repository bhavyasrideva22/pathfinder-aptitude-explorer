import { AssessmentQuestion } from '@/types/assessment';

export const assessmentQuestions: AssessmentQuestion[] = [
  // Psychometric Section - Interest Scale
  {
    id: 'psycho_1',
    type: 'likert',
    category: 'psychometric',
    section: 'Interest & Motivation',
    question: 'I enjoy building systems more than analyzing data.',
    scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
  },
  {
    id: 'psycho_2',
    type: 'likert',
    category: 'psychometric',
    section: 'Interest & Motivation',
    question: 'I am curious about how data moves between systems.',
    scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
  },
  {
    id: 'psycho_3',
    type: 'likert',
    category: 'psychometric',
    section: 'Interest & Motivation',
    question: 'I prefer working on backend infrastructure over user interfaces.',
    scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
  },
  {
    id: 'psycho_4',
    type: 'likert',
    category: 'psychometric',
    section: 'Interest & Motivation',
    question: 'I find satisfaction in optimizing and automating repetitive tasks.',
    scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
  },
  {
    id: 'psycho_5',
    type: 'likert',
    category: 'psychometric',
    section: 'Interest & Motivation',
    question: 'I often stick with problems until I solve them, even if it takes hours.',
    scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
  },

  // Technical Aptitude Section
  {
    id: 'tech_1',
    type: 'mcq',
    category: 'technical',
    section: 'SQL & Database Knowledge',
    question: 'What does SQL stand for?',
    options: [
      'Structured Query Language',
      'Simple Query Language', 
      'System Query Language',
      'Standard Query Language'
    ]
  },
  {
    id: 'tech_2',
    type: 'mcq',
    category: 'technical',
    section: 'SQL & Database Knowledge',
    question: 'Which SQL command is used to retrieve data from a database?',
    options: ['GET', 'SELECT', 'RETRIEVE', 'FETCH']
  },
  {
    id: 'tech_3',
    type: 'mcq',
    category: 'technical',
    section: 'Programming Concepts',
    question: 'What is the main advantage of using Python for data engineering?',
    options: [
      'Fast execution speed',
      'Rich ecosystem of data libraries',
      'Low memory usage',
      'Built-in database support'
    ]
  },
  {
    id: 'tech_4',
    type: 'mcq',
    category: 'technical',
    section: 'Data Concepts',
    question: 'What does ETL stand for in data engineering?',
    options: [
      'Extract, Transform, Load',
      'Export, Transfer, Link',
      'Encode, Transmit, Log',
      'Enter, Test, Launch'
    ]
  },
  {
    id: 'tech_5',
    type: 'mcq',
    category: 'technical',
    section: 'Data Concepts',
    question: 'Which data format is most efficient for analytical queries?',
    options: ['CSV', 'JSON', 'Parquet', 'XML']
  },

  // WISCAR Framework Section
  {
    id: 'wiscar_1',
    type: 'likert',
    category: 'wiscar',
    section: 'Will & Persistence',
    question: 'I maintain consistent effort even when facing technical challenges.',
    scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
  },
  {
    id: 'wiscar_2',
    type: 'likert',
    category: 'wiscar',
    section: 'Interest & Passion',
    question: 'I actively seek out learning opportunities about data technologies.',
    scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
  },
  {
    id: 'wiscar_3',
    type: 'likert',
    category: 'wiscar',
    section: 'Cognitive Readiness',
    question: 'I can quickly identify patterns and relationships in complex systems.',
    scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
  },
  {
    id: 'wiscar_4',
    type: 'likert',
    category: 'wiscar',
    section: 'Learning Ability',
    question: 'I learn new technical concepts quickly and effectively.',
    scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
  },
  {
    id: 'wiscar_5',
    type: 'likert',
    category: 'wiscar',
    section: 'Real-World Alignment',
    question: 'I would enjoy working with data pipelines and automation daily.',
    scale: { min: 1, max: 5, minLabel: 'Strongly Disagree', maxLabel: 'Strongly Agree' }
  },

  // Aptitude Section - Logical Reasoning
  {
    id: 'apt_1',
    type: 'mcq',
    category: 'aptitude',
    section: 'Logical Reasoning',
    question: 'If A > B and B > C, then:',
    options: ['A < C', 'A > C', 'A = C', 'Cannot determine']
  },
  {
    id: 'apt_2',
    type: 'mcq',
    category: 'aptitude',
    section: 'Pattern Recognition',
    question: 'What comes next in this sequence: 2, 4, 8, 16, ?',
    options: ['24', '32', '28', '20']
  },
  {
    id: 'apt_3',
    type: 'mcq',
    category: 'aptitude',
    section: 'System Thinking',
    question: 'In a data pipeline, if one step fails, what is the best approach?',
    options: [
      'Restart the entire pipeline',
      'Skip the failed step',
      'Implement error handling and retry logic',
      'Process the data manually'
    ]
  },
  {
    id: 'apt_4',
    type: 'mcq',
    category: 'aptitude',
    section: 'Problem Solving',
    question: 'A database query is running slowly. What should you check first?',
    options: [
      'Server hardware',
      'Query structure and indexes',
      'Network connection',
      'Database version'
    ]
  },
  {
    id: 'apt_5',
    type: 'mcq',
    category: 'aptitude',
    section: 'System Thinking',
    question: 'Which approach best describes batch vs streaming data processing?',
    options: [
      'Batch is always faster than streaming',
      'Streaming processes data in real-time, batch processes in scheduled chunks',
      'Batch and streaming are the same thing',
      'Streaming is only for small datasets'
    ]
  }
];

export const sectionInfo = {
  'Interest & Motivation': {
    description: 'Understanding your natural interests and motivations',
    estimatedTime: '3-4 minutes'
  },
  'SQL & Database Knowledge': {
    description: 'Basic database and SQL understanding',
    estimatedTime: '2-3 minutes'
  },
  'Programming Concepts': {
    description: 'General programming knowledge',
    estimatedTime: '1-2 minutes'
  },
  'Data Concepts': {
    description: 'Understanding of data engineering principles',
    estimatedTime: '2-3 minutes'
  },
  'Will & Persistence': {
    description: 'Measuring determination and consistency',
    estimatedTime: '1-2 minutes'
  },
  'Interest & Passion': {
    description: 'Assessing genuine interest in the field',
    estimatedTime: '1-2 minutes'
  },
  'Cognitive Readiness': {
    description: 'Evaluating analytical thinking capabilities',
    estimatedTime: '1-2 minutes'
  },
  'Learning Ability': {
    description: 'Assessing learning agility and adaptability',
    estimatedTime: '1-2 minutes'
  },
  'Real-World Alignment': {
    description: 'Understanding job expectations and fit',
    estimatedTime: '1-2 minutes'
  },
  'Logical Reasoning': {
    description: 'Testing logical thinking and problem-solving',
    estimatedTime: '2-3 minutes'
  },
  'Pattern Recognition': {
    description: 'Evaluating pattern recognition abilities',
    estimatedTime: '1-2 minutes'
  },
  'System Thinking': {
    description: 'Understanding of systems and architecture',
    estimatedTime: '2-3 minutes'
  },
  'Problem Solving': {
    description: 'Practical problem-solving skills',
    estimatedTime: '1-2 minutes'
  }
};