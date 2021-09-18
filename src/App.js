import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter(props) {
  let [count, setCount] = useState(0);
  let clickHandaler = () => {
    count = count + 1;
    setCount(count);
  };

  let dickHandaler = () => {
    count = count - 1;
    setCount(count);
  };

  return (
    <div className="profile">
      <h1>Counter: {count}</h1>
      <button
        onClick={clickHandaler}
        style={{ padding: "10px", cursor: "pointer" }}
      >
        Increase
      </button>
      <button
        onClick={dickHandaler}
        style={{ padding: "10px", cursor: "pointer", marginLeft: "10px" }}
      >
        Dicrease
      </button>
    </div>
  );
}

export default App;

// let profiles = [
//   { name: "Arif-uz-zaman", pro: "React Developer" },
//   { name: "Sumaiya Akter", pro: "Front-End Developer" },
//   {
//     name: "Zaman",
//     pro: "JavaScript Developer",
//   },
// ];

/* <div className="App">
      {profiles.map(p => (
        <Profile name={p.name} pro={p.pro} />
      ))}
    </div> */
