import React from "react"
import SEO from "../components/seo"
import MUBCNavbar from "../components/MUBCNavbar"
import MUBCHeader from "../components/MUBCHeader"
import MUBCFooter from "../components/MUBCFooter"

const Affiliations = () => {
  return (
    <div>
    <MUBCHeader />
    <MUBCNavbar/>
    <div id="affiliations">
      <SEO title="MUBC Affiliations"/>
      <h1 id="affiliations__header">Our Partners</h1>
      <div>
        <div>
          <img src={require("../images/farmer.png")}/>
        </div>
        <div>
          <img src={require("../images/greenblock.jpg")}/>
        </div>
        <div>
          <img src={require("../images/coinninja.jpg")}/>
        </div>
        <div>
          <img src={require("../images/farmer.png")}/>
        </div>
      </div>
      <div>
        <div>
          <img src={require("../images/blox.png")}/>
        </div>
        <div>
          <img src={require("../images/blockkey_capital.jpg")}/>
        </div>
        <div>
          <img src={require("../images/block_tribune.png")}/>
        </div>
      </div>
      <div></div>
    </div>
      <MUBCFooter />
    </div>
  )
}
export default Affiliations