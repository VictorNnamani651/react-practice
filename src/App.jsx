import Nav from "./Nav";
import Body from "./body";

function App() {
  return (
    <div className="main-div">
      <Nav />
      <div className="content-container">
        <Body />
      </div>
    </div>
  );
}

export default App;
