import logo from "./logo.svg";
import "./App.css";

function App() {
  let number = 1234;
  let profile = {
    name: "arif-uz-zaman",
    age: 24,
    pro: "Developer",
  };
  let heading = {
    fontSize: "45px",
    fontWeight: 300,
    color: "orange",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={heading}>
          My name is {profile.name} and i am {profile.pro}
        </h1>
        <p style={{ fontWeight: "200" }}>My favourite number is {number}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
