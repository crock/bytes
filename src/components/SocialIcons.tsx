import React from 'react'

import igIcon from '../images/ig.svg'
import twtrIcon from '../images/twtr.svg'
import ghIcon from '../images/gh.png'
import drbIcon from '../images/drb.png'
import twitchIcon from '../images/twitch.png'
import ytIcon from '../images/yt.png'

import '../styles/extra.css'

const SocialIcons = () => {

    return (
        <div className="social-icons">
            <a href="https://twitter.com/crockerbytes">
                <img width="50" height="50" src={twtrIcon} alt="twitter icon" />
            </a>
            <a href="https://instagram.com/crockerbytes">
                <img width="50" height="50" src={igIcon} alt="instagram icon" />
            </a>
            <a href="https://github.com/crock">
                <img width="50" height="50" src={ghIcon} alt="github icon" />
            </a>
            <a href="https://dribbble.com/croc">
                <img width="50" height="50" src={drbIcon} alt="dribbble icon" />
            </a>
            <a href="https://twitch.tv/gators">
                <img width="50" height="50" src={twitchIcon} alt="twitch icon" />
            </a>
            <a href="https://www.youtube.com/AlexCrocker">
                <img width="50" height="50" src={ytIcon} alt="youtube icon" />
            </a>
        </div>
    )
}

export default SocialIcons