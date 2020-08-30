const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ianbrighton/Documents/Blockchain/github-projects/mubc-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ianbrighton/Documents/Blockchain/github-projects/mubc-website/src/pages/404.js"))),
  "component---src-pages-affiliations-js": hot(preferDefault(require("/Users/ianbrighton/Documents/Blockchain/github-projects/mubc-website/src/pages/affiliations.js"))),
  "component---src-pages-blockathon-2019-js": hot(preferDefault(require("/Users/ianbrighton/Documents/Blockchain/github-projects/mubc-website/src/pages/blockathon-2019.js"))),
  "component---src-pages-conference-2019-js": hot(preferDefault(require("/Users/ianbrighton/Documents/Blockchain/github-projects/mubc-website/src/pages/conference-2019.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ianbrighton/Documents/Blockchain/github-projects/mubc-website/src/pages/index.js"))),
  "component---src-pages-leadership-team-js": hot(preferDefault(require("/Users/ianbrighton/Documents/Blockchain/github-projects/mubc-website/src/pages/leadership-team.js"))),
  "component---src-pages-member-portal-js": hot(preferDefault(require("/Users/ianbrighton/Documents/Blockchain/github-projects/mubc-website/src/pages/member-portal.js")))
}

