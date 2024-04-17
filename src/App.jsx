import {useState} from "react";
import logo from "./logo.svg";
import "./App.css";

import FormTest from "./formTest";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 */

function App() {
  const [count, setCount] = useState(0);

  function incrCount() {
    setCount((count) => count + 1);
  }

  return (
    <div className="App">
      <main>
        <FormTest />
      </main>
    </div>
  );
}

export default App;
