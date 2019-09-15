import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DomainCollection = ({ pageContext }) => {
    const { domains } = pageContext

    return (
        <Layout>
            <SEO title="My Domains" />
            <h1>My Domain Collection</h1>

            {
                domains.map(domain => (
                    <article className="card domain-card" id={`domain-${domain.id}`} key={domain.id}
                        style={{
                            display: `flex`,
                            flexDirection: `column`,
                            justifyContent: `flex-start`,
                            alignItems: `flex-start`,
                            padding: `25px`,
                            boxShadow: `rgb(236, 236, 236) 3px 3px 10px 0`,
                            borderRadius: `6px`,
                        }}
                    >
                        <h2 style={{margin: 0}}>{domain.title}</h2>
                        <Link to={`/domains/${domain.title}`}
                            style={{
                                width: `200px`,
                                height: `40px`,
                                lineHeight: `40px`,
                                borderRadius: `6px`,
                                backgroundColor: `#3ead5a`,
                                color: `#ffffff`,
                                textTransform: `uppercase`,
                                textDecoration: `none`,
                                textAlign: `center`,
                                marginTop: `25px`,
                            }}
                        >Read More</Link>
                    </article>
                ))
            }
            
        </Layout>
    )
}

export default DomainCollection