import React, { useState } from "react";
import "./resumeForm.css";

const ResumeForm = () => {
  // resume buillder app
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [objective, setObjective] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]);
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState("");
  const [date, setDate] = useState(new Date().toDateString());

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      number,
      objective,
      email,
      skills,
      dob,
      gender,
      languages,
      date,
    };
    console.log(data);

    localStorage.setItem("resume", JSON.stringify(data, 2, 0));
  };

  return (
    <div className="form no-print" >
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="number">Number</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="objective">Objective</label>
          <input
            type="text"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            className="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="dob">Date Of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="gender">Gender</label>
          <select
            value={gender}
            className="genderSelect"
            name="gender"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            value={skills}
            placeholder="Eg: Js,Html"
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="language">Language</label>
          <input
            type="text"
            value={languages}
            placeholder="Eg: Hindi,English"
            onChange={(e) => setLanguages(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="date">Date</label>
          <input type="text" value={date} />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ResumeForm;
