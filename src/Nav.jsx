import { useState } from "react";

function Nav() {
  let [display, setDisplay] = useState(
    "links hide"
  );
  let displayStatus = () => {
    display === "links hide"
      ? setDisplay("links animate__animated animate__fadeIn")
      : setDisplay("links hide");
  };

  return (
    <div className="nav-bar">
      <h1>The Nav Bar</h1>
      <button className="side-menu-btn mobile-view" onClick={displayStatus}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
      <div className={display}>
        <div className="close-btn-container mobile-view">
          <button className="side-menu-close-btn" onClick={displayStatus}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </div>
  );
}

export default Nav;
