import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Affiliations = () => {
  return (
    <div>
    <Layout>
    <SEO title="Affiliations" description="Miami University Blockchain Club affiliates and sponsors"/>
    <div id="affiliations">
      <h2 id="affiliation__header">Our Partners</h2>
      <div>
        <div>
          <img id="farmer_image" src={require("../../static/img/farmer.png")} alt="Farmer"/>
        </div>
        <div>
          <img id="greenblock_image" src={require("../../static/img/greenblock.jpg")} alt="Greenblock"/>
        </div>
        <div>
          <img id="coinninja_image" src={require("../../static/img/coinninja.jpg")} alt="Coinninja"/>
        </div>
        <div>
          <img id="mousebelt_image" src={require("../../static/img/mousebelt.png")} alt="Mousebelt"/>
        </div>
      </div>
      <div>
        <div>
          <img id="blox_image" src={require("../../static/img/blox.png")} alt="Blox"/>
        </div>
        <div>
          <img id="block_key_image" src={require("../../static/img/blockkey_capital.png")} alt="Block Key Captital"/>
        </div>
        <div>
          <img id="block_tribune_image" src={require("../../static/img/blocktribune.png")} alt="Block Tribune"/>
        </div>
      </div>
      <div>
        <div>
          <img id="big_b_image "src={require("../../static/img/bigbidk.png")} alt="Big B"/>
        </div>
        <div>
          <img id="ben_image" src={require("../../static/img/ben.png")} alt="Blockchain Education Network"/>
        </div>
      </div>
    </div>
    </Layout>
    </div>
  )
}
export default Affiliations