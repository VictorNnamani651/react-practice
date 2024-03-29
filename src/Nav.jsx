import { useState } from "react";
// import { logics } from "./logic";

function Nav() {
  let [menuDisplay, setMenuDisplay] = useState("hide");

  let displayStatus = () => {
    if (menuDisplay === "hide") {
      setMenuDisplay("animate__fadeIn");
    } else if (menuDisplay === "animate__fadeIn") {
      setMenuDisplay("animate__fadeOut");
      setTimeout(() => {
        setMenuDisplay("hide");
      }, 1000);
    }
  };

  return (
    <div className="nav-bar">
      <h1>React Blog</h1>
      <button className="menu-btn mobile-view" onClick={displayStatus}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
      <div className={`links ${menuDisplay} animate__animated animate_faster`}>
        <div className="close-btn-container mobile-view">
          <button
            className="menu-close-btn"
            onClick={() => {
              displayStatus();
            }}
          >
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
