import React from 'react';

function ScoreCard({ score, totalQuestions }) {
  const buttonStyles = {
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
    fontSize: '16px',
  };

  return (
    <div className="score-card">
      <h1>Your Score</h1>
      <p>
        {score} out of {totalQuestions}
      </p>
      <button style={buttonStyles} onClick={() => window.location.reload()}>
        Restart Quiz
      </button>
    </div>
  );
}

export default ScoreCard;
