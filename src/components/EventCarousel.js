import React from 'react'
import PropTypes from 'prop-types'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const EventCarousel = (props) => {
    const {data} = props
    const {edges: posts} = data.allMarkdownRemark
    return (
        <div id="mubc-home__virtual-blockchain-conference">
            {posts &&
            posts.map(({node: post}) => (
                <div key={post.id}>
                    <Img className="mubc-home__sessions__carousel__image"
                      fluid={{...post.frontmatter.image.childImageSharp.fluid, aspectRatio: 1 }}/>
                </div>
            ))}
        </div>
    )
}

EventCarousel.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
      query EventCarousel {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___position] },
          filter: {fileAbsolutePath: {regex: "/markdown/carousel/"  }}
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
              frontmatter {
              title
                image {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 325, quality: 100)  {
      ...GatsbyImageSharpFluid
      ...GatsbyImageSharpFluidLimitPresentationSize
    }
          }
        }
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <EventCarousel data={data} count={count}/>}
    />
)