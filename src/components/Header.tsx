import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <nav className="header-container">
            <ul>
                <li>
                    <Link to="/">TM</Link>
                </li>
                <li>
                    <Link to="/astro">astro</Link>
                </li>
                <li>
                    <Link to="/math">math</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header