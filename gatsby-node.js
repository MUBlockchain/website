/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions
    // Check if the page is a localized 404
    if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
        const oldPage = { ...page }
        // Get the language code from the path, and match all paths
        // starting with this code (apart from other valid paths)
        const langCode = page.path.split(`/`)[1]
        page.matchPath = `/${langCode}/*`
        // Recreate the modified page
        deletePage(oldPage)
        createPage(page)
    }
}

const path = require(`path`);

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions;

    const blogPostTemplate = path.resolve(`src/templates/blog.js`);
    const schedulePostTemplate = path.resolve(`src/templates/schedule.js`);

    const blogResult = await graphql(`
    {
      allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/markdown/blog/"  }}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

    const scheduleResult = await graphql(`
    {
      allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/markdown/schedule/"  }}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

    // Handle errors
    if (blogResult.errors || scheduleResult.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return
    }

    blogResult.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {}, // additional data can be passed via context
        })
    })

    scheduleResult.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.frontmatter.path,
            component: schedulePostTemplate,
            context: {}, // additional data can be passed via context
        })
    })
}
