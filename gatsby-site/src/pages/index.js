import React from "react"
import SEO from "../components/seo"
import MUBCHeader from "../components/MUBCHeader"
import MUBCNavbar from "../components/MUBCNavbar"
import "bootstrap/dist/css/bootstrap.min.css"
import MUBCFooter from "../components/MUBCFooter"

const IndexPage = () => (
  <div>
    <SEO title="Home"/>
    <MUBCHeader/>
    <MUBCNavbar/>
    <div id="mubc-home__sessions">
      <h1>VIRTUAL BLOCKCHAIN CONFERENCE: FEATURED SESSIONS</h1>
      <hr className="divider"/>
      <div>
        <img className="mubc-home__sessions__carousel__image" src={require("../images/slideshow_1.jpg")}/>
        <img className="mubc-home__sessions__carousel__image" src={require("../images/slideshow_2.jpg")}/>
        <img className="mubc-home__sessions__carousel__image" src={require("../images/slideshow_3.jpg")}/>
        <img className="mubc-home__sessions__carousel__image" src={require("../images/slideshow_4.jpg")}/>
      </div>
      <div id="mubc-home__conference-link">
        <a href="http://virtualblockchain.io/">Visit the Virtual Blockchain Conference Site</a>
      </div>
      <div id="mubc-home__blockathon">
        <div>
          <h2>MIAMI UNIVERSITY BLOCKATHON 2019</h2>
        </div>
        <div>
          <a href="https://mubc.io/2019-blockathon">EVENT RECAP</a>
        </div>
      </div>
      <div id="mubc-home__about-us">
        <h1>About Us</h1>
        <hr className="divider"/>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div id="mubc-home__blockchain-conference">
        <div>
          <h2>2019 MIAMI UNIVERSITY BLOCKCHAIN CONFERENCE</h2>
        </div>
        <div>
          <a href="https://mubc.io/2019-blockathon">EVENT RECAP</a>
        </div>
      </div>
      <div id="mubc-home__socials">
        <h1>Socials</h1>
        <hr className="divider" />
        <div>

        </div>
      </div>
      <div id="mubc-home__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.1394750606646!2d-84.73194318463139!3d39.511341679480694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88403da0252af58b%3A0xff3c9ac9122d97ea!2sFarmer%20School%20of%20Business!5e0!3m2!1sen!2sus!4v1598650694110!5m2!1sen!2sus"
        ></iframe>
      </div>
      <MUBCFooter />
    </div>
  </div>
)

export default IndexPage
