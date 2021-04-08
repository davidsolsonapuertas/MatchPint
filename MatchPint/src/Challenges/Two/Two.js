import React, { useEffect, useState } from 'react';

import './Two.css';
import { mockdata } from './mockdata';

const Two = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchedData = mockdata;

    fetchedData.forEach((option) => {
      if (option.name === null && option.team1 && option.team2)
        option.name = `${option.team1} VS ${option.team2}`;
    });

    setData(fetchedData);
    setFilteredData(fetchedData);
  }, []);

  const handleSearch = (e) => {
    const currentSearch = e.target.value;

    currentSearch === ''
      ? setFilteredData(data)
      : setFilteredData(
          data.filter((option) => {
            return option.name
              .toLowerCase()
              .includes(currentSearch.toLowerCase());
          }),
        );
  };

  return (
    <div className='card two'>
      <h2>Question two</h2>
      <div className='search'>
        <input onChange={handleSearch} placeholder='Search...' />
      </div>

      <div className='options'>
        {filteredData.map((option) => (
          <div key={option.name} className='option'>
            {option.image ? (
              <img src={option.image} alt={`${option.name} team`} />
            ) : (
              option.sportLogo && (
                <img src={option.sportLogo} alt={`${option.name} sport logo`} />
              )
            )}
            <br />
            <div>
              <b>{option.name}</b>
              {option.sport && <p>{option.sport}</p>}
              {option.distance && <p>{option.distance}</p>}
              {option.startTime && <p>{option.startTime}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Two;
