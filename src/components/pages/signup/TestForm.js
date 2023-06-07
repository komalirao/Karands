import React, { useState, useEffect } from 'react';
import './TestForm.css';

const TestForm = () => {
  const [city, setCity] = useState('');
  const [title, setTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [industry, setIndustry] = useState('');

  useEffect(() => {
    fetch('/api/data') // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setCity(data.city);
        setTitle(data.title);
        setSkills(data.skills);
        setIndustry(data.industry);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ city, title, skills, industry });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="skills">Skills:</label>
        <input
          type="text"
          id="skills"
          value={skills}
          onChange={(event) => setSkills(event.target.value)}
        />

        <label htmlFor="industry">Industry:</label>
        <input
          type="text"
          id="industry"
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestForm;