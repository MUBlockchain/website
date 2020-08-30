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
        {/* <div id="mubc-home__banner">
    </div> */}
        <div id="mubc-home__sessions">
            <h1>VIRTUAL BLOCKCHAIN CONFERENCE: FEATURED SESSIONS</h1>
            <hr className="divider"/>
            <div id="mubc-home__virtual-blockchain-conference">
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
                <hr className="divider"/>
                <div>

                </div>
            </div>
            <div id="mubc-home__contact">
                <h1>Contact Us</h1>
                <hr className="divider"/>
                <div id="mubc-home__contact__form__container">
                    <div id="mubc-home__contact__left">
                        <h4>Reach out to us to join or for anything else!</h4>
                        <form>
                            <input type="text" name="name" placeholder="Name*" required/>
                            <input type="text" name="email" placeholder="Email*" required/>
                            <input type="text" name="number" placeholder="Number*" required/>
                            <textarea placeholder="Why would you be a good fit to join us or what is your request?">
                   </textarea>
                        </form>
                    </div>
                    <div id="mubc-home__contact__right">
                        <h4>For any communications requests: </h4>
                        <p>Adrian Czajka</p>
                        <p>Miami University Blockchain Club VP of Public Relations</p>
                        <p>+1 (216) 952 9841</p>
                        <p><a href="mailto:czajkaat@miamioh.edu">czajkaat@miamioh.edu</a></p>
                        <br/>
                        <br/>
                        <p><a href="https://mubc.io/sponsor-us">Click here</a> for sponsorship info</p>
                        <h4>Miami University Blockchain Club</h4>
                        <p>83 North Patterson Avenue, Oxford, Ohio 45056, United States</p>
                    </div>
                </div>
            </div>
            <div id="mubc-home__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.1394750606646!2d-84.73194318463139!3d39.511341679480694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88403da0252af58b%3A0xff3c9ac9122d97ea!2sFarmer%20School%20of%20Business!5e0!3m2!1sen!2sus!4v1598650694110!5m2!1sen!2sus"
                ></iframe>
            </div>
        </div>
        <MUBCFooter/>
    </div>
)

export default IndexPage
