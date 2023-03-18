function Nav() {
  return (
    <div className="nav-bar">
      <h1>The Nav Bar</h1>

      <i class="fa fa-bars side-menu-btn mobile-view" aria-hidden="true"></i>

      <div className="links desktop-vie">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </div>
  );
}

export default Nav;
