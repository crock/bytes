import React from 'react'
import styled from 'styled-components'

interface IVStack {
    children: React.ReactNode
    style?: React.CSSProperties
}

const VStack = ({children, style}: IVStack) => {

    const StyledDiv = styled.div`
        display: flex;
        flex-direction: column;
    `

    return (
        <StyledDiv style={{...style}}>
            {children}
        </StyledDiv>
    )
}

export default VStack;