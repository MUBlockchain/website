import React from "react"
import "../components/app.css"
import SEO from "../components/seo"
import MUBCHeader from "../components/MUBCHeader"
import MUBCNavbar from "../components/MUBCNavbar"
import MUBCFooter from "../components/MUBCFooter"
import ExecutiveLeadershipTeam from "../components/leadership-components/ExecutiveLeadershipTeam";
import StrategicAdvisors from "../components/leadership-components/StrategicAdvisors";

const LeadershipTeam = () => (
  <div>
    <SEO title="Leadership Team" description="Miami University Blockchain Club leadership team and advisors" />
    <MUBCHeader />
    <MUBCNavbar />
    <br />
    <h2 id="leadership-team__header">Executive Leadership Team</h2>
    <ExecutiveLeadershipTeam />
    <hr className="divider" />
    <h2 id="leadership-team__strategic-advisors__header">Strategic Advisors</h2>
    <StrategicAdvisors />
    <MUBCFooter />
  </div>
)

export default LeadershipTeam