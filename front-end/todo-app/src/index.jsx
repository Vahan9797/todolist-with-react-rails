import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
//import Routes from "./routes/index";
import "antd/dist/antd.css";

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById('root'));