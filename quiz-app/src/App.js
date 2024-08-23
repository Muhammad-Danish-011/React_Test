import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import ScoreCard from './components/ScoreCard';
import './App.css';
import ProgressBar from './components/ProgressBar'; 
import ScoreBar from './components/ScoreBar'; 


import questionsData from './data/questions.json';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const filteredQuestions = selectedDifficulty
    ? questionsData.filter((question) => question.difficulty === selectedDifficulty)
    : [];

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleAnswerOptionClick = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswerRevealed(true);

    if (answer === currentQuestion.correct_answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < filteredQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setCurrentQuestionIndex(0);
    setShowScore(false);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
  };

  const progress = (currentQuestionIndex / filteredQuestions.length) * 100;

  const scorePercentage = (score / (currentQuestionIndex + 1)) * 100;

  const totalQuestions = filteredQuestions.length;
  const remainingQuestions = totalQuestions - (currentQuestionIndex + 1);
  const lowestPossibleScore = (score / totalQuestions) * 100;

  return (
    <div className="App">
      {!selectedDifficulty ? (
        <div className="difficulty-selection">
          <h2>Select Difficulty Level</h2>
          <div className="difficulty-buttons">
            <button onClick={() => handleDifficultyChange('easy')}>Easy</button>
            <button onClick={() => handleDifficultyChange('medium')}>Medium</button>
            <button onClick={() => handleDifficultyChange('hard')}>Hard</button>
          </div>
        </div>
      ) : showScore ? (
        <>
          <ScoreCard score={score} totalQuestions={filteredQuestions.length} />
        </>
      ) : (
        <>
          <ProgressBar progress={progress} /> {/* Add ProgressBar component */}
          <QuestionCard
            question={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={filteredQuestions.length}
            handleAnswerOptionClick={handleAnswerOptionClick}
            selectedAnswer={selectedAnswer}
            isAnswerRevealed={isAnswerRevealed}
            handleNextQuestion={handleNextQuestion}
            difficulty={selectedDifficulty}
          />
        </>
      )}
      <ScoreBar scorePercentage={scorePercentage} lowestPossibleScore={lowestPossibleScore} />
    </div>
  );
}

export default App;