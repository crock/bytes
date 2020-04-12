import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import ytIcon from '../images/logo-youtube.svg'

const PageTitle = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
`

const YoutubeButton = styled.a`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    font-weight: normal;
    font-size: 1rem;
    color: black;
    background-color: white;
    border: 2px solid #e2e2e2;
    border-radius: 8px;
    width: 250px;
    height: 40px;
    margin-bottom: 25px;

    img {
        width: 30px;
        height: 30px;
        margin: 0;
    }
`

const TheSwamp = () => {

  return (
    <Layout hero={{src: '/gators-swamp-twitch-banner.png', alt: 'Gators Swamp banner'}}>
      <SEO title="Gators Swamp" description="Learn coding and design through engaging videos and weekly interactive streams on both YouTube and Twitch." />
        <PageTitle>Gators Swamp</PageTitle>
        <p>Learn coding and design through engaging videos and weekly interactive streams on both YouTube and Twitch. Join our Discord community for discussions about the content as well as to get personalized code help and design critiques.</p>
        <YoutubeButton href="https://www.youtube.com/channel/UCAuCehwZTp47BD8RuW1pLIg"><img src={ytIcon} alt="youtube logo"/> Watch on YouTube</YoutubeButton>
        <iframe title="Twitch Channel Embed" src="https://player.twitch.tv/?channel=gators" frameBorder="0" allowFullScreen={true} scrolling="no" height="378" width="620"></iframe>
    </Layout>
  )
}

export default TheSwamp
