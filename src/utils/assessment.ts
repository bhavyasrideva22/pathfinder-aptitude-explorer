import { AssessmentResponse, AssessmentResults } from '@/types/assessment';

export function calculateResults(responses: AssessmentResponse[]): AssessmentResults {
  const responseMap = new Map(responses.map(r => [r.questionId, r.value]));
  
  // Psychometric calculations
  const psychometricScores = [
    responseMap.get('psycho_1') as number || 1,
    responseMap.get('psycho_2') as number || 1,
    responseMap.get('psycho_3') as number || 1,
    responseMap.get('psycho_4') as number || 1,
    responseMap.get('psycho_5') as number || 1,
  ];
  const psychometric_fit = Math.round((psychometricScores.reduce((a, b) => a + b, 0) / psychometricScores.length) * 20);

  // Technical calculations (MCQ scoring)
  const correctAnswers = {
    'tech_1': 'Structured Query Language',
    'tech_2': 'SELECT',
    'tech_3': 'Rich ecosystem of data libraries',
    'tech_4': 'Extract, Transform, Load',
    'tech_5': 'Parquet'
  };
  
  let technicalScore = 0;
  Object.entries(correctAnswers).forEach(([qId, correct]) => {
    if (responseMap.get(qId) === correct) technicalScore += 20;
  });
  
  // Aptitude calculations
  const aptitudeAnswers = {
    'apt_1': 'A > C',
    'apt_2': '32',
    'apt_3': 'Implement error handling and retry logic',
    'apt_4': 'Query structure and indexes',
    'apt_5': 'Streaming processes data in real-time, batch processes in scheduled chunks'
  };
  
  let aptitudeScore = 0;
  Object.entries(aptitudeAnswers).forEach(([qId, correct]) => {
    if (responseMap.get(qId) === correct) aptitudeScore += 20;
  });

  const technical_readiness = Math.round((technicalScore + aptitudeScore) / 2);

  // WISCAR calculations
  const wiscar = {
    will: Math.round((responseMap.get('wiscar_1') as number || 1) * 20),
    interest: Math.round((responseMap.get('wiscar_2') as number || 1) * 20),
    skill: technical_readiness,
    cognitive: Math.round((responseMap.get('wiscar_3') as number || 1) * 20),
    ability_to_learn: Math.round((responseMap.get('wiscar_4') as number || 1) * 20),
    real_world_alignment: Math.round((responseMap.get('wiscar_5') as number || 1) * 20)
  };

  const confidence_score = Math.round(
    (psychometric_fit + technical_readiness + Object.values(wiscar).reduce((a, b) => a + b, 0) / 6) / 3
  );

  // Determine recommendation
  let recommended_path: 'Yes' | 'Maybe' | 'No' = 'No';
  let insights = '';
  let learning_path: string[] = [];
  let career_match: string[] = [];
  let skill_gap: string[] = [];
  let alternative_paths: string[] = [];

  if (confidence_score >= 80) {
    recommended_path = 'Yes';
    insights = 'You demonstrate excellent potential for Data Engineering with strong technical aptitude and psychological alignment.';
    learning_path = ['Advanced SQL', 'Python for Data', 'Apache Airflow', 'Cloud Platforms (AWS/GCP)', 'Apache Spark'];
    career_match = ['Data Engineer', 'Cloud Data Engineer', 'Big Data Engineer'];
    skill_gap = technical_readiness < 80 ? ['Cloud Technologies', 'Advanced ETL Tools'] : [];
  } else if (confidence_score >= 60) {
    recommended_path = 'Maybe';
    insights = 'You show good potential but may benefit from foundational learning before pursuing Data Engineering roles.';
    learning_path = ['SQL Fundamentals', 'Python Basics', 'Database Design', 'Linux Commands', 'Basic ETL'];
    career_match = ['Junior Data Engineer', 'ETL Developer', 'Data Analyst'];
    skill_gap = ['Programming Fundamentals', 'Database Knowledge', 'System Administration'];
  } else {
    recommended_path = 'No';
    insights = 'Data Engineering may not align well with your current interests and skills. Consider exploring related fields that better match your strengths.';
    learning_path = ['SQL Basics', 'Data Analysis Fundamentals'];
    career_match = [];
    skill_gap = ['Programming', 'Technical Problem Solving', 'System Thinking'];
    alternative_paths = ['Business Intelligence Analyst', 'Data Analyst', 'Database Administrator'];
  }

  return {
    psychometric_fit,
    technical_readiness,
    wiscar,
    confidence_score,
    recommended_path,
    learning_path,
    career_match,
    skill_gap,
    alternative_paths,
    insights
  };
}