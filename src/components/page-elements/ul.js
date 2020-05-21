import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
`

export const StyledUl = styled.ul`
  margin: 0 ${({ theme }) => theme.spacing[4]};
`

export const Ul = props => {
  return (
    <Wrapper>
      <StyledUl {...props}>{props.children}</StyledUl>
    </Wrapper>
  )
}
