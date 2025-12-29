import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { phq9Questions, getScoreInterpretation } from '@/data/screeningQuestions';
import { ScreeningResponse } from '@/types';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Calendar } from 'lucide-react';

const Screening = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<ScreeningResponse[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [showResults, setShowResults] = useState(false);

  const question = phq9Questions[currentQuestion];
  const progress = ((currentQuestion + 1) / phq9Questions.length) * 100;

  const handleNext = () => {
    if (!selectedValue) return;

    const newResponse: ScreeningResponse = {
      questionId: question.id,
      value: parseInt(selectedValue),
    };

    const updatedResponses = [...responses.filter(r => r.questionId !== question.id), newResponse];
    setResponses(updatedResponses);

    if (currentQuestion < phq9Questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedValue('');
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      const prevResponse = responses.find(r => r.questionId === phq9Questions[currentQuestion - 1].id);
      setSelectedValue(prevResponse ? prevResponse.value.toString() : '');
    }
  };

  const totalScore = responses.reduce((sum, r) => sum + r.value, 0);
  const interpretation = getScoreInterpretation(totalScore);

  if (showResults) {
    return (
      <Layout title="Assessment Results" showBack>
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <Card className="animate-scale-in">
            <CardHeader className="text-center pb-4">
              <div className={`inline-flex mx-auto items-center justify-center h-16 w-16 rounded-full mb-4 ${
                interpretation.color === 'success' ? 'bg-success/10' :
                interpretation.color === 'warning' ? 'bg-warning/10' : 'bg-destructive/10'
              }`}>
                {interpretation.color === 'success' ? (
                  <CheckCircle2 className="h-8 w-8 text-success" />
                ) : (
                  <AlertTriangle className={`h-8 w-8 ${
                    interpretation.color === 'warning' ? 'text-warning' : 'text-destructive'
                  }`} />
                )}
              </div>
              <CardTitle className="text-2xl">Your Assessment Results</CardTitle>
              <CardDescription>Based on your responses to the PHQ-9 screening</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Score Display */}
              <div className="text-center p-6 rounded-xl bg-secondary">
                <p className="text-sm text-muted-foreground mb-1">Your Score</p>
                <p className="text-4xl font-bold text-foreground">{totalScore}</p>
                <p className="text-sm text-muted-foreground">out of 27</p>
              </div>

              {/* Severity Badge */}
              <div className="text-center">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  interpretation.color === 'success' ? 'bg-success/10 text-success' :
                  interpretation.color === 'warning' ? 'bg-warning/10 text-warning' : 'bg-destructive/10 text-destructive'
                }`}>
                  {interpretation.severity} Symptoms
                </span>
              </div>

              {/* Recommendation */}
              <div className="p-4 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">Recommendation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {interpretation.recommendation}
                </p>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground text-center">
                This screening is not a diagnosis. Please consult a mental health professional for a comprehensive evaluation.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setResponses([]);
                    setSelectedValue('');
                  }}
                >
                  Retake Assessment
                </Button>
                <Button
                  className="flex-1 gap-2"
                  onClick={() => navigate('/appointment')}
                >
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Mental Health Screening" showBack>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Progress */}
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {currentQuestion + 1} of {phq9Questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="animate-scale-in" key={currentQuestion}>
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup
              value={selectedValue}
              onValueChange={setSelectedValue}
              className="space-y-3"
            >
              {question.options.map((option) => (
                <div key={option.value}>
                  <Label
                    htmlFor={`option-${option.value}`}
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      selectedValue === option.value.toString()
                        ? 'border-primary bg-primary/5 shadow-card'
                        : 'border-border hover:border-primary/30 hover:bg-secondary/50'
                    }`}
                  >
                    <RadioGroupItem
                      value={option.value.toString()}
                      id={`option-${option.value}`}
                    />
                    <span className="text-sm font-medium">{option.label}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {/* Navigation */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedValue}
                className="flex-1 gap-2"
              >
                {currentQuestion === phq9Questions.length - 1 ? 'View Results' : 'Next'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Info */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          This is the PHQ-9 (Patient Health Questionnaire-9), a validated screening tool.
          Your responses are confidential.
        </p>
      </div>
    </Layout>
  );
};

export default Screening;
