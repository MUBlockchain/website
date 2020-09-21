import React from "react"
import { graphql } from "gatsby"
import MUBCHeader from "../components/MUBCHeader";
import MUBCNavbar from "../components/MUBCNavbar";
export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div className="blog-post__container">
            <MUBCHeader />
            <MUBCNavbar />
            <div className="blog-post">
                <h1>Title: {frontmatter.title}</h1>
                <h2>Date: {frontmatter.date}</h2>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
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
      }
    }
  }
`