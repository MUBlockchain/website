import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Box } from '@material-ui/core'

const BlogRoll = (props) => {
    debugger
    const { data } = props
    const { edges: posts } = data.allMarkdownRemark
    console.log("Data: ", data)
    return (
        <div className="columns is-multiline">
            {posts &&
                posts.map(({ node: post }) => (
                    <div key={post.id}>
                        <Box boxShadow={20}
                            className={`blog__post ${
                                post.frontmatter.featuredpost ? 'is-featured' : ''
                                }`}
                        >
                            <div className="blog__post-left">
                                <h3><Link
                                    className="title has-text-primary is-size-4"
                                    to={post.frontmatter.path}
                                >
                                    {post.frontmatter.title}
                                </Link></h3>
                                <p>
                                    <span className="subtitle is-size-5 is-block">
                                        {post.frontmatter.date}
                                    </span>
                                </p>
                                <hr className="blog__post-divider" />
                                <p className="blog__post-excerpt">
                                    {post.excerpt}
                                </p>
                                <Link className="button" to={post.frontmatter.path}>
                                    Keep Reading →
                            </Link>
                            </div>
                            <div className="blog__post-right">
                                <Img className="blog__image" fixed={post.frontmatter.thumbnail.childImageSharp.fixed} />
                                <p>Alt Text</p>
                            </div>
                        </Box>
                    </div>
                ))}
        </div>
    )
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
                description
                thumbnail {
                  childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <BlogRoll data={data} count={count} />}
    />
)