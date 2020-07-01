import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import ILogo from './@interfaces/ILogo'

const Logo = ({siteTitle, tagline = null, displayText = true}: ILogo) => {

    return (
        <StaticQuery
            query={graphql`
            {
                file(relativePath: { eq: "logo.png" }) {
                    childImageSharp {
                        fixed(width: 50) {
                            ...GatsbyImageSharpFixed_noBase64
                        }
                    }
                }
            }
            `}
            render={data => (
            <Link to="/" className="logo">
                <Img
                fadeIn={false}
                fixed={data.file.childImageSharp.fixed}
                style={{
                    marginRight: 15
                }}
                />
                { displayText ? (
                    <div className="text-group">
                        <div className="site-title">{siteTitle}</div>
                        { tagline ? <div className="tagline">{tagline}</div> : null }
                    </div>
                ) : null }
            </Link>
            )}
        />
    )
}

export default Logo