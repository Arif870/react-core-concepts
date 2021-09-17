import "./App.css";

function App() {
  return (
    <div className="App">
      <Profile name="Arif-uz-zaman" profession="React Developer" />
      <Profile name="Sumaiya Akter" profession="Front-end Developer" />
      <Profile name="Aysha Begum" profession="House Wife" />
    </div>
  );
}

function Profile(props) {
  return (
    <div className="profile">
      <h1>{props.name}</h1>
      <p>{props.profession}</p>
    </div>
  );
}

export default App;
