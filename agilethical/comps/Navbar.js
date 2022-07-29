import Link from 'next/link'

const Navbar = () => {
  return ( 
    <nav>
      <div className="nav">
        {/* <a href="#" className="nav-logo">Agil/E/thical</a> */}
        <ul id="nav-ul" className="">
          <Link href='/'><li><a>Home</a></li></Link>
          <Link href="/about"><li><a>About</a></li></Link>
          <Link href="/companies"><li><a>Companies</a></li></Link>
        </ul>
      </div>
    </nav>
   );
}
 
export default Navbar;