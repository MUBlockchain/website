const path = require(`path`);

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions;

    const blogPostTemplate = path.resolve(`src/templates/blog.js`);
    const schedulePostTemplate = path.resolve(`src/templates/schedule.js`);

    const blogResult = await graphql(`
    {
      allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "src/markdown/blog/"  }}
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
      filter: {fileAbsolutePath: {regex: "src/markdown/schedule/"  }}
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
        let blogPath = node.frontmatter.path
        createPage({
            path: slug,
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
