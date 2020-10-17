// import React from 'react'
// import PropTypes from 'prop-types'
// import { graphql, StaticQuery} from 'gatsby'
// import Img from 'gatsby-image'
// import MUBCEventRow from "./MUBCEventRow";
//
// const ScheduleRoll = (props) => {
//     const {data} = props
//     const {edges: posts} = data.allMarkdownRemark
//
//     return (
//         <div className="columns is-multiline">
//             {posts &&
//             posts.map(({node: post}) => (
//                 <div key={post.id}>
//                     <MUBCEventRow
//                         path={post.frontmatter.path}
//                         date={post.frontmatter.eventDate}
//                         title={post.frontmatter.title}
//                         body={post.frontmatter.description}
//                         links={post.frontmatter.link}
//                         image={<Img className="blog__image" fixed={post.frontmatter.featuredImage.childImageSharp.fixed} />}
//                     />
//                 </div>
//             ))}
//         </div>
//     )
// }
//
// ScheduleRoll.propTypes = {
//     data: PropTypes.shape({
//         allMarkdownRemark: PropTypes.shape({
//             edges: PropTypes.array,
//         }),
//     }),
// }
//
// export default () => (
//     <StaticQuery
//         query={graphql`
//       query ScheduleRollQuery {
//         allMarkdownRemark(
//           sort: { order: DESC, fields: [frontmatter___date] },
//           filter: {fileAbsolutePath: {regex: "/markdown/schedule/"  }}
//         ) {
//           edges {
//             node {
//               excerpt(pruneLength: 300)
//               frontmatter {
//               path
//                 title
//                 date(formatString: "MMMM DD, YYYY")
//                 eventDate
//                 description
//                 link
//                 featuredImage {
//           childImageSharp {
//             fixed {
//       ...GatsbyImageSharpFixed
//     }
//           }
//         }
//               }
//             }
//           }
//         }
//       }
//     `}
//         render={(data, count) => <ScheduleRoll data={data} count={count}/>}
//     />
// )