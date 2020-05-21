import React from 'react'
import Logo from './Logo'
import IHeader from './@interfaces/IHeader'

const Header = ({...props}: IHeader) => {

    return (
        <header className="header bg-green-700 w-full h-24 mb-16">
            <div className="h-full container mx-auto px-4 md:p-0 flex flex-row justify-between items-center">
                <Logo {...props} displayText />
            </div>
        </header>
    )
}

export default Header