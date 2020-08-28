import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import MUBCHeader from "../components/MUBCHeader"
import MUBCNavbar from "../components/MUBCNavbar"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <MUBCHeader />
    <MUBCNavbar />
    <Link to="/leadership-team">Leadership Team </Link> <br />
    <Link to="/affiliations">Affiliations</Link>
  </div>
)

export default IndexPage
