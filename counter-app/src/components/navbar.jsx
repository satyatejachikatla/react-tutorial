const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <h1>Navbar</h1>
      <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </nav>
  );
};

export default NavBar;
