import "./App.css";

function App() {
  let profiles = [
    { name: "Arif-uz-zaman", pro: "React Developer" },
    { name: "Sumaiya Akter", pro: "Front-End Developer" },
    {
      name: "Zaman",
      pro: "JavaScript Developer",
    },
  ];

  return (
    <div className="App">
      {profiles.map(p => (
        <Profile name={p.name} pro={p.pro} />
      ))}
    </div>
  );
}

function Profile(props) {
  return (
    <div className="profile">
      <h1>{props.name}</h1>
      <p>{props.pro}</p>
    </div>
  );
}

export default App;
