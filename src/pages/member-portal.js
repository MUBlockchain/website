import React from 'react'
import MUBCHeader from "../components/MUBCHeader"
import MUBCNavbar from "../components/MUBCNavbar"

const MemberPortal = () => {
  return(
    <div>
      <MUBCHeader />
      <MUBCNavbar />
      <div id="member-portal">
        <h1>Account Sign In</h1>
        <hr className="divider"/>
      </div>
    </div>
  )
}
export default MemberPortal