const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ianbrighton/Documents/Blockchain/github-projects/mubc-website/gatsby-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ianbrighton/Documents/Blockchain/github-projects/mubc-website/gatsby-site/src/pages/404.js")))
}

