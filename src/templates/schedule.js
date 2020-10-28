import React from "react"
import { graphql } from "gatsby"
import MUBCHeader from "../components/MUBCHeader";
import MUBCNavbar from "../components/MUBCNavbar";
import Img from "gatsby-image";
export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const summit = frontmatter.link === 'https://www.eventbrite.com/e/2020-mubc-blockchain-accounting-summit-tickets-125370164537'

  return (
    <div className="blog-post__container">
      <MUBCHeader />
      <MUBCNavbar />
      <div className="schedule-post">
        <div className="schedule-post__header">
          <h1 className="schedule-post__title">{frontmatter.title}</h1>
          <h2 className="schedule-post__date">Date: {frontmatter.eventDate}</h2>
          <br />
          <br />
        </div>
        <div className="schedule-post__body">
          <Img className="schedule-post__image" fluid={frontmatter.featuredImage.childImageSharp.fluid} />
          {summit && <><br/><br/><a className="summit-button" href={frontmatter.link}>Register for the Event</a></>}
          <br />
          <br />
          <p>{frontmatter.description}</p>
          <br />
          <br />
          <br />

          {!summit && <><h4>Links: </h4><a href={frontmatter.link}>{frontmatter.link}</a></>}
        </div>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        eventDate
        link
        description
        featuredImage {
          childImageSharp {
            fluid(maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
