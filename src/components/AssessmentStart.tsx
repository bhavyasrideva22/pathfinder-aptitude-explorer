import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Code, Zap, Target, Clock, Users } from 'lucide-react';
import heroImage from '@/assets/hero-data-engineering.jpg';

interface AssessmentStartProps {
  onStart: () => void;
}

export default function AssessmentStart({ onStart }: AssessmentStartProps) {
  const features = [
    {
      icon: Brain,
      title: 'Psychometric Analysis',
      description: 'Evaluate your personality fit and cognitive alignment with data engineering roles'
    },
    {
      icon: Code,
      title: 'Technical Assessment',
      description: 'Test your current knowledge of SQL, programming concepts, and data systems'
    },
    {
      icon: Zap,
      title: 'Aptitude Testing',
      description: 'Measure logical reasoning, pattern recognition, and problem-solving abilities'
    },
    {
      icon: Target,
      title: 'WISCAR Framework',
      description: 'Comprehensive evaluation of Will, Interest, Skill, Cognitive readiness, and Real-world Alignment'
    }
  ];

  const careers = [
    'Data Engineer',
    'Big Data Engineer', 
    'ETL Developer',
    'Cloud Data Engineer',
    'Platform/DataOps Engineer'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                🧭 Pathfinder Assessment
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-hero bg-clip-text text-transparent">
                Should I Learn Data Engineering?
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover if Data Engineering is your perfect career match through our comprehensive, 
              AI-powered assessment that evaluates your psychology, skills, and potential.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>25-30 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Personalized Results</span>
              </div>
            </div>
            
            <Button 
              variant="hero" 
              size="xl" 
              onClick={onStart}
              className="animate-pulse-glow"
            >
              Start Assessment
            </Button>
          </div>
        </div>
      </div>

      {/* What is Data Engineering Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold">What is Data Engineering?</h3>
            <p className="text-lg text-muted-foreground">
              Data Engineering involves building systems and architectures to collect, process, and store data at scale. 
              It's foundational to machine learning, analytics, and business intelligence.
            </p>
          </div>

          {/* Career Paths */}
          <Card className="p-8 bg-gradient-card border-border/50">
            <h4 className="text-xl font-semibold mb-6 text-center">💼 Typical Career Paths</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {careers.map((career, index) => (
                <div 
                  key={index}
                  className="bg-secondary/50 rounded-lg p-4 text-center font-medium"
                >
                  {career}
                </div>
              ))}
            </div>
          </Card>

          {/* Assessment Features */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">🧠 What We'll Evaluate</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-elevated transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Traits */}
          <Card className="p-8 bg-gradient-card border-border/50">
            <h4 className="text-xl font-semibold mb-6 text-center">✨ Traits That Succeed in Data Engineering</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Strong logical reasoning',
                'Problem-solving and troubleshooting',
                'Passion for system architecture', 
                'Patience with complexity and data quality issues',
                'Preference for backend/automation work',
                'Attention to detail and quality'
              ].map((trait, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Ready to Discover Your Data Engineering Potential?</h3>
            <Button 
              variant="assessment" 
              size="xl" 
              onClick={onStart}
              className="shadow-glow"
            >
              Begin Your Assessment Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}