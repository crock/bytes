import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 200px;
    height: 150px;
    border-radius: 15px;
    background-color: green;
    padding: 5px;
    margin: 5px;
`

const DomainCard = ({domain}) => {
    const { slug } = domain

    return (
        <Card>
            {slug}
        </Card>
    )
}

export default DomainCard