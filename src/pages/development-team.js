import React from "react"
import SEO from "../components/seo"
import Layout from '../components/layout'
import DevelopmentTeamRoll from "../components/leadership-components/DevelopmentTeam"

const DevelopmentTeam = () => (
  <div>
    <Layout>
    <SEO title="Development Team" description="Miami University Blockchain Club development team" />
    <h2 className="leadership__header">Development Team</h2>
    <DevelopmentTeamRoll />
    </Layout>
  </div>
)

export default DevelopmentTeam