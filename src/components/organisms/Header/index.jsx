import './header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <NavLink to="/" className='logo-app'>My Blog App</NavLink>
        </header>
    )
}

export default Header