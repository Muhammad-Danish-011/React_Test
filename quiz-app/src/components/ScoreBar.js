import React from 'react';

function ScoreBar({ scorePercentage, lowestPossibleScore }) {
  const containerStyles = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40px',
    backgroundColor: '#e0e0df',
    borderRadius: '0 0 10px 10px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '18px',
  };

  const fillerStyles = {
    width: `${scorePercentage}%`,
    height: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 'inherit',
    transition: 'width 0.3s ease-in-out',
  };

  const lowestFillerStyles = {
    width: `${lowestPossibleScore}%`,
    height: '100%',
    backgroundColor: '#ff5722',
    borderRadius: 'inherit',
    position: 'absolute',
    bottom: 0,
    left: 0,
    transition: 'width 0.3s ease-in-out',
    zIndex: -1,
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span>{`Score: ${Math.round(scorePercentage)}%`}</span>
      </div>
      <div style={lowestFillerStyles}>
        <span>{`Lowest Possible Score: ${Math.round(lowestPossibleScore)}%`}</span>
      </div>
    </div>
  );
}

export default ScoreBar;
