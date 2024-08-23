import React from 'react';

function ProgressBar({ progress }) {
  const containerStyles = {
    height: '20px',
    width: '100%',
    backgroundColor: '#e0e0df',
    borderRadius: '50px',
    margin: '20px 0',
  };

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#4caf50',
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 0.3s ease-in-out',
  };

  const labelStyles = {
    padding: '5px',
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${Math.round(progress)}%`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
