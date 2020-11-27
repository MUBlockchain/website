import React from "react"
import "../components/app.css"
import SEO from "../components/seo"
import MUBCHeader from "../components/MUBCHeader"
import MUBCNavbar from "../components/MUBCNavbar"
import MUBCFooter from "../components/MUBCFooter"
import ExecutiveLeadershipTeam from "../components/leadership-components/ExecutiveLeadershipTeam";

const LeadershipTeam = () => (
  <div>
    <SEO title="Leadership Team" description="Miami University Blockchain Club leadership team" />
    <MUBCHeader />
    <MUBCNavbar />
    <br />
    <h2 className="leadership__header">Executive Leadership Team</h2>
    <ExecutiveLeadershipTeam />
    <MUBCFooter />
  </div>
)

export default LeadershipTeam