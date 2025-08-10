import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { type AssessmentQuestion } from '@/types/assessment';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AssessmentQuestionProps {
  question: AssessmentQuestion;
  currentQuestion: number;
  totalQuestions: number;
  response: number | string | boolean | null;
  onResponse: (value: number | string | boolean) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

export default function AssessmentQuestion({
  question,
  currentQuestion,
  totalQuestions,
  response,
  onResponse,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious
}: AssessmentQuestionProps) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const renderQuestionInput = () => {
    switch (question.type) {
      case 'likert':
        return (
          <div className="space-y-6">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{question.scale?.minLabel}</span>
              <span>{question.scale?.maxLabel}</span>
            </div>
            <div className="flex justify-center gap-4">
              {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
                <button
                  key={value}
                  onClick={() => onResponse(value)}
                  className={`w-12 h-12 rounded-full font-semibold transition-all ${
                    response === value
                      ? 'bg-primary text-primary-foreground shadow-glow scale-110'
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        );

      case 'mcq':
        return (
          <div className="grid gap-3">
            {question.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => onResponse(option)}
                className={`p-4 text-left rounded-lg border transition-all ${
                  response === option
                    ? 'bg-primary/10 border-primary text-foreground'
                    : 'bg-secondary/50 border-border hover:bg-secondary/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    response === option 
                      ? 'bg-primary border-primary' 
                      : 'border-muted-foreground'
                  }`} />
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        );

      case 'boolean':
        return (
          <div className="flex gap-4 justify-center">
            {[true, false].map((value) => (
              <Button
                key={value.toString()}
                onClick={() => onResponse(value)}
                variant={response === value ? 'assessment' : 'secondary'}
                size="lg"
                className="min-w-24"
              >
                {value ? 'Yes' : 'No'}
              </Button>
            ))}
          </div>
        );

      case 'scale':
        return (
          <div className="space-y-4">
            <div className="flex justify-center">
              <input
                type="range"
                min={question.scale?.min || 0}
                max={question.scale?.max || 10}
                value={response as number || question.scale?.min || 0}
                onChange={(e) => onResponse(parseInt(e.target.value))}
                className="w-full max-w-md"
              />
            </div>
            <div className="text-center text-lg font-semibold">
              {response || question.scale?.min || 0}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {totalQuestions}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Section Badge */}
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-medium rounded-full text-sm">
            {question.section}
          </span>
        </div>

        {/* Question Card */}
        <Card className="p-8 bg-gradient-card border-border/50 shadow-elevated">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-center leading-relaxed">
              {question.question}
            </h2>
            
            {renderQuestionInput()}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="secondary"
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="min-w-24"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <Button
            variant="assessment"
            onClick={onNext}
            disabled={!canGoNext || response === null}
            className="min-w-24"
          >
            {currentQuestion === totalQuestions - 1 ? 'Finish' : 'Next'}
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}