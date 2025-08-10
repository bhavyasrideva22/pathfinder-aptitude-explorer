export interface AssessmentQuestion {
  id: string;
  type: 'likert' | 'mcq' | 'boolean' | 'scale';
  category: 'psychometric' | 'technical' | 'wiscar' | 'aptitude';
  section: string;
  question: string;
  options?: string[];
  scale?: {
    min: number;
    max: number;
    minLabel?: string;
    maxLabel?: string;
  };
}

export interface AssessmentResponse {
  questionId: string;
  value: number | string | boolean;
  timestamp: number;
}

export interface AssessmentResults {
  psychometric_fit: number;
  technical_readiness: number;
  wiscar: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability_to_learn: number;
    real_world_alignment: number;
  };
  confidence_score: number;
  recommended_path: 'Yes' | 'Maybe' | 'No';
  learning_path: string[];
  career_match: string[];
  skill_gap: string[];
  alternative_paths: string[];
  insights: string;
}

export interface AssessmentState {
  currentSection: number;
  currentQuestion: number;
  responses: AssessmentResponse[];
  startTime: number;
  sectionTimes: number[];
}