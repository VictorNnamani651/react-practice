function Nav() {
  return (
    <div className="nav-bar">
      <h1>The Nav Bar</h1>
      <button className="side-menu-btn mobile-view">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
      <div className="links desktop-vie">
        <div className="close-btn-container mobile-view">
          <button className="side-menu-close-btn">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </div>
  );
}

export default Nav;
