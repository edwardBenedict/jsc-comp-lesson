import "./App.css";
import ClassComponent from "./components/ClassComp";
import FuncComp from "./components/FuncComp";

function App() {
  const age = 35;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Age: {age}</h1>
        <ClassComponent old={age} />
        <FuncComp old={age} />
      </header>
    </div>
  );
}

export default App;
