import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const BlogRoll = (props) => {
    const {data} = props
    const {edges: posts} = data.allMarkdownRemark

    return (
        <div className="columns is-multiline">
            {posts &&
            posts.map(({node: post}) => (
                <div className="is-parent column is-6" key={post.id}>
                    <article
                        className={`blog-list-item tile is-child box notification ${
                            post.frontmatter.featuredpost ? 'is-featured' : ''
                        }`}
                    >
                        <header>
                            <p className="post-meta">
                                <Link
                                    className="title has-text-primary is-size-4"
                                    to={post.frontmatter.path}
                                >
                                    {post.frontmatter.title}
                                </Link>
                                <span> &bull; </span>
                                <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                            </p>
                        </header>
                        <p>
                            {post.excerpt}
                            <Img fixed={post.frontmatter.featuredImage.childImageSharp.fixed} />
                            <br/>
                            <br/>
                            <Link className="button" to={post.frontmatter.path}>
                                Keep Reading →
                            </Link>
                        </p>
                    </article>
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
              excerpt(pruneLength: 400)
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                featuredImage {
          childImageSharp {
            fixed(width: 700, height: 400) {
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
        render={(data, count) => <BlogRoll data={data} count={count}/>}
    />
)