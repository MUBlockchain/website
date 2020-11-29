import React from "react"
import SEO from "../components/seo"
import ExecutiveLeadershipTeam from "../components/leadership-components/ExecutiveLeadershipTeam";
import Layout from "../components/layout"

const LeadershipTeam = () => (
  <div>
    <Layout>
    <SEO title="Leadership Team" description="Miami University Blockchain Club leadership team" />
    <h2 className="leadership__header">Executive Leadership Team</h2>
    <ExecutiveLeadershipTeam />
    </Layout>
  </div>
)

export default LeadershipTeam