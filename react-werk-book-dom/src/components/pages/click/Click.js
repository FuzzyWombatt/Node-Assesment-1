import React, { useState } from "react";
import "./style.css";

const Click = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(true);
  };

  return (
    <div>
      <h1>Disapearing Box</h1>
      <h3>Click the Box, I dare you</h3>
      {!state && <div className="red-box" onClick={() => handleClick()}></div>}
    </div>
  );
};

export default Click;
