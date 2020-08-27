import React from "react"
import { Link } from "gatsby"
import { Col, Row, Button } from "react-bootstrap"
import "../components/app.css"
import SEO from "../components/seo"

const LeadershipTeam = () => (
  <div>
    <SEO title="MUBC Leadership Team"/>
    <h2 id="leadership-team__header">Executive Leadership Team</h2>
    <div className="leadership-card__row">
      <div className="leadership-card__column">
        <img src={require("../images/jack_gilcrest.jpeg")}/>
        <p>Jack Gilcrest</p>
        <p>President</p>
        <p>Jack Gilcrest is the current President of Miami University Blockchain Club. Stepping up from his role as VP
          of Research in 2019, Jack aims to continue to expand the professional operations of the club. As a computer
          science student, Jack often focuses on the more technical aspects of blockchain, having completed Hyperledger
          and Ethereum-based projects. Outside of academics, Jack Co-Founded and currently serves as Chief Technology
          Officer at blOX Consulting LLC. In the future, Jack hopes to continue down the path of software consulting
          working with corporate companies to harness the power of distributed ledger technology.</p>
        <a href="mailto:gilcrejp@miamioh.edu">gilcrejp@miamioh.edu</a>
        <a href="http://%20https//www.linkedin.com/in/jack-gilcrest/">LinkedIn</a>
      </div>
      <div className="leadership-card__column">
        <img src={require("../images/gatsby-icon.png")}/>
        <p>Alexandra Bartkoske</p>
        <p>VP of Finance</p>
        <p>Alexandra Bartkoske is a junior finance major and English minor from the Chicago suburbs. Alexandra has
          previous experience with various forms of technology through a Blockchain certificate through University of
          California - Berkeley, her on-campus job as a technology intern, and through her former position as Director
          of Technology in her business fraternity, Delta Sigma Pi. Alexandra is also an entrepreneur and has created a
          non-for-profit to assist military families in getting music lessons. She is excited to grow MUBC's footprint
          by exploring new avenues of funding and helping to create the best possible events to promote Blockchain
          technology and research.</p>
        <a href="mailto:bartkoas@miamioh.edu">bartkoas@miamioh.edu</a>
        <a href="http://%20https//www.linkedin.com/in/jack-gilcrest/">LinkedIn</a>
      </div>
      <div className="leadership-card__column">
        <img src={require("../images/gatsby-icon.png")}/>
        <p>Alex Stan</p>
        <p>VP of Professional Development</p>
        <p>Alex Stan is a sophomore Accountancy major in the Farmer School of Business. Alex is very passionate about
          blockchain technology and is eager to see how it will be applied in the world of business. He was part of
          setting up MUBC’s first ever Blockathon this past semester and is excited to carry that momentum into the
          spring semester for the annual Blockchain Conference. As VP of Professional Development he will be responsible
          for creating successful club events as well as connecting club members to various industry related companies
          that are looking for like minded students to extend internships and job offers too. Alex is looking to create
          more buzz around MUBC events in hopes of attracting more Miami University students as well as company
          sponsorships.</p>
        <a href="mailto:stanam@miamioh.edu">stanam@miamioh.edu</a>
        <a href="http://%20https//www.linkedin.com/in/jack-gilcrest/">LinkedIn</a>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default LeadershipTeam