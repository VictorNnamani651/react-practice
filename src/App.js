import Nav from "./Nav";
import Home from "./Home";

function App() {
  return (
    <div className="App-header">
      <Nav />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
