require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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

    const result = await graphql(`
    {
      allMarkdownRemark(
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
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {}, // additional data can be passed via context
        })
    })
}
