import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ichpform = () => {
  const [hrTitles, setHrTitles] = useState([]);
  const [locations, setLocations] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [hrTitleInput, setHrTitleInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [industryInput, setIndustryInput] = useState('');

  useEffect(() => {
    fetchHrTitles();
    fetchLocations();
    fetchIndustries();
  }, []);

  const fetchHrTitles = async () => {
    try {
      const response = await axios.get('/api/hr-titles');
      setHrTitles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await axios.get('/api/locations');
      setLocations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchIndustries = async () => {
    try {
      const response = await axios.get('/api/industries');
      setIndustries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredHrTitles = hrTitles.filter(title =>
    title.toLowerCase().includes(hrTitleInput.toLowerCase())
  );

  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(locationInput.toLowerCase())
  );

  const filteredIndustries = industries.filter(industry =>
    industry.toLowerCase().includes(industryInput.toLowerCase())
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <div
        className="container"
        style={{
          width: '400px',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        <label
          style={{
            marginBottom: '10px',
            color: 'blue',
            fontWeight: 'bold',
          }}
        >
          HR Title:
        </label>
        <input
          type="text"
          value={hrTitleInput}
          onChange={e => setHrTitleInput(e.target.value)}
          className="select"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <select
          className="select"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            display: hrTitleInput.length >= 3 ? 'block' : 'none',
          }}
        >
          {filteredHrTitles.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>

        <label
          style={{
            marginBottom: '10px',
            color: 'blue',
            fontWeight: 'bold',
          }}
        >
          Location:
        </label>
        <input
          type="text"
          value={locationInput}
          onChange={e => setLocationInput(e.target.value)}
          className="select"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <select
          className="select"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            display: locationInput.length >= 3 ? 'block' : 'none',
          }}
        >
          {filteredLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <label
          style={{
            marginBottom: '10px',
            color: 'blue',
            fontWeight: 'bold',
          }}
        >
          Industry:
        </label>
        <input
          type="text"
          value={industryInput}
          onChange={e => setIndustryInput(e.target.value)}
          className="select"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <select
          className="select"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            display: industryInput.length >= 3 ? 'block' : 'none',
          }}
        >
          {filteredIndustries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Ichpform;
