import React from 'react';

function QuestionCard({
  question,
  currentQuestionIndex,
  totalQuestions,
  handleAnswerOptionClick,
  selectedAnswer,
  isAnswerRevealed,
  handleNextQuestion,
  difficulty,
}) {
  const renderStars = () => {
    switch (difficulty) {
      case 'easy':
        return '⭐';
      case 'medium':
        return '⭐⭐';
      case 'hard':
        return '⭐⭐⭐';
      default:
        return '';
    }
  };

  return (
    <div className="question-card">
      <h5>Entertainment: Board Game</h5>
      <h6>Difficulty Level: {renderStars()}</h6>

      <div className="question-section">
        <h4>
          Question {currentQuestionIndex + 1}/{totalQuestions}
        </h4>
        <p>{decodeURIComponent(question.question)}</p>
      </div>

      <div className="answer-section">
        {question.incorrect_answers.concat(question.correct_answer).sort().map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(answer)}
            disabled={isAnswerRevealed}
            className={
              isAnswerRevealed
                ? answer === question.correct_answer
                  ? 'correct-answer'
                  : selectedAnswer === answer
                  ? 'wrong-answer'
                  : ''
                : ''
            }
          >
            {decodeURIComponent(answer)}
          </button>
        ))}
      </div>

      {isAnswerRevealed && (
        <div className="feedback-section">
          {selectedAnswer === question.correct_answer ? (
            <p className="correct-text">Correct!</p>
          ) : (
            <p className="wrong-text">
              Wrong! The correct answer is{' '}
              <strong>{decodeURIComponent(question.correct_answer)}</strong>
            </p>
          )}
          <button className="next-question-btn" onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
