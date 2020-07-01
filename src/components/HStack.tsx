import React from 'react'
import styled from 'styled-components'

interface IHStack {
    children: React.ReactNode
    style?: React.CSSProperties
}

const HStack = ({children, style}: IHStack) => {

    const StyledDiv = styled.div`
        display: flex;
        flex-direction: row;
    `

    return (
        <StyledDiv style={{...style}}>
            {children}
        </StyledDiv>
    )
}

export default HStack;