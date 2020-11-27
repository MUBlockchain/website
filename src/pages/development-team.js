import React from "react"
import "../components/app.css"
import SEO from "../components/seo"
import MUBCHeader from "../components/MUBCHeader"
import MUBCNavbar from "../components/MUBCNavbar"
import MUBCFooter from "../components/MUBCFooter"
import DevelopmentTeamRoll from "../components/leadership-components/DevelopmentTeam"

const DevelopmentTeam = () => (
  <div>
    <SEO title="Development Team" description="Miami University Blockchain Club development team" />
    <MUBCHeader />
    <MUBCNavbar />
    <br />
    <h2 className="leadership__header">Development Team</h2>
    <DevelopmentTeamRoll />
    <MUBCFooter />
  </div>
)

export default DevelopmentTeam