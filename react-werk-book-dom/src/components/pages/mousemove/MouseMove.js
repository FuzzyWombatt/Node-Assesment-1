import React, { useState } from "react";
import "./style.css";

const MouseMove = () => {
  const [hover, setHover] = useState(false);

  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const handleMouse = (eve) => {
    setX(eve.clientX);
    setY(eve.clientY);
  };

  return (
    <div>
      <h1>x and y</h1>
      <h3>move your mouse in the box to see the coordinates of your mouse</h3>
      <div
        id="red-box"
        className="red-box"
        onMouseMove={(eve) => handleMouse(eve)}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && (
          <span>
            ({X},{Y}) screen coordinates
          </span>
        )}
      </div>
    </div>
  );
};

export default MouseMove;
