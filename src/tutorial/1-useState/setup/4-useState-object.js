import React, { useState } from "react";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "nayaka",
    age: 24,
    message: "helloow words",
  });
  const clickHandle = () => {
    setPeople({ ...people, message: "new message here" });
  };
  return (
    <>
      <h4>{people.name}</h4>
      <h4>{people.age}</h4>
      <h4>{people.message}</h4>
      <button className="btn" onClick={clickHandle}>
        Update message
      </button>
    </>
  );
};

export default UseStateObject;
