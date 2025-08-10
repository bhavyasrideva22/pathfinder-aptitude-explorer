import { useSearchParams, Navigate } from 'react-router-dom';
import AssessmentResults from '@/components/AssessmentResults';
import { type AssessmentResults as AssessmentResultsType } from '@/types/assessment';

const Results = () => {
  const [searchParams] = useSearchParams();
  const resultsData = searchParams.get('data');

  if (!resultsData) {
    return <Navigate to="/" replace />;
  }

  try {
    const results: AssessmentResultsType = JSON.parse(decodeURIComponent(resultsData));
    
    return (
      <AssessmentResults 
        results={results} 
        onRestart={() => window.location.href = '/'} 
      />
    );
  } catch (error) {
    console.error('Error parsing results data:', error);
    return <Navigate to="/" replace />;
  }
};

export default Results;