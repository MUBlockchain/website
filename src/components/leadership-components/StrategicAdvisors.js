import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image";

const StrategicAdvisors = (props) => {
    const {data} = props
    const {edges: posts} = data.allMarkdownRemark

    const createAdvisorRows = posts => {
        let postArray = []
        for(let i = 0; i < posts.length; i+=2) {
            postArray.push(
                <div className="leadership-team__row">
                    {posts[i] && <div key={posts[i].id} className="leadership-team__strategic-advisors__column">
                        <Img className="leadership-team__headshot" fluid={posts[i].node.frontmatter.headshot.childImageSharp.fluid} />
                        <p>{posts[i].node.frontmatter.name}</p>
                        <p>{posts[i].node.frontmatter.title}</p>
                        <p>{posts[i].node.frontmatter.description}</p>
                        <a href={posts[i].node.frontmatter.email}>{posts[i].node.frontmatter.email}</a>
                        <a href={posts[i].node.frontmatter.linkedin}>LinkedIn</a>
                    </div> }
                    {posts[i + 1] && <div key={posts[i + 1].id} className="leadership-team__strategic-advisors__column">
                        <Img className="leadership-team__headshot" fluid={posts[i + 1].node.frontmatter.headshot.childImageSharp.fluid} />
                        <p>{posts[i + 1].node.frontmatter.name}</p>
                        <p>{posts[i + 1].node.frontmatter.title}</p>
                        <p>{posts[i + 1].node.frontmatter.description}</p>
                        <a href={posts[i + 1].node.frontmatter.email}>{posts[i + 1].node.frontmatter.email}</a>
                        <a href={posts[i + 1].node.frontmatter.linkedin}>LinkedIn</a>
                    </div>}
                </div>
            )
        }
        return postArray
    }

    return (
        <div className="columns is-multiline">
            {posts && createAdvisorRows(posts)}
        </div>
    )

}

StrategicAdvisors.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
      query AdvisorQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] },
          filter: {
          fileAbsolutePath: {regex: "/markdown/leadership/"  } ,
          frontmatter: {relation: {eq: "advisor" }}
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
              frontmatter {
              relation
              name
              title
              description
              email
              linkedin
              headshot {
           childImageSharp {
             fluid (maxWidth: 223, maxHeight: 223 ) {
       ...GatsbyImageSharpFluid
    }
          }
        }
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <StrategicAdvisors data={data} count={count}/>}
    />
)