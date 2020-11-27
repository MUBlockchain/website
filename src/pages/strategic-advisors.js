import React from "react"
import SEO from "../components/seo"
import StrategicAdvisors from "../components/leadership-components/StrategicAdvisors";
import Layout from "../components/layout"

const StrategicAdvisorsPage = () => (
  <div>
    <Layout>
    <SEO title="Strategic Advisors" description="Miami University Blockchain Club strategic advisors" />
    <h2 className="leadership__header">Strategic Advisors</h2>
    <StrategicAdvisors />
    </Layout>
  </div>
)

export default StrategicAdvisorsPage