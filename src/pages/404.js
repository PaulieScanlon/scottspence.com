import { Link } from 'gatsby'
import React from 'react'
// import styled from 'styled-components'
// import { H1, H2, P } from '../components/page-elements'
import { PopularPosts } from '../components/popular-posts'
// import {
//   Link,
//   linkStyle,
//   rainbowAnimation,
// } from '../components/shared-styles'

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//   }
//   &:active {
//     color: ${({ theme }) => theme.colors.primary[500]};
//   }
//   ${linkStyle}
//   ${rainbowAnimation}
// `

export default () => {
  return (
    <>
      <h1>
        That's a nop!
        <span role="img" aria-label="crying face">
          😢
        </span>
      </h1>
      <h2>It looks like that page doesn't exist</h2>
      <p>
        There's plenty more content on the rest of the site, take a
        stroll through my <Link to={`/garden`}>garden</Link>.
      </p>
      <PopularPosts />
    </>
  )
}
