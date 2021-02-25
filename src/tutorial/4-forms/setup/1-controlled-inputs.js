import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const person = { id: new Date().getTime().toString(), name, email };
      setPeople((people) => {
        return [...people, person];
      });
      setEmail("");
      setName("");
    } else {
      console.log("Input empty");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Name :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Email :</label>
            <input
              type="email"
              name=""
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Add Person
          </button>
        </form>
        {people.map((person) => {
          const { id, name, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
