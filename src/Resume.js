import React, { useEffect, useState } from "react";
import "./resume.css";

const Resume = () => {
  const [resume, setResume] = useState();

  useEffect(() => {
    let data = localStorage && JSON.parse(localStorage.getItem("resume"));
    setResume(data);
  }, []);

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="resume">
      <h1 className="name">{resume && resume.name}</h1>
      <div className="contact">
        <p className="number">{resume && resume.number}</p>
        <p className="email">{resume && resume.email}</p>
      </div>
      <div className="objective">
        <h3 className="objective-head">Objective</h3>
        <p className="objective-text">{resume && resume.objective}</p>
      </div>

      <div>
        <h2 className="head">Skills</h2>
        <ul>
          {resume && resume.skills.split(",").map((skill) => <li>{skill}</li>)}
        </ul>
      </div>

      <div className="section">
        <h2 className="head">Date Of Birth:</h2>
        <p className="text">{resume && resume.dob}</p>
      </div>

      <div className="section">
        <h2 className="head">Gender: </h2>
        <p className="text">{resume && resume.gender}</p>
      </div>

      <div>
        <h2 className="head">Languages:</h2>
        <ul>
          {resume && resume.languages.split(",").map((lang) => <li>{lang}</li>)}
        </ul>
      </div>

      <div className="section">
        <h2 className="head">Date:</h2>
        <p className="text">{resume && resume.date}</p>
      </div>

      <button className="no-print btn" onClick={handlePrint}>Print</button>
    </div>
  );
};

export default Resume;
