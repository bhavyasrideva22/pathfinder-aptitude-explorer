import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { type AssessmentResults } from '@/types/assessment';
import { 
  Brain, 
  Code, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle, 
  XCircle,
  BookOpen,
  Briefcase,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

interface AssessmentResultsProps {
  results: AssessmentResults;
  onRestart: () => void;
}

export default function AssessmentResults({ results, onRestart }: AssessmentResultsProps) {
  const getRecommendationIcon = () => {
    switch (results.recommended_path) {
      case 'Yes': return <CheckCircle className="h-12 w-12 text-green-500" />;
      case 'Maybe': return <AlertCircle className="h-12 w-12 text-yellow-500" />;
      case 'No': return <XCircle className="h-12 w-12 text-red-500" />;
    }
  };

  const getRecommendationColor = () => {
    switch (results.recommended_path) {
      case 'Yes': return 'text-green-500';
      case 'Maybe': return 'text-yellow-500';
      case 'No': return 'text-red-500';
    }
  };

  const wiscarLabels = {
    will: 'Will & Persistence',
    interest: 'Interest & Passion',
    skill: 'Current Skills',
    cognitive: 'Cognitive Readiness',
    ability_to_learn: 'Learning Ability',
    real_world_alignment: 'Real-World Fit'
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Your Assessment Results</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive analysis of your Data Engineering potential
          </p>
        </div>

        {/* Main Recommendation */}
        <Card className="p-8 bg-gradient-card border-border/50 shadow-elevated">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              {getRecommendationIcon()}
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                Should you learn Data Engineering?{' '}
                <span className={getRecommendationColor()}>
                  {results.recommended_path}
                </span>
              </h2>
              
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground">Confidence Score</p>
                <div className="flex items-center gap-4">
                  <Progress value={results.confidence_score} className="flex-1" />
                  <span className="text-2xl font-bold">{results.confidence_score}%</span>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              {results.insights}
            </p>
          </div>
        </Card>

        {/* Detailed Scores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Psychometric & Technical */}
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Brain className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Core Assessment</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Psychometric Fit</span>
                    <span className="font-semibold">{results.psychometric_fit}%</span>
                  </div>
                  <Progress value={results.psychometric_fit} />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Technical Readiness</span>
                    <span className="font-semibold">{results.technical_readiness}%</span>
                  </div>
                  <Progress value={results.technical_readiness} />
                </div>
              </div>
            </div>
          </Card>

          {/* WISCAR Framework */}
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">WISCAR Analysis</h3>
              </div>
              
              <div className="space-y-3">
                {Object.entries(results.wiscar).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>{wiscarLabels[key as keyof typeof wiscarLabels]}</span>
                      <span className="font-semibold">{value}%</span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Career Matches & Learning Path */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Career Matches */}
          {results.career_match.length > 0 && (
            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-semibold">Career Matches</h3>
                </div>
                
                <div className="space-y-2">
                  {results.career_match.map((career, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-medium">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {/* Learning Path */}
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Recommended Learning Path</h3>
              </div>
              
              <div className="space-y-2">
                {results.learning_path.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <span>{skill}</span>
                    {index < results.learning_path.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Skill Gaps & Alternatives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skill Gaps */}
          {results.skill_gap.length > 0 && (
            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-yellow-500" />
                  <h3 className="text-xl font-semibold">Areas to Improve</h3>
                </div>
                
                <div className="space-y-2">
                  {results.skill_gap.map((gap, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-yellow-500/10 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-yellow-500" />
                      <span>{gap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {/* Alternative Paths */}
          {results.alternative_paths.length > 0 && (
            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-blue-500" />
                  <h3 className="text-xl font-semibold">Alternative Career Paths</h3>
                </div>
                
                <div className="space-y-2">
                  {results.alternative_paths.map((path, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg">
                      <ArrowRight className="h-5 w-5 text-blue-500" />
                      <span>{path}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Want to retake the assessment or explore different areas?
          </p>
          <Button 
            variant="assessment" 
            size="lg" 
            onClick={onRestart}
            className="shadow-glow"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Take Assessment Again
          </Button>
        </div>
      </div>
    </div>
  );
}