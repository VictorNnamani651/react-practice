import Nav from "./Nav";
import Home from "./Home";

function App() {
  return (
    <div className="main-div">
      <Nav />
      <div className="content-container">
        <Home />
      </div>
    </div>
  );
}

export default App;
