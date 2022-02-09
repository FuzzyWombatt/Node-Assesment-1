import React, { useState, useEffect } from "react";

const Change = () => {
  const [inText, setInText] = useState("");
  const [outText, setOutText] = useState("");

  useEffect(() => {
    document.addEventListener("click", () => {
      setOutText(inText);
      setInText("");
    });
    return () => {
      document.removeEventListener("click", () => {
        setOutText(inText);
        setInText("");
      });
    };
  }, [inText]);

  const handleTab = (eve) => {
    if (eve.keyCode === 9) {
      setOutText(inText);
      setInText("");
    }
  };

  const handleInput = (eve) => {
    setInText(eve.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Some data binding</h1>
      <h3>
        Type something in the input box, and then press tab or click outside the
        input box
      </h3>
      <input
        id="change-me"
        style={{ marginBottom: ".5rem", alignSelf: "center" }}
        onClick={(eve) => eve.stopPropagation()}
        onChange={(eve) => handleInput(eve)}
        onKeyDown={(eve) => handleTab(eve)}
        value={inText}
      />
      <div id="output" style={{ alignSelf: "center" }}>
        {outText}
      </div>
    </div>
  );
};

export default Change;
