// App.js

import React, { useState } from 'react';
import './App.css';

const VisualizationBox = () => {
  // Placeholder for future visualizations
  return <div className="visualization-box"></div>;
};

const App = () => {
  const [isRunning, setIsRunning] = useState(false);

  const handleButtonClick = () => {
    // Toggle the state when the button is clicked
    setIsRunning((prevState) => !prevState);
  };

  return (
    <div className="container">
      {/* Visualization Box Component */}
      <VisualizationBox />

      {/* Button Container */}
      <div className="button-container">
        {/* Replace the button text and onClick handler with your specific needs */}
        <button
          className={`button ${isRunning ? 'running' : ''}`}
          onClick={handleButtonClick}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button className="button right" onClick={() => handleButtonClick('Function 1')}>
          Function 1
        </button>
        <button className="button right" onClick={() => handleButtonClick('Function 2')}>
          Function 2
        </button>
      </div>
    </div>
  );
};

export default App;
