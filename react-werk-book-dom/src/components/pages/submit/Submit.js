import React, { useState } from "react";

import "./style.css";

const Submit = () => {
  const [appended, newAppend] = useState([]);

  const [nameInput, setName] = useState("");
  const [ageInput, setAge] = useState("");
  const [addressInput, setAddress] = useState("");

  const handleNameChange = (eve) => {
    setName(eve.target.value);
  };

  const handleAgeChange = (eve) => {
    setAge(eve.target.value);
  };

  const handleAddressChange = (eve) => {
    setAddress(eve.target.value);
  };

  const handleSubmit = (eve) => {
    eve.preventDefault();
    newAppend((arr) => [...arr, `${nameInput}, ${ageInput}, ${addressInput}`]);
    console.log(appended);
    setName("");
    setAge("");
    setAddress("");
  };

  const renderItem = (item) => {
    return <div>{item}</div>;
  };

  return (
    <div>
      <h1 className="mb-4">Submit Form Exercise</h1>
      <form
        className="text-center"
        id="submit-me"
        onSubmit={(eve) => handleSubmit(eve)}
      >
        <label className="mr-1">Name:</label>
        <input
          className="mr-2"
          id="name"
          type="text"
          onChange={(eve) => handleNameChange(eve)}
          value={nameInput}
        />
        <label className="mr-1">Age:</label>
        <input
          className="mr-2"
          id="age"
          type="text"
          onChange={(eve) => handleAgeChange(eve)}
          value={ageInput}
        />
        <label className="mr-1">address:</label>
        <input
          className="mr-2"
          id="address"
          type="text"
          onChange={(eve) => handleAddressChange(eve)}
          value={addressInput}
        />
        <button id="button" style={{ marginLeft: ".5rem" }} type="submit">
          Click Me
        </button>
        {/*Key warning. need unique keys*/}
        {appended.map((item) => {
          return renderItem(item);
        })}
      </form>
    </div>
  );
};

export default Submit;
