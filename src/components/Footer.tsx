import React from 'react'
import SocialIcons from './SocialIcons'
import '../styles/extra.css'

const Footer = () => {

    return (
        <footer className="w-full h-48 mt-16">
          <div className="h-full container mx-auto px-4 md:p-0">
              <SocialIcons />
              <p>&copy;{new Date().getFullYear()} Alex Crocker, Built with <a className="text-green-700 underline" href="https://www.gatsbyjs.org">Gatsby</a></p>
          </div>
        </footer>
    )
}

export default Footer