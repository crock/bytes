import React from 'react'
import { Link } from "gatsby"

import croc from '../images/logo.png'

const CTACard = () => (
    <div id="order" className="card cta-card"
        style={{
            display: `flex`,
            flexFlow: `row wrap`,
            justifyContent: `center`,
            alignItems: `center`,
            padding: `25px`,
            boxShadow: `rgb(236, 236, 236) 3px 3px 10px 0`,
            borderRadius: `6px`,
        }}
    >
        <img src={croc} alt="crocodile head" style={{ display: `inline-flex`, width: `150px`, height: `150px`, marginRight: `25px` }} />
        <div className="text-group"
            style={{
                flex: `2`,
                display: `flex`,
                flexDirection: `column`
            }}
        >
            <h3>Advertise on Croc Domains!</h3>
            <p>Whether you want to sponsor a blog post or promote a product or service that you think my readers would be interested in, I offer a limited amount of advertising to take advantage of. Get in touch today!</p>
            <Link to="/advertising" style={{
                width: `200px`,
                height: `40px`,
                lineHeight: `40px`,
                borderRadius: `6px`,
                backgroundColor: `#3ead5a`,
                color: `#ffffff`,
                textTransform: `uppercase`,
                textDecoration: `none`,
                textAlign: `center`,
            }}>Tell Me More</Link>
        </div>
        
    </div>
)
  
export default CTACard