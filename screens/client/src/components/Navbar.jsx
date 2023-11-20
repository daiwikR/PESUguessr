import {Link} from 'react-router-dom'
import'./navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
    <nav className='Nav'>
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/signup">Sign-Up</Link>
        <span>|</span>
        <Link to="/login">Login</Link>
        <span>|</span>
        <Link to="/gameplay">Play Now</Link>
    </nav>
    </div>
  )
}
