import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './Three.css';

function Three() {
  const promises =
    "const promise = new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      resolve('Resolved!');\r\n      reject(\r\n        \"This won't matter! Once a promise is resolved or rejected, it cannot be undone\",\r\n      );\r\n    }, 1000);\r\n  });\r\n\r\n  promise\r\n    .then((data) =>\r\n      console.log(data + '<= The data will be the first argument passed'))\r\n    .catch((data) => console.log('Whoops, an error has ocurred' + data))\r\n    .finally(() => console.log('Whis will run at the end, no matter what.'));";

  const asyncawait =
    "const promise = new Promise((resolve, reject) => {\r\n      setTimeout(() => {\r\n        resolve('Resolved!');\r\n        reject(\r\n          \"This won't matter! Once a promise is resolved or rejected, it cannot be undone\",\r\n        );\r\n      }, 1000);\r\n    });\r\n\r\n    const data = await promise;\r\n    console.log(data + '<= The data will be the first argument passed');";

  return (
    <div className='card three'>
      <h2>Question three</h2>
      <p>
        A promise in JavaScript is like a promise in real life. In JS, it will
        be an object which can be in three different status: fulfilled, pending
        or rejected. <br />
        It can be created manually through <code>new Promise()</code> or it can
        be generated as a consequence of something else, such as a fetch
        request. <br /> <br />
        Because JavaScript is synchronous and single threaded, there will be
        situations in which we need something to run in the background or in the
        browser API without it blocking our code. For this reason, they solve a
        synchronicity problem. <br /> <br />
        The object will have methods such as <code>.then()</code>, which we can
        use to tell JS what to do once the promise is successful, or{' '}
        <code>.catch()</code>, to tell JS what to do if the promise is
        unsuccessful. Once resolved or rejected, the callbacks in the{' '}
        <code>.then or .catch()</code> will be placed in the microtask queue and
        run once the event loop detects that there is nothing in the call stack.
        <br />
        <br />
        The syntax for promises is quite visual and clear: the callback that we
        pass to <code>.then()</code> will run once there's nothing in the call
        stack and the promise is resolved. The callback that we pass to{' '}
        <code>.catch()</code> will run once there's nothing in the call stack
        and the promise is rejected. the callback that we pass to
        <code>.finally()</code> will run once there's nothing in the call stack
        and the promise is resolved or rejected. It is very visual because these
        properties can be chained.
      </p>
      <SyntaxHighlighter
        language='javascript'
        style={docco}
        className='codeDiv'
      >
        {promises}
      </SyntaxHighlighter>
      <p>
        After generators were released in a newer version of JS, we can also use{' '}
        <code>async/await</code>, which will 'pause' the code until the promise
        is resolved or rejected. It won't make error handling so easy, but it is
        still pretty clear, visual and easy to implement.
      </p>
      <SyntaxHighlighter
        language='javascript'
        style={docco}
        className='codeDiv'
      >
        {asyncawait}
      </SyntaxHighlighter>
    </div>
  );
}

export default Three;
