import React from "react"
import { Link } from 'gatsby'
import SocialLinks from "../components/SocialLinks"

const MUBCFooter = () => {
  return (
    <div id="mubc-footer">
      <div id="mubc-footer__icon-div">
          <SocialLinks linkClass="mubc-footer__media-link" iconClass="mubc-footer__icon" />
      </div>
      <p>Email us: <a href="mailto:mubc@miamioh.edu">mubc@miamioh.edu</a></p>
      <p>In building future leaders by connecting them with the Blockchain Ecosystem to foster innovation. </p>
      <div>
        <Link to="/conference-2019">2019 CONFERENCE</Link>
        <a href="https://mubc.io/mubc-blockchain-blog">MUBC BLOCKCHAIN BLOG</a>
      </div>
      <hr className="divider"/>
    </div>
  )
}
export default MUBCFooter