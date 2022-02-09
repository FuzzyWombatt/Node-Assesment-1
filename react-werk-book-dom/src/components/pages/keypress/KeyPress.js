import React, { useState, useEffect } from "react";
import "./style.css";

const KeyPress = () => {
  const [key, setKey] = useState("");

  const handleKeyPress = (eve) => {
    if (eve.key === " ") {
      setKey(`You've pressed the "space" key. It's key code is ${eve.keyCode}`);
    } else {
      setKey(
        `You've pressed the "${eve.key}" key. It's key code is ${eve.keyCode}`
      );
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", (eve) => {
      handleKeyPress(eve);
    });
    return () => {
      document.removeEventListener("keypress", (eve) => handleKeyPress(eve));
    };
  }, []);

  return (
    <div className="text-center">
      <h1>Key Code Translator</h1>
      <h3>Press any key, and see what it's key code is</h3>
      <div>{key}</div>
    </div>
  );
};

export default KeyPress;
