import React from "react"
import "../components/app.css"
import SEO from "../components/seo"
import MUBCHeader from "../components/MUBCHeader"
import MUBCNavbar from "../components/MUBCNavbar"
import MUBCFooter from "../components/MUBCFooter"
import StrategicAdvisors from "../components/leadership-components/StrategicAdvisors";

const StrategicAdvisorsPage = () => (
  <div>
    <SEO title="Strategic Advisors" description="Miami University Blockchain Club strategic advisors" />
    <MUBCHeader />
    <MUBCNavbar />
    <br />
    <h2 className="leadership__header">Strategic Advisors</h2>
    <StrategicAdvisors />
    <MUBCFooter />
  </div>
)

export default StrategicAdvisorsPage