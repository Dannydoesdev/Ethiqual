const Navbar = () => {
  return ( 
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="nav-logo">Agil/E/thical</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/companies">Companies</a></li>
        </ul>
      </div>
    </nav>
   );
}
 
export default Navbar;