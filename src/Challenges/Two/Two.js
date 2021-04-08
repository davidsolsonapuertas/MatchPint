import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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

  const code =
    "import React, { useEffect, useState } from 'react';\r\nimport SyntaxHighlighter from 'react-syntax-highlighter';\r\nimport { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';\r\n\r\nimport './Two.css';\r\nimport { mockdata } from './mockdata';\r\n\r\nconst Two = () => {\r\n  const [data, setData] = useState([]);\r\n  const [filteredData, setFilteredData] = useState([]);\r\n\r\n  useEffect(() => {\r\n    const fetchedData = mockdata;\r\n\r\n    fetchedData.forEach((option) => {\r\n      if (option.name === null && option.team1 && option.team2)\r\n        option.name = `${option.team1} VS ${option.team2}`;\r\n    });\r\n\r\n    setData(fetchedData);\r\n    setFilteredData(fetchedData);\r\n  }, []);\r\n\r\n  const handleSearch = (e) => {\r\n    const currentSearch = e.target.value;\r\n\r\n    currentSearch === ''\r\n      ? setFilteredData(data)\r\n      : setFilteredData(\r\n          data.filter((option) => {\r\n            return option.name\r\n              .toLowerCase()\r\n              .includes(currentSearch.toLowerCase());\r\n          }),\r\n        );\r\n  };\r\n\r\n  return (\r\n    <div className='card two'>\r\n      <h2>Question two</h2>\r\n      <div className='search'>\r\n        <input onChange={handleSearch} placeholder='Search...' />\r\n      </div>\r\n\r\n      <div className='options'>\r\n        {filteredData.map((option) => (\r\n          <div key={option.name} className='option'>\r\n            {option.image ? (\r\n              <img src={option.image} alt={`${option.name} team`} />\r\n            ) : (\r\n              option.sportLogo && (\r\n                <img src={option.sportLogo} alt={`${option.name} sport logo`} />\r\n              )\r\n            )}\r\n            <br />\r\n            <div>\r\n              <b>{option.name}</b>\r\n              {option.sport && <p>{option.sport}</p>}\r\n              {option.distance && <p>{option.distance}</p>}\r\n              {option.startTime && <p>{option.startTime}</p>}\r\n            </div>\r\n          </div>\r\n        ))}\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Two;\r\n";

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
      <SyntaxHighlighter
        language='javascript'
        style={docco}
        className='codeDiv'
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Two;
