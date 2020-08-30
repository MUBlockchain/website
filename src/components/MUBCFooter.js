import React from "react"
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"
import { Link } from 'gatsby'

const MUBCFooter = () => {
  return (
    <div id="mubc-footer">
      <div id="mubc-footer__icon-div">
          <a className="mubc-footer__media-link" href="https://twitter.com/mubcblockchain"><FaTwitter className="mubc-footer__icon"/></a>
          <a className="mubc-footer__media-link" href="https://www.instagram.com/mublockchainclub/"><FaInstagram className="mubc-footer__icon"/></a>
          <a className="mubc-footer__media-link" href="https://www.linkedin.com/company/mubc/"><FaLinkedin className="mubc-footer__icon"/></a>
          <a className="mubc-footer__media-link" href="https://www.youtube.com/channel/UC78tQagLk8hqRSsn1zkdySw"><FaYoutube className="mubc-footer__icon"/></a>
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