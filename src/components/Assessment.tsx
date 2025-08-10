import { useState, useCallback } from 'react';
import { type AssessmentResponse, type AssessmentState, type AssessmentResults as AssessmentResultsType } from '@/types/assessment';
import { assessmentQuestions } from '@/data/questions';
import { calculateResults } from '@/utils/assessment';
import AssessmentStart from './AssessmentStart';
import AssessmentQuestion from './AssessmentQuestion';
import AssessmentResults from './AssessmentResults';

type AssessmentPhase = 'start' | 'questions' | 'results';

export default function Assessment() {
  const [phase, setPhase] = useState<AssessmentPhase>('start');
  const [state, setState] = useState<AssessmentState>({
    currentSection: 0,
    currentQuestion: 0,
    responses: [],
    startTime: 0,
    sectionTimes: []
  });
  const [results, setResults] = useState<AssessmentResultsType | null>(null);

  const handleStart = useCallback(() => {
    setState({
      currentSection: 0,
      currentQuestion: 0,
      responses: [],
      startTime: Date.now(),
      sectionTimes: []
    });
    setPhase('questions');
  }, []);

  const handleResponse = useCallback((value: number | string | boolean) => {
    const currentQuestionData = assessmentQuestions[state.currentQuestion];
    const response: AssessmentResponse = {
      questionId: currentQuestionData.id,
      value,
      timestamp: Date.now()
    };

    setState(prev => ({
      ...prev,
      responses: [
        ...prev.responses.filter(r => r.questionId !== response.questionId),
        response
      ]
    }));
  }, [state.currentQuestion]);

  const handleNext = useCallback(() => {
    if (state.currentQuestion < assessmentQuestions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    } else {
      // Assessment complete - calculate results
      const assessmentResults = calculateResults(state.responses);
      setResults(assessmentResults);
      setPhase('results');
    }
  }, [state.currentQuestion, state.responses]);

  const handlePrevious = useCallback(() => {
    if (state.currentQuestion > 0) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  }, [state.currentQuestion]);

  const handleRestart = useCallback(() => {
    setPhase('start');
    setState({
      currentSection: 0,
      currentQuestion: 0,
      responses: [],
      startTime: 0,
      sectionTimes: []
    });
    setResults(null);
  }, []);

  const getCurrentResponse = () => {
    const currentQuestionData = assessmentQuestions[state.currentQuestion];
    const response = state.responses.find(r => r.questionId === currentQuestionData.id);
    return response?.value ?? null;
  };

  if (phase === 'start') {
    return <AssessmentStart onStart={handleStart} />;
  }

  if (phase === 'results' && results) {
    return <AssessmentResults results={results} onRestart={handleRestart} />;
  }

  if (phase === 'questions') {
    const currentQuestionData = assessmentQuestions[state.currentQuestion];
    const currentResponse = getCurrentResponse();

    return (
      <AssessmentQuestion
        question={currentQuestionData}
        currentQuestion={state.currentQuestion}
        totalQuestions={assessmentQuestions.length}
        response={currentResponse}
        onResponse={handleResponse}
        onNext={handleNext}
        onPrevious={handlePrevious}
        canGoNext={state.currentQuestion < assessmentQuestions.length}
        canGoPrevious={state.currentQuestion > 0}
      />
    );
  }

  return null;
}