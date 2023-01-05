import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [points, setPoints] = useState([]);
  const [removedPoints, setRemovedPoints] = useState([]);

  const handleClick = (event) => {
    setPoints([...points, { x: event.clientX, y: event.clientY }]);
  };

  const handleRedo = () => {
    if (points.length > 0) {
      setRemovedPoints([...removedPoints, points[points.length - 1]]);
      setPoints(points.slice(0, points.length - 1));
    }
  };

  const handleUndo = () => {
    if (removedPoints.length > 0) {
      setPoints([...points, removedPoints[removedPoints.length - 1]]);
      setRemovedPoints(removedPoints.slice(0, removedPoints.length - 1));
    }
  };

  const handleClear = () => {
    setPoints([]);
    setRemovedPoints([]);
  };

  return (
    <div>
      <button onClick={handleRedo}>Redo</button>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleClear}>Clear</button>
      <div className='App' onClick={handleClick}>
        {points.length > 0 &&
          points.map((point, index) => (
            <div
              key={index}
              className="red-circle"
              style={{
                position: 'absolute',
                top: point.y - 5,
                left: point.x - 5,
              }}
            ></div>
          ))}
      </div>      
    </div>
  );
};

export default App;
