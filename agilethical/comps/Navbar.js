import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <Link href='/'><a><Image src='/logo.png' width={128} height={128} /></a></Link>
        </div>
        {/* <ul id="nav-ul" className=""> */}
        <Link href='/'><a>Home</a></Link>
        <Link href="/companies"><a>Companies</a></Link>
        <Link href="/jobs"><a>Jobs</a></Link>
        <Link href="/about"><a>About</a></Link>
          {/* <Link href="/companies"><a>Companies</a></Link> */}
        {/* </ul> */}
    </nav>
   );
}
 
export default Navbar;