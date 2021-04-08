import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './One.css';

export const processData = (data) => {
  const newData = [];
  data.forEach((e) =>
    newData.push({ value: e.value * e.multiplier, multiplier: e.multiplier }),
  );
  return newData;
};

const One = () => {
  const [data, setData] = useState([
    { value: 2, multiplier: 2 },
    { value: 3, multiplier: 3 },
  ]);

  const setNewData = () => {
    const newData = processData(data);
    setData(newData);
  };

  const codeString =
    "import React, { useState } from 'react';\r\nimport SyntaxHighlighter from 'react-syntax-highlighter';\r\nimport { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';\r\n\r\nimport './One.css';\r\n\r\nexport const processData = (data) => {\r\n  const newData = [];\r\n  data.forEach((e) =>\r\n    newData.push({ value: e.value * e.multiplier, multiplier: e.multiplier }),\r\n  );\r\n  return newData;\r\n};\r\n\r\nconst One = () => {\r\n  const [showTest, setShowTest] = useState(false);\r\n  const [data, setData] = useState([\r\n    { value: 2, multiplier: 2 },\r\n    { value: 3, multiplier: 3 },\r\n  ]);\r\n\r\n  const setNewData = () => {\r\n    const newData = processData(data);\r\n    setData(newData);\r\n  };\r\n\r\n  return (\r\n    <div className='One'>\r\n      {JSON.stringify(data)}\r\n      <button type='button' onClick={setNewData}>\r\n        Run\r\n      </button>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default One;\r\n";

  const testString =
    "import { processData } from './One.js';\r\n\r\nconst input = [\r\n  { value: Math.random() * 100, multiplier: Math.random() * 100 },\r\n  { value: Math.random() * 100, multiplier: Math.random() * 100 },\r\n];\r\n\r\nconst output = [\r\n  {\r\n    value: input[0].value * input[0].multiplier,\r\n    multiplier: input[0].multiplier,\r\n  },\r\n  {\r\n    value: input[1].value * input[1].multiplier,\r\n    multiplier: input[1].multiplier,\r\n  },\r\n];\r\n\r\ndescribe('ProcessData function', () => {\r\n  it('Output should be correct', () => {\r\n    expect(processData(input)).toEqual(output);\r\n  });\r\n\r\n  it('Should return an array', () => {\r\n    expect(Array.isArray(processData(input))).toBe(true);\r\n  });\r\n});\r\n";

  return (
    <div className='card'>
      <h2>Question one</h2>
      {JSON.stringify(data)}
      <button type='button' onClick={setNewData}>
        Run
      </button>
      <h3>Refactored code</h3>
      <div className='codeDiv'>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeString}
        </SyntaxHighlighter>
        <br />
        <h3 style={{ textAlign: 'center' }}>Test</h3>

        <SyntaxHighlighter language='javascript' style={docco}>
          {testString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default One;
