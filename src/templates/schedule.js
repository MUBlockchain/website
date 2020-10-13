import React from "react"
import { graphql } from "gatsby"
import MUBCHeader from "../components/MUBCHeader";
import MUBCNavbar from "../components/MUBCNavbar";
import Img from "gatsby-image";
export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div className="blog-post__container">
            <MUBCHeader />
            <MUBCNavbar />
            <div className="schedule-post">
                <div className="schedule-post__header">
                    <h1 className="schedule-post__title">{frontmatter.title}</h1>
                    <h2 className="schedule-post__date">Date: {frontmatter.date}</h2>
                    <br/>
                    <br/>
                </div>
                <div className="schedule-post__body">
                    <Img className="schedule__image" fixed={frontmatter.featuredImage.childImageSharp.fixed} />
                    <br/>
                    <br/>
                    <p>{frontmatter.description}</p>
                    <br/>
                    <br/>
                <h4>Links: </h4>
                <a href={frontmatter.link}>{frontmatter.link}</a>
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
        link
        description
        featuredImage {
          childImageSharp {
            fixed {
      ...GatsbyImageSharpFixed
    }
          }
        }
      }
    }
  }
`