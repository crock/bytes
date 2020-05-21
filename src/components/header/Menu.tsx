import React from 'react'
import { Link } from 'gatsby'
import menuLinks from '../../data/menu-links.json'

const Menu = () => {


    return (
        <nav className="flex flex-col md:flex-row">
            {
                menuLinks.map(link => (
                    link.external ? <a key={link.order} href={link.url}>{link.label}</a> : <Link key={link.order} to={link.url}>{link.label}</Link>
                ))
            }
        </nav>
    )
}

export default Menu