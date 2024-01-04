import React from 'react';

const TrafficLight = () => {
    const [color, setColor] = React.useState("red");
  
    const handleClick = (clickedColor) => {
      setColor(clickedColor);
    };
  
    return (
      <div className="container mt-5 text-center">
        <div className="pole"></div>
        <div className="traffic-light">
          <div className={`body ${color}`}></div>
          <div
            className={`light red ${color === 'red' ? 'active' : ''}`}
            onClick={() => handleClick('red')}
          ></div>
          <div
            className={`light yellow ${color === 'yellow' ? 'active' : ''}`}
            onClick={() => handleClick('yellow')}
          ></div>
          <div
            className={`light green ${color === 'green' ? 'active' : ''}`}
            onClick={() => handleClick('green')}
          ></div>
        </div>
      </div>
    );
  };
  
  export default TrafficLight;