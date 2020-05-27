import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { H1 } from './page-elements'

export const MugFace = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="mug face image"
      />
      <H1>
        Hello World!
        <span role="img" aria-label="waving hand emoji">
          👋
        </span>
      </H1>
    </>
  )
}
